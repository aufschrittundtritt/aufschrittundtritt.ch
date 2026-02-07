import { type CollectionEntry, getCollection } from 'astro:content';
import { getLocaleFromUrl } from '@i18n/utilities'

export default async function getQuestions(locale: string, collection: "faq" = 'faq', sort: string = 'reverseChronological') {
  let questions = await getCollection(collection);
  if (locale !== '') questions = questions.filter(function (entry: CollectionEntry<'faq'>) { return getLocaleFromUrl(entry.slug) === locale })
  if (sort === 'reverseChronological') questions = questions.sort((a: CollectionEntry<'faq'>, b: CollectionEntry<'faq'>) =>
    b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  )
  return questions
};