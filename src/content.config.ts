import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const themeColor = z.enum(['purple', 'teal', 'coral', 'amber', 'blue']);

const notes = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/notes' }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    tags: z.array(z.string()),
    cover: z.object({
      motif: z.enum(['network', 'curve', 'matrix', 'flow', 'scatter']),
      color: themeColor,
    }),
    tldr: z.string(),
    relatedPub: z.string().optional(),
    draft: z.boolean().default(false),
    readingTime: z.number().int().min(1),
  }),
});

const publications = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/publications' }),
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()),
    authorBoldIndices: z.array(z.number().int()),
    venue: z.string(),
    venueFull: z.string(),
    year: z.number(),
    award: z.string().optional(),
    tldr: z.string(),
    figure: z.string(),
    themeColor: themeColor,
    links: z.object({
      pdf: z.string().optional(),
      code: z.string().optional(),
      bibtex: z.string().optional(),
      project: z.string().optional(),
      video: z.string().optional(),
    }),
    featured: z.boolean().default(false),
    featuredOrder: z.number().optional(),
  }),
});

export const collections = { notes, publications };
