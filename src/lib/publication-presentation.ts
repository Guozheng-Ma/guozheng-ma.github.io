import { profile } from '../data/profile';

export const publicationStatuses = ['published', 'accepted', 'preprint'] as const;
export const publicationAuthorships = ['first', 'co-first', 'coauthor'] as const;

export type PublicationStatus = typeof publicationStatuses[number];
export type PublicationAuthorship = typeof publicationAuthorships[number];

export const publicationStatusLabels: Record<PublicationStatus, string> = {
  published: 'Published',
  accepted: 'Accepted',
  preprint: 'Preprint',
};

export const publicationAuthorshipLabels: Record<PublicationAuthorship, string> = {
  first: 'First author',
  'co-first': 'Co-first author',
  coauthor: 'Co-author',
};

interface AuthorData {
  authors: string[];
  authorBoldIndices: number[];
  equalContributionIndices: number[];
}

export function publicationAuthors(publication: AuthorData) {
  return publication.authors.map((author, index) => {
    const trimmedAuthor = author.trim();
    const name = trimmedAuthor.replace(/\*+$/, '').trim();
    const equalContribution = publication.equalContributionIndices.includes(index) || /\*+$/.test(trimmedAuthor);
    return {
      name,
      displayName: `${name}${equalContribution ? '*' : ''}`,
      equalContribution,
      emphasized: name === profile.name || publication.authorBoldIndices.includes(index),
    };
  });
}
