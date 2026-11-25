const initializedRings = new WeakSet<HTMLElement>();

const modulo = (value: number, length: number) => ((value % length) + length) % length;
const signedAngle = (degrees: number, period: number) => modulo(degrees + period / 2, period) - period / 2;

/** Enhance the readable server-rendered list without changing its content. */
export function initPublicationRings() {
  document.querySelectorAll<HTMLElement>('[data-publication-ring]').forEach((root) => {
    if (initializedRings.has(root)) return;
    const stage = root.querySelector<HTMLElement>('[data-ring-stage]');
    const track = root.querySelector<HTMLElement>('[data-ring-track]');
    const cards = Array.from(root.querySelectorAll<HTMLElement>('[data-ring-card]'));
    if (!stage || !track || cards.length < 2) return;
    initializedRings.add(root);

    const contents = cards.map((card) => card.querySelector<HTMLElement>('.ring-card-content'));
    const previous = root.querySelector<HTMLButtonElement>('[data-ring-prev]');
    const next = root.querySelector<HTMLButtonElement>('[data-ring-next]');
    const random = root.querySelector<HTMLButtonElement>('[data-ring-random]');
    const mode = root.querySelector<HTMLButtonElement>('[data-ring-mode]');
    const counter = root.querySelector<HTMLElement>('[data-ring-counter]');
    const status = root.querySelector<HTMLElement>('[data-ring-status]');
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const controller = new AbortController();
    const { signal } = controller;
    const count = cards.length;
    const step = count >= 6 ? Math.min(360 / count, 30) : 360 / count;
    const span = count * step;
    let ringMode = false;
    let rotation = 0;
    let current = Math.max(0, cards.findIndex((card) => card.dataset.id === root.dataset.initialPublication));
    let requested = current;
    let frame = 0;
    let animation = false;
    let wheelTimer = 0;
    let suppressClickUntil = 0;
    let pointer: { id: number; x: number; y: number; rotation: number; engaged: boolean } | null = null;

    const closestIndex = () => modulo(Math.round(-rotation / step), count);
    const announce = () => {
      if (status) status.textContent = `Paper ${current + 1} of ${count}: ${cards[current].dataset.title ?? ''}`;
    };

    function cancelFrame() {
      window.cancelAnimationFrame(frame);
      frame = 0;
      animation = false;
    }

    function cancelWheel() {
      window.clearTimeout(wheelTimer);
      wheelTimer = 0;
    }

    function render() {
      const active = closestIndex();
      // Move focus before making its previous card inert.
      const focusedCard = document.activeElement?.closest('[data-ring-card]');
      if (focusedCard && focusedCard !== cards[active]) stage!.focus({ preventScroll: true });
      cards.forEach((card, index) => {
        // Recycle cards at the invisible rear of the virtual ring.
        const angle = signedAngle(index * step + rotation, span);
        const distance = Math.abs(angle);
        const opacity = distance <= 40 ? 1 : Math.max(0, (88 - distance) / 48);
        const isActive = index === active;
        card.style.setProperty('--card-angle', `${angle}deg`);
        card.style.opacity = String(opacity);
        card.style.pointerEvents = opacity < 0.04 ? 'none' : '';
        card.classList.toggle('is-active', isActive);
        card.setAttribute('aria-hidden', String(!isActive));
        if (contents[index]) contents[index]!.inert = !isActive;
      });
      current = active;
      root.dataset.activeIndex = String(current);
      if (counter) counter.textContent = `${String(current + 1).padStart(2, '0')} / ${String(count).padStart(2, '0')}`;
    }

    function queueRender() {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        render();
      });
    }

    function measure() {
      if (!ringMode) return;
      const width = cards[0].offsetWidth || 390;
      // Keep adjacent card planes separate even when the collection grows.
      const radius = Math.max(width * 0.75, (width + 28) / (2 * Math.tan(step * Math.PI / 360)));
      stage!.style.setProperty('--ring-radius', `${radius}px`);
      stage!.style.setProperty('--ring-perspective', `${Math.max(1800, radius * 2.8)}px`);
    }

    function finishMotion() {
      rotation = signedAngle(rotation, span);
      animation = false;
      requested = closestIndex();
      render();
      announce();
    }

    function moveTo(index: number, spin = false) {
      if (!ringMode) return;
      cancelFrame();
      cancelWheel();
      requested = modulo(index, count);
      const start = rotation;
      const target = start + signedAngle(-requested * step - start, span) + (spin ? -2 * span : 0);
      if (media.matches || Math.abs(target - start) < 0.01) {
        rotation = target;
        finishMotion();
        return;
      }
      const duration = spin ? 1150 : 320;
      const started = performance.now();
      animation = true;
      const tick = (now: number) => {
        const progress = Math.min(1, (now - started) / duration);
        const eased = 1 - (1 - progress) ** (spin ? 4 : 3);
        rotation = start + (target - start) * eased;
        render();
        if (progress < 1) frame = requestAnimationFrame(tick);
        else {
          frame = 0;
          rotation = target;
          finishMotion();
        }
      };
      frame = requestAnimationFrame(tick);
    }

    function releasePointer() {
      const released = pointer;
      pointer = null;
      if (released && stage!.hasPointerCapture(released.id)) stage!.releasePointerCapture(released.id);
      root.classList.remove('is-dragging');
    }

    function changeMode(useRing: boolean, notify = true) {
      cancelFrame();
      cancelWheel();
      releasePointer();
      ringMode = useRing;
      root.classList.toggle('is-ring', useRing);
      root.classList.toggle('is-list', !useRing);
      stage!.tabIndex = useRing ? 0 : -1;
      if (useRing) {
        stage!.setAttribute('aria-roledescription', 'carousel');
        stage!.setAttribute('aria-describedby', 'research-ring-help');
      } else {
        stage!.removeAttribute('aria-roledescription');
        stage!.removeAttribute('aria-describedby');
      }
      root.querySelectorAll<HTMLElement>('.ring-card-body').forEach((body) => { body.tabIndex = useRing ? 0 : -1; });
      [previous, next, random].forEach((button) => { if (button) button.disabled = !useRing; });
      if (mode) {
        mode.hidden = false;
        mode.textContent = useRing ? 'List view' : 'Explore in 3D';
        mode.setAttribute('aria-pressed', String(useRing));
        mode.setAttribute('aria-label', useRing ? 'Show publications as a list' : 'Show publications as 3D cards');
      }
      if (useRing) {
        rotation = -current * step;
        requested = current;
        measure();
        render();
      } else {
        cards.forEach((card, index) => {
          card.style.removeProperty('--card-angle');
          card.style.removeProperty('opacity');
          card.style.removeProperty('pointer-events');
          card.classList.remove('is-active');
          card.removeAttribute('aria-hidden');
          if (contents[index]) contents[index]!.inert = false;
        });
        if (counter) counter.textContent = `${count} papers`;
      }
      if (notify && status) status.textContent = useRing ? '3D card view. Use left and right arrow keys to browse.' : `List view. All ${count} papers are available.`;
    }

    stage.addEventListener('pointerdown', (event) => {
      if (!ringMode || !event.isPrimary || event.button !== 0) return;
      const target = event.target instanceof Element ? event.target : null;
      // Buttons and resource links retain their native click behavior.
      if (target?.closest('button, a, input, textarea, select, summary')) return;
      cancelFrame();
      cancelWheel();
      requested = closestIndex();
      suppressClickUntil = 0;
      pointer = { id: event.pointerId, x: event.clientX, y: event.clientY, rotation, engaged: false };
    }, { signal });

    stage.addEventListener('pointermove', (event) => {
      if (!pointer || pointer.id !== event.pointerId) return;
      const dx = event.clientX - pointer.x;
      const dy = event.clientY - pointer.y;
      if (!pointer.engaged) {
        if (Math.abs(dy) > 6 && Math.abs(dy) >= Math.abs(dx)) {
          releasePointer();
          moveTo(closestIndex());
          return;
        }
        if (Math.abs(dx) <= 6 || Math.abs(dx) <= Math.abs(dy)) return;
        pointer.engaged = true;
        stage!.setPointerCapture(event.pointerId);
        root.classList.add('is-dragging');
      }
      rotation = pointer.rotation + dx * 0.16;
      queueRender();
    }, { signal });

    const endDrag = (event: PointerEvent) => {
      if (!pointer || pointer.id !== event.pointerId) return;
      const dragged = pointer.engaged;
      releasePointer();
      if (dragged) {
        suppressClickUntil = performance.now() + 350;
        moveTo(closestIndex());
      } else if (Math.abs(signedAngle(rotation + closestIndex() * step, span)) > 0.01) {
        moveTo(closestIndex());
      }
    };
    stage.addEventListener('pointerup', endDrag, { signal });
    stage.addEventListener('pointercancel', endDrag, { signal });
    stage.addEventListener('lostpointercapture', (event) => {
      if (pointer?.id === event.pointerId) endDrag(event);
    }, { signal });
    window.addEventListener('pointerup', endDrag, { signal });

    stage.addEventListener('click', (event) => {
      if (!ringMode) return;
      if (performance.now() < suppressClickUntil) {
        suppressClickUntil = 0;
        event.preventDefault();
        event.stopPropagation();
        return;
      }
      const target = event.target instanceof Element ? event.target.closest<HTMLElement>('[data-ring-card]') : null;
      if (!target) return;
      const index = cards.indexOf(target);
      if (index !== -1 && index !== current) {
        event.preventDefault();
        event.stopPropagation();
        moveTo(index);
      }
    }, { capture: true, signal });

    stage.addEventListener('wheel', (event) => {
      if (!ringMode || event.ctrlKey || Math.abs(event.deltaX) <= Math.abs(event.deltaY)) return;
      event.preventDefault();
      cancelFrame();
      const units = event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? stage!.clientWidth : 1;
      rotation -= event.deltaX * units * 0.16;
      requested = closestIndex();
      queueRender();
      cancelWheel();
      wheelTimer = window.setTimeout(() => moveTo(closestIndex()), 160);
    }, { passive: false, signal });

    root.addEventListener('keydown', (event) => {
      if (!ringMode || event.altKey || event.ctrlKey || event.metaKey) return;
      const target = event.target instanceof Element ? event.target : null;
      if (!target || target.closest('input, textarea, select, [contenteditable="true"]') || target === mode || target === random) return;
      if (!stage!.contains(target) && target !== previous && target !== next) return;
      const from = animation ? requested : current;
      const destination = event.key === 'ArrowLeft' ? from - 1 : event.key === 'ArrowRight' ? from + 1 : event.key === 'Home' ? 0 : event.key === 'End' ? count - 1 : null;
      if (destination === null) return;
      event.preventDefault();
      moveTo(destination);
    }, { signal });

    previous?.addEventListener('click', () => moveTo((animation ? requested : current) - 1), { signal });
    next?.addEventListener('click', () => moveTo((animation ? requested : current) + 1), { signal });
    random?.addEventListener('click', () => moveTo(current + 1 + Math.floor(Math.random() * (count - 1)), true), { signal });
    mode?.addEventListener('click', () => changeMode(!ringMode), { signal });
    media.addEventListener('change', () => { if (media.matches) changeMode(false); }, { signal });
    let viewBeforePrint = false;
    window.addEventListener('beforeprint', () => { viewBeforePrint = ringMode; changeMode(false, false); }, { signal });
    window.addEventListener('afterprint', () => { if (viewBeforePrint) changeMode(true, false); }, { signal });

    const resize = new ResizeObserver(measure);
    resize.observe(stage);
    root.classList.add('is-enhanced');
    changeMode(ringMode, false);

    document.addEventListener('astro:before-swap', () => {
      cancelFrame();
      cancelWheel();
      resize.disconnect();
      controller.abort();
      initializedRings.delete(root);
    }, { once: true, signal });
  });
}
