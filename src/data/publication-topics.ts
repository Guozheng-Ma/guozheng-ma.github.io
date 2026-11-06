export const publicationTopicIds = ['offline-online', 'scaling-sparsity', 'plasticity', 'visual-rl', 'language-reasoning', 'agents-robotics', '3d-vision'] as const;

export type PublicationTopicId = typeof publicationTopicIds[number];

export const publicationTopicLabels: Record<PublicationTopicId, string> = {
  'offline-online': 'Offline–online RL',
  'scaling-sparsity': 'Scaling & optimization',
  plasticity: 'Plasticity',
  'visual-rl': 'Visual RL',
  'language-reasoning': 'Language & reasoning',
  'agents-robotics': 'Agents & robotics',
  '3d-vision': '3D vision',
};

export const publicationTopics = publicationTopicIds.map((id) => ({
  id,
  label: publicationTopicLabels[id],
}));
