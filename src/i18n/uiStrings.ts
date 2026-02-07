import type { Locale } from "./i18n";

interface TypeUIStrings {
	[key: string]: {
		[locale in Locale]: string | undefined // If we'd enforce keys to be any of the already added language codes, it'd be impossible to add new locale strings before enabling that locale site-wide.
	}
}

export const uiStrings: TypeUIStrings = {
	siteDescription: {
		en: 'Auf Schritt und Tritt is a research project!',
		de: 'Auf Schritt unt Tritt ist ein Rechercheprojekt!',
		fr: 'Auf Schritt und Tritt est un projet de recherche!',
	},
	en: {
		en: 'en',
		de: 'en',
		fr: 'en',
	},
	de: {
		en: 'de',
		de: 'de',
		fr: 'de',
	},
	fr: {
		en: 'fr',
		de: 'fr',
		fr: 'fr'
	},
	pageNotFoundHeading: {
		en: 'Page not found',
		de: 'Seite nicht gefunden',
		fr: 'Page non trouvée'
	},
	pageNotFoundBody: {
		en: '404!',
		de: '404!',
		fr: '404!'
	},
	searchPlaceHolder: {
		en: 'Suchen...',
		de: 'Suchen...',
		fr: 'Recherche...'
	},
	backToFaq: {
		en: 'Back to the FAQ...',
		de: 'Zurück zum FAQ...',
		fr: 'Retours à FAQ...'
	}
};
