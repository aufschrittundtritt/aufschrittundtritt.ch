import { defineCollection, z } from 'astro:content';

const faqCollection = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		reference: z.string().optional(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		position: z.number(),
		tags: z.array(z.string()).default(['other']),
	}),
});

export const collections = {
	'faq' : faqCollection,
}

