export const directionArtIds = ['agentic-robot-learning', 'online-experience', 'learning-dynamics'] as const;
export type DirectionArtId = typeof directionArtIds[number];

interface NoteArt {
  src: string;
  alt: string;
}

const directionArt: Record<DirectionArtId, NoteArt> = {
  'agentic-robot-learning': {
    src: '/art/agentic-robot-learning.webp',
    alt: 'Blue ink illustration of a robot choosing learning routes and developing a physical skill',
  },
  'online-experience': {
    src: '/art/online-experience-v2.webp',
    alt: 'Teal ink illustration of failed construction attempts, recorded feedback, and an improved solution reused in a new task',
  },
  'learning-dynamics': {
    src: '/art/learning-dynamics-v3.webp',
    alt: 'Purple ink illustration of a learning landscape with stalled updates on a plateau and oscillating then progressing updates in a narrow valley',
  },
};

const colorArt: Record<string, NoteArt> = {
  purple: { src: '/art/sparsity.webp', alt: 'Purple ink illustration of a sparse network opening into a larger space' },
  teal: { src: '/art/plasticity.webp', alt: 'Teal ink illustration of branching paths that grow and reconnect' },
  coral: { src: '/art/generalization.webp', alt: 'Coral ink illustration of geometric forms seen through different windows' },
  blue: { src: '/art/agentic-policy.webp', alt: 'Blue ink illustration of exploratory paths refining into connected, reusable structures' },
};

export function resolveNoteArt(cover: { color?: string; art?: DirectionArtId }): NoteArt {
  return cover.art ? directionArt[cover.art] : colorArt[cover.color ?? 'purple'] ?? colorArt.purple;
}
