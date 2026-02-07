import rss from '@astrojs/rss';
import { siteTitle } from '../consts';
import { uiStrings } from '@i18n/uiStrings';
import { getFaqToRenderInRss } from '@src/utilities/getFaqToRenderInRss';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';
import type { APIContext } from 'astro';
const parser = new MarkdownIt();

export async function GET(context: APIContext) {
	const questionsToRender = await getFaqToRenderInRss(context, 'en', 'faq')

	return rss({
		title: siteTitle,
		description: uiStrings.siteDescription.de,
		site: context.site,
		items: questionsToRender.map((q) => ({
			title: q.title ?? "",
			pubDate: q.pubDate ?? new Date(),
			link: q.link,
			content: sanitizeHtml(parser.render(q.body)),
			...q
		})),
	});
}
