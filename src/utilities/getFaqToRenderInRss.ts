import { getQuestionPath } from '@src/utilities/getQuestionPath';
import getQuestions from '@src/utilities/getQuestions';
import { getLocaleFromUrl } from '@i18n/utilities';
import type { APIContext } from 'astro';

export async function getFaqToRenderInRss(_context: APIContext, locale: string, collection: "faq") {
	const questions = (await getQuestions(locale, collection))
		.slice(0, 50)
		.map((q) => ({
			...q.data,
			link: getQuestionPath(locale || getLocaleFromUrl(q.slug), collection, q.slug),
			body: q.body
		}));
	return questions
}