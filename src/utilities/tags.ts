import getPagePath from '@src/utilities/getPagePath';
import getQuestions from '@src/utilities/getQuestions';
import slugify from '@sindresorhus/slugify';
import { directoryNames } from '@i18n/i18n';

export type Tags = {
  slugified: string; 
  name: string;
}[]

export async function getUniqueTags(collection:any, locale: string = ''): Promise<Tags>{ 
  return (await getQuestions(locale, collection, ''))
    .flatMap(post => post.data.tags)
    .map(tag => ({
      slugified: slugify(tag),
      name: tag 
    }))
    .filter((value, index, self) =>
      // Tag is slugified here just in case in other places we'd use a different method to slugify it.
      self.findIndex(tag => tag.slugified === value.slugified) === index
    )
    .sort((tagA, tagB) => tagA.slugified.localeCompare(tagB.slugified));
};