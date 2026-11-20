import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const reviews = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/reviews' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    airportId: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('性价比机场团队'),
    rating: z.number().default(4.8),
    pros: z.array(z.string()).default([]),
    cons: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
  }),
});

const guides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guides' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    platform: z.string().default('All'),
    client: z.string(),
    difficulty: z.string().default('新手入门'),
    readingTime: z.string().default('5 分钟'),
    featured: z.boolean().default(false),
  }),
});

export const collections = { reviews, guides };
