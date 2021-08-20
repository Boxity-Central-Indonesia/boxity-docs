/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    title: 'Boxity Docs',
    tagline: 'The documentation books for boxity applications. Dev by Bintang Tobing/Boxity Central Indonesia.',
    url: 'https://docs.boxity.id',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon-boxity.ico',
    organizationName: 'Boxity',
    projectName: 'boxity-docs',
    plugins: ['@ionic-internal/docusaurus-plugin-tag-manager'],
    themeConfig: {
        prism: {
            additionalLanguages: ['java', 'csharp', 'ruby', 'rust', 'swift', 'dart'],
        },
        algolia: {
            apiKey: 'd207a6e4abfead06cecba47adc7d1515',
            indexName: 'flagsmith',
        },
        tagManager: {
            trackingID: 'GTM-5ZV5K5G',
        },
        navbar: {
            title: 'Boxity',
            logo: {
                alt: 'Boxity Logo',
                src: 'img/logosvg.png',
            },
            items: [{
                    type: 'doc',
                    docId: 'intro',
                    position: 'left',
                    label: 'Docs',
                },
                {
                    type: 'localeDropdown',
                    position: 'left',
                },
                {
                    href: 'https://github.com/bintangjtobing/boxity-docs',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [{
                    title: 'Boxity',
                    items: [{
                            label: 'boxity.id',
                            to: 'https://boxity.id/',
                        },
                        {
                            label: 'Instagram',
                            href: 'https://instagram.com/boxityapp',
                        },
                    ],
                },
                {
                    title: 'Open Source',
                    items: [{
                        label: 'Github',
                        href: 'https://github.com/boxity-docs',
                    }, ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Boxity Central Indonesia. Built with Docusaurus.`,
        },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    routeBasePath: '/',
                    // Please change this to your repo.
                    editUrl: 'https://github.com/bintangjtobing/boxity-docs',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'id'],
        localeConfigs: {
            en: {
                label: 'English',
            },
            id: {
                label: 'Indonesian',
            },
        },
    },
};