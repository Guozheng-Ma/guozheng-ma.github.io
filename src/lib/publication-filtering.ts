import type { PublicationAuthorship, PublicationStatus } from './publication-presentation';

export interface PublicationFilters {
  topic: string;
  status: PublicationStatus | 'all';
  role: 'all' | 'lead';
}

export interface FilterablePublication {
  topics: readonly string[];
  status: PublicationStatus;
  authorship: PublicationAuthorship;
}

export function matchesPublication(publication: FilterablePublication, filters: PublicationFilters) {
  return (filters.topic === 'all' || publication.topics.includes(filters.topic))
    && (filters.status === 'all' || publication.status === filters.status)
    && (filters.role === 'all' || publication.authorship === 'first' || publication.authorship === 'co-first');
}
