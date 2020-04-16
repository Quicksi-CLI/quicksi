/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
// @ts-ignore
const siteConfig = {
  title: 'Quicksi!',
  tagline: 'Say the magic word!',
  url: 'https://create-react-app.dev',
  baseUrl: '/',
  projectName: 'quicksi',
  organizationName: 'quicksi',
  favicon: 'img/favicon/favicon.ico',
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: '../docs',
          sidebarPath: require.resolve('./sidebars.json'),
          editUrl:
            'https://github.com/facebook/create-react-app/edit/master/docusaurus/website',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themeConfig: {
    image: 'img/logo-og.png',
    algolia: {
      apiKey: '3be60f4f8ffc24c75da84857d6323791',
      indexName: 'create-react-app',
    },
    navbar: {
      title: 'Quicksi',
      logo: {
        alt: 'Quicksi Logo',
        src: 'img/logo.svg',
      },
      links: [
        { to: 'docs/getting-started', label: 'Docs', position: 'right' },
        {
          href: 'https://reactjs.org/community/support.html',
          label: 'Help',
          position: 'right',
        },
        {
          href: 'https://www.github.com/facebook/create-react-app',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Get Started',
              to: 'docs/getting-started',
            },
            // {
            //   label: 'Learn React',
            //   href: 'https://reactjs.org/',
            // },
          ],
        },
        {
          title: 'Community',
          items: [
            // {
            //   label: 'Stack Overflow',
            //   href:
            //     'https://stackoverflow.com/questions/tagged/create-react-app',
            // },
            {
              label: 'Spectrum',
              href: 'https://spectrum.chat/create-react-app',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/reactjs',
            },
            {
              label: 'Contributor Covenant',
              href:
                'https://www.contributor-covenant.org/version/1/4/code-of-conduct',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'GitHub',
              href: 'https://www.github.com/facebook/create-react-app',
            },
          ],
        },
        {
          title: 'Follow Creator',
          items: [
            {
              label: 'GitHub',
              href: 'https://www.github.com/facebook/create-react-app',
            },
            {
              label: 'Twitter',
              href: 'https://www.github.com/facebook/create-react-app',
            },
            {
              label: 'Instagram',
              href: 'https://www.github.com/facebook/create-react-app',
            },
            {
              label: 'Facebook',
              href: 'https://www.github.com/facebook/create-react-app',
            },
          ],
        },
      ],
      // logo: {
      //   alt: 'Facebook Open Source Logo',
      //   src: 'img/oss_logo.png',
      // },
      copyright: `Copyright © ${new Date().getFullYear()} Quicksi, Inc.`,
    },
  },
};

module.exports = siteConfig;
