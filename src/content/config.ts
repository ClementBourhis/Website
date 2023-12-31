import { defineCollection, z } from 'astro:content';

export const collections = {
	work: defineCollection({
		schema: z.object({
			title: z.string(),
			description: z.string(),
			publishDate: z.coerce.date(),
			tags: z.array(z.string()),
			img: z.string(),
			img_alt: z.string().optional(),
			miniature: z.string().optional(),
			ressource: z.string().optional(),
			ressource_type: z.string().optional(),
		}),
	}),
};
