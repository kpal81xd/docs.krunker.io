module.exports = {
	head: [
        ["link", { rel: "icon", href: "/images/meta/sott_krunker.png" }]
    ],
	markdown: {
		extractHeaders: {
			level: [2, 3, 4]
		}
	},
	plugins: [],
	title: "SOTT's krunker documentation reskin.",
	locales: {
		"/":{
			lang: "en-US",
			description: "English documentation"
		}
	},
	themeConfig: {
		logo: "/images/meta/sott_krunker.png",
		home: "/",
		darkMode: true,
		locales: {
			"/": {
				selectLanguageName: "English",
			}
		}
	}
}