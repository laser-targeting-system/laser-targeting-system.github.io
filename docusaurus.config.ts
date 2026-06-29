import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Laser Targeting System',
  tagline: 'Camera-guided aiming and tracking prototype',
  favicon: 'img/logo/logo-dark_no-text_no-bg.ico',

  future: {
    v4: true,
  },

  url: 'https://laser-targeting-system.github.io',
  baseUrl: '/',

  organizationName: 'laser-targeting-system',
  projectName: 'laser-targeting-system.github.io',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
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
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Laser Targeting System',
      logo: {
        alt: 'LTS Logo',
        src: 'img/logo/logo-light_no-text_no-bg.png',
        srcDark: 'img/logo/logo-dark_no-text_no-bg.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/laser-targeting-system',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      logo: {
        alt: 'Laser Targeting System Logo',
        src: 'img/logo/logo-dark_text_bg-no-bg.png',
        href: 'https://github.com/laser-targeting-system',
        width: 200,
      },
      links: [
        {
          title: 'Project',
          items: [
            {
              label: 'Home',
              to: '/',
            },
            {
              label: 'Documentation',
              to: '/docs/intro',
            },
            {
              label: 'Blog',
              to: '/blog',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'GitHub Organization',
              href: 'https://github.com/laser-targeting-system',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Laser Targeting System. Educational capstone project / public showcase page.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
