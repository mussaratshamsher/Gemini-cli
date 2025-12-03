import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import path from 'path';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Building Intelligent AI Agents With Gemini & Docusaurus',
  tagline: 'A hands-on guide to designing, building, and publishing simple AI agents using modern tools like Gemini and Docusaurus.',
  favicon: 'img/logo-bg.png',

  future: {
    v4: true,
  },

  url: 'https://mussaratshamsher.github.io',
  baseUrl: '/',

  organizationName: 'mussaratshamsher',
  projectName: 'Gemini-AI-Book',

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
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',

    colorMode: {
      respectPrefersColorScheme: true,
    },

    navbar: {
      title: 'Building Intelligent AI Agents',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo-bg.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Read the Book',
        },
        {
          href: 'https://github.com/mussaratshamsher',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://www.linkedin.com/in/mussarat-shamsher-7618a6380/',
          label: 'LinkedIn',
          position: 'right',
        },
        {
          href: 'https://x.com/MussaratShams',
          label: 'Twitter',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Learn',
          items: [{label: 'Introduction', to: '/docs/intro'}],
        },
        {
          title: 'Community',
          items: [
            {label: 'LinkedIn', href: 'https://www.linkedin.com/in/mussarat-shamsher-7618a6380/'},
            {label: 'Twitter', href: 'https://x.com/MussaratShams'},
            {label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61556406399229'},
          ],
        },
        {
          title: 'More',
          items: [{label: 'GitHub', href: 'https://github.com/mussaratshamsher'}],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Mussarat Shamsher. Built with Docusaurus.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
