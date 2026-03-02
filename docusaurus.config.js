// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
   headTags: [
     {
       tagName: 'link',
       attributes: {
         rel: 'canonical',
         href: 'https://hamasol.com',
       },
     },
   ],
  title: 'HAMA Solution',
  tagline: '스마트 팩토리 IT 솔루션 전문 기업',
  favicon: 'img/favicon.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://hamasol.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'hama-solution/homepage-doc', // Usually your GitHub org/user name.
  projectName: 'homepage-doc', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'HAMA',
        logo: {
          alt: 'HAMA Solution Logo',
          src: 'img/logo-icon.png',
          style: {height: '44px'},
        },
        items: [
          {to: '/company', label: 'Company', position: 'left'},
          {to: '/portfolio', label: 'Solution', position: 'left'},
          {to: '/timeline', label: 'Timeline', position: 'left'},
          {to: '/client', label: 'Client', position: 'left'},
          {to: '/contact', label: 'Contact', position: 'left'},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Company',
            items: [
              {label: 'Company', to: '/company'},
              {label: 'Timeline', to: '/timeline'},
            ],
          },
          {
            title: 'Services',
            items: [
              {label: 'Solution', to: '/portfolio'},
              {label: 'Client', to: '/client'},
            ],
          },
          {
            title: 'Support',
            items: [
              {label: 'Contact', to: '/contact'},
            ],
          },
        ],
        copyright: `Copyright \u00A9 ${new Date().getFullYear()} HAMA. All rights reserved.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
     metadata: [
       {name: 'author', content: 'HAMA SOLUTION'},
       {name: 'naver-site-verification', content: 'd15c96326de5c1a5772488ece9e56be41169f8a0'},
       {name: 'naver-site-verification', content: '2ce6cddceea67c7b7148a86962c58f23aade9187'},
       {property: 'og:site_name', content: 'HAMA SOLUTION'},
       {property: 'og:type', content: 'website'},
       {property: 'og:title', content: '주식회사 에이치앤엠에이'},
       {property: 'og:description', content: '환영합니다. 주식회사 에이치앤엠에이입니다.'},
       {property: 'og:url', content: 'https://hamasol.com'},
     ],
    }),
};

export default config;
