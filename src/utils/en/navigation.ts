const navBarLinks = [
	{ name: "Accueil", url: "/en" },
	{ name: "Produits", url: "/en/products" },
	{ name: "Services", url: "/en/services" },
	{ name: "Blog", url: "/en/blog" },
	{ name: "Contact", url: "/en/contact" },
];

const footerLinks = [
	{
		section: "Écosystème",
		links: [
			{ name: "Documentation", url: "/en/welcome-to-docs/" },
			{ name: "Outils et Équipements", url: "/en/products" },
			{ name: "Services de Construction", url: "/en/services" },
		],
	},
	{
		section: "Société",
		links: [
			{ name: "À propos de nous", url: "#" },
			{ name: "Blog", url: "/en/blog" },
			{ name: "Carrières", url: "#" },
			{ name: "Clients", url: "#" },
		],
	},
];

const socialLinks = {
	facebook: "#",
	x: "#",
	github: "https://github.com/mearashadowfax/ScrewFast",
	google: "#",
	slack: "#",
};

export default {
	navBarLinks,
	footerLinks,
	socialLinks,
};
