module.exports = {
	locales: ['fa'],
	defaultLocale: 'fa',
	pages: {
		'*': ['layouts'],
		'/': ['home'],
	},
	loadLocaleFrom: (lang, ns) => import(`./src/locales/${lang}/${ns}.json`).then((m) => m.default),
};
