module.exports = {
	title: 'Reinforz',
	tagline: 'Force yourself to master a topic through continuous feedback',
	url: 'https://devorein.github.io',
	baseUrl: '/reinforz/',
	onBrokenLinks: 'throw',
	favicon: 'img/favicon.ico',
	organizationName: 'devorein',
	projectName: 'Reinforz',
	themeConfig: {
		navbar: {
			title: 'Reinforz',
			logo: {
				alt: 'Reinforz Logo',
				src: 'img/192.png'
			},
			items: [
				{
					to: 'docs/',
					activeBasePath: 'docs',
					label: 'Docs',
					position: 'left'
				},
				{
					href: 'https://github.com/Devorein/reinforz',
					label: 'GitHub',
					position: 'right'
				}
			]
		},
		footer: {
			style: 'dark',
			links: [
				{
					title: 'Docs',
					items: [
						{
							label: 'Getting Started',
							to: 'docs/Getting Started'
						},
						{
							label: 'Conventions',
							to: 'docs/Conventions'
						}
					]
				},
				{
					title: 'More',
					items: [
						{
							label: 'GitHub',
							href: 'https://github.com/Devorein/reinforz'
						}
					]
				}
			],
			copyright: `Copyright © ${new Date().getFullYear()} Reinforz. Built with Docusaurus.`
		}
	},
	presets: [
		[
			'@docusaurus/preset-classic',
			{
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
					// Please change this to your repo.
					editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/'
				},
				blog: {
					showReadingTime: true,
					// Please change this to your repo.
					editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/blog/'
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css')
				}
			}
		]
	]
};
