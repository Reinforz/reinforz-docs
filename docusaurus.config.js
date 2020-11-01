module.exports = {
	title: 'Reinforz',
	tagline: 'Force yourself to master a topic through continuous feedback',
	url: 'https://reinforz.github.io',
	baseUrl: '/reinforz-docs/',
	onBrokenLinks: 'throw',
	favicon: 'img/favicon.ico',
	organizationName: 'Devorein',
	projectName: 'reinforz-docs',
	themeConfig: {
		navbar: {
			title: 'Reinforz',
			logo: {
				alt: 'Reinforz Logo',
				src: 'img/logo.svg'
			},
			items: [
				{
					to: 'docs/',
					activeBasePath: 'docs',
					label: 'Docs',
					position: 'left'
				},
				{
					href: 'https://github.com/Reinforz/reinforz',
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
							to: 'docs/'
						},
						{
							label: 'Features',
							to: 'docs/features'
						},
						{
							label: 'Conventions',
							to: 'docs/'
						}
					]
				},
				{
					title: 'More',
					items: [
						{
							label: 'GitHub',
							href: 'https://github.com/Reinforz/reinforz'
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
					editUrl: 'https://github.com/Reinforz/reinforz-docs/tree/master/'
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css')
				}
			}
		]
	]
};
