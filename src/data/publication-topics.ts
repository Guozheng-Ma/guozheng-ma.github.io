export const publicationTopicIds = ['offline-online', 'scaling-sparsity', 'plasticity', 'visual-rl'] as const;

export type PublicationTopicId = typeof publicationTopicIds[number];

export const publicationTopicLabels: Record<PublicationTopicId, string> = {
  'offline-online': 'Offline–online RL',
  'scaling-sparsity': 'Scaling & sparsity',
  plasticity: 'Plasticity',
  'visual-rl': 'Visual RL',
};

export const publicationTopics = publicationTopicIds.map((id) => ({
  id,
  label: publicationTopicLabels[id],
}));
