import fs from 'node:fs';
import yaml from 'js-yaml';
import { z } from 'zod';

const cvSchema = z.object({
  trajectory: z.array(
    z.object({
      years: z.string(),
      place: z.string(),
      role: z.string(),
    })
  ),
  awards: z.array(
    z.object({
      year: z.number(),
      text: z.string(),
    })
  ),
  talks: z.array(
    z.object({
      year: z.number(),
      venue: z.string(),
      title: z.string(),
    })
  ),
  service: z.array(z.string()),
});

export type CV = z.infer<typeof cvSchema>;

export function loadCV(): CV {
  const raw = fs.readFileSync('src/data/cv.yaml', 'utf-8');
  return cvSchema.parse(yaml.load(raw));
}

const updateSchema = z.object({
  date: z.date(),
  category: z.enum(['paper', 'award', 'honor', 'milestone', 'talk']),
  text: z.string(),
  relatedPub: z.string().optional(),
});

const updatesSchema = z.array(updateSchema);

export type Update = z.infer<typeof updateSchema>;

export function loadUpdates(): Update[] {
  const raw = fs.readFileSync('src/data/updates.yaml', 'utf-8');
  return updatesSchema.parse(yaml.load(raw));
}
