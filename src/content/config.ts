import { defineCollection, z } from 'astro:content';

const commonSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  tags: z.array(z.string()),
  readingTime: z.string(),
  draft: z.boolean().default(false),
  featured: z.boolean().optional(),
});

const notes = defineCollection({ schema: commonSchema });
const checklists = defineCollection({ schema: commonSchema });
const cases = defineCollection({ schema: commonSchema });

export const collections = { notes, checklists, cases };
