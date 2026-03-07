// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'HAMA Solution',
  tagline: '스마트 팩토리 IT 솔루션 전문 기업',
  favicon: 'img/favicon.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Production URL (custom domain)
  url: 'https://hamasol.com',
  baseUrl: '/',

  // GitHub Pages deployment config
  organizationName: 'hama-solution',
  projectName: 'homepage-doc',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',

  // HTML head meta tags
  headTags: [
    // SEO
    {tagName: 'meta', attributes: {name: 'author', content: 'HAMA SOLUTION'}},
    {tagName: 'link', attributes: {rel: 'canonical', href: 'https://hamasol.com'}},
    // Naver Webmaster
    {tagName: 'meta', attributes: {name: 'naver-site-verification', content: 'd15c96326de5c1a5772488ece9e56be41169f8a0'}},
    {tagName: 'meta', attributes: {name: 'naver-site-verification', content: '2ce6cddceea67c7b7148a86962c58f23aade9187'}},
    // Open Graph
    {tagName: 'meta', attributes: {property: 'og:site_name', content: 'HAMA SOLUTION'}},
    {tagName: 'meta', attributes: {property: 'og:type', content: 'website'}},
    {tagName: 'meta', attributes: {property: 'og:title', content: '주식회사 에이치앤엠에이'}},
    {tagName: 'meta', attributes: {property: 'og:description', content: '환영합니다. 주식회사 에이치앤엠에이입니다.'}},
    {tagName: 'meta', attributes: {property: 'og:url', content: 'https://hamasol.com'}},
  ],

  i18n: {
    defaultLocale: 'ko',
    locales: ['ko'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
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
      image: 'img/favicon.png',
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
    }),
};

export default config;
