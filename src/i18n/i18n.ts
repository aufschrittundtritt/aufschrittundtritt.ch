export type Locale = "en" | "fr" | "de" | string;

interface Fallback {
	[key: string]: string
}
type PathNames = {
	[key: string]: {
		[locale in Locale]: string
	}
};

export const defaultLocale: string = "en"
export const locales = ["en", "fr", "de"]
export const fallback: Fallback = {
	fr: "en",
	de: "en"
}
// Define the paths for collections
export const collectionDirectoryNames: PathNames = {
	faq: {
		en: 'faq',
		de: 'faq',
		fr: 'faq'
	},
	imprint: {
		en: 'imprint',
	}
}

export const directoryNames: PathNames = {}