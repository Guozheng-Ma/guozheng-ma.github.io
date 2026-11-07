import { publicationAreaIds, publicationThemeIds } from '../data/publication-topics';
import { publicationStatuses, type PublicationAuthorship, type PublicationStatus } from './publication-presentation';

export interface PublicationFilters {
  area: string;
  theme: string;
  status: PublicationStatus | 'all';
  role: 'all' | 'lead' | 'coauthor';
}

export interface FilterablePublication {
  areas: readonly string[];
  themes: readonly string[];
  status: PublicationStatus;
  authorship: PublicationAuthorship;
}

export const defaultPublicationFilters: PublicationFilters = {
  area: 'all', theme: 'all', status: 'all', role: 'all',
};

const legacyTopics: Record<string, Partial<Pick<PublicationFilters, 'area' | 'theme'>>> = {
  'offline-online': { theme: 'rl-post-training' },
  'scaling-sparsity': { theme: 'scalable-rl' },
  plasticity: { theme: 'plasticity-loss' },
  'visual-rl': { area: 'embodied-ai' },
  'language-reasoning': { area: 'llms' },
  'agents-robotics': { area: 'embodied-ai' },
  '3d-vision': { area: 'computer-vision' },
};
const knownAreas = new Set<string>(['all', ...publicationAreaIds]);
const knownThemes = new Set<string>(['all', ...publicationThemeIds]);
const knownStatuses = new Set<string>(['all', ...publicationStatuses]);

export function publicationFiltersFromParams(params: URLSearchParams): PublicationFilters {
  const legacy = legacyTopics[params.get('topic') ?? ''] ?? {};
  const area = params.get('area') ?? legacy.area ?? 'all';
  const theme = params.get('theme') ?? legacy.theme ?? 'all';
  const status = params.get('status') ?? 'all';
  const role = params.get('role');
  return {
    area: knownAreas.has(area) ? area : 'all',
    theme: knownThemes.has(theme) ? theme : 'all',
    status: knownStatuses.has(status) ? status as PublicationFilters['status'] : 'all',
    role: role === 'lead' || role === 'coauthor' ? role : 'all',
  };
}

export function matchesPublication(publication: FilterablePublication, filters: PublicationFilters) {
  return (filters.area === 'all' || publication.areas.includes(filters.area))
    && (filters.theme === 'all' || publication.themes.includes(filters.theme))
    && (filters.status === 'all' || publication.status === filters.status)
    && (filters.role === 'all'
      || (filters.role === 'lead' && (publication.authorship === 'first' || publication.authorship === 'co-first'))
      || (filters.role === 'coauthor' && publication.authorship === 'coauthor'));
}
