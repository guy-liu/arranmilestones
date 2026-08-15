import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'zod';

const milestonesCollection = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/milestones' }),
  schema: z.object({
    title: z.string(),
    location: z.string(),
    description: z.string(),
    image: z.string().optional(),
  }),
});

export const collections = {
  milestones: milestonesCollection,
};
