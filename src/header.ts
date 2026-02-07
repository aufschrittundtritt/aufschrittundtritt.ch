export type navigationItem = Readonly<{
	path: string,
	label: string,
}>

export const headerMenu: Record<string, Record<string, navigationItem[]>> = {
	en: {
		items: [{
			path: '/',
			label: 'Home'
		},
		{
			path: '/faq',
			label: 'Faq'
		},
		{
			path: '/kontakt',
			label: 'Kontakt'
		}]
	},
	de: {
		items: [{
			path: '/de/',
			label: 'Home'
		},
		{
			path: '/de/faq',
			label: 'Faq'
		}]
	},
	fr:{
		items: [{
			path: '/fr',
			label: 'Home'
		},
		{
			path: '/fr/faq',
			label: 'Faq'
		}]
	},
};
