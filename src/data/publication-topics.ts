// Areas cover the full catalogue; themes are a selective view of research interests.
export const publicationAreaIds = ['core-ml', 'llms', 'embodied-ai', 'computer-vision'] as const;
export const publicationThemeIds = ['rl-post-training', 'scalable-rl', 'plasticity-loss', 'exploration', 'efficiency', 'generalization'] as const;

export type PublicationAreaId = typeof publicationAreaIds[number];
export type PublicationThemeId = typeof publicationThemeIds[number];

export const publicationAreaLabels: Record<PublicationAreaId, string> = {
  'core-ml': 'Core ML',
  llms: 'LLMs',
  'embodied-ai': 'Embodied AI',
  'computer-vision': 'Computer Vision',
};

export const publicationThemeLabels: Record<PublicationThemeId, string> = {
  'rl-post-training': 'RL Post-Training',
  'scalable-rl': 'Scalable RL',
  'plasticity-loss': 'Plasticity Loss',
  exploration: 'Exploration',
  efficiency: 'Efficiency',
  generalization: 'Generalization',
};

export const publicationAreas = publicationAreaIds.map((id) => ({ id, label: publicationAreaLabels[id] }));
export const publicationThemes = publicationThemeIds.map((id) => ({ id, label: publicationThemeLabels[id] }));
