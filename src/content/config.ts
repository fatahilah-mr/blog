import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title:       z.string(),
    description: z.string(),
    pubDate:     z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage:   z.string().optional(),
    tags:        z.array(z.string()).default([]),
    lang:        z.enum(['id', 'en']).default('id'),
    draft:       z.boolean().default(false),
    project:     z.string().optional(),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title:       z.string(),
    description: z.string(),
    status:      z.enum(['active', 'completed', 'archived']),
    techStack:   z.array(z.string()),
    repoUrl:     z.string().url().or(z.literal('')).optional(),
    demoUrl:     z.string().url().or(z.literal('')).optional(),
    heroImage:   z.string().optional(),
    featured:    z.boolean().default(false),
    startDate:   z.coerce.date(),
  }),
});

export const collections = { blog, projects };
