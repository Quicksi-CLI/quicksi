/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* List of projects/orgs using your project for the users page */
const users = require('./data/users');

const siteConfig = {
  title: 'Quicksi',
  tagline: 'Start new project easily',
  url: 'https://AnayoOleru.io',
  baseUrl: '/',
  organizationName: 'AnayoOleru',
  projectName: 'quicksi',
  cname: 'quicksi.io',
  noIndex: false,
  users,
  editUrl: 'https://github.com/facebook/docusaurus/edit/master/docs/',
  headerLinks: [
    {doc: 'installation', label: 'Docs'},
    // {page: 'users', label: 'Users'},
    {blog: true, label: 'Blog'},
    {
      href: 'https://github.com/AnayoOleru/quicksi',
      label: 'GitHub',
    },
  ],
  headerIcon: 'img/quicksi.png',
  // footerIcon: 'img/docusaurus_monochrome.svg',
  favicon: 'img/quicksi.png',
  // algolia: {
  //   apiKey: '3eb9507824b8be89e7a199ecaa1a9d2c',
  //   indexName: 'docusaurus',
  //   algoliaOptions: {
  //     facetFilters: ['language:LANGUAGE', 'version:VERSION'],
  //   },
  // },
  colors: {
    primaryColor: '#D0582C',
    secondaryColor: '#205C3B',
  },
  // translationRecruitingLink: 'https://crowdin.com/project/docusaurus',
  copyright: `Copyright © ${new Date().getFullYear()} Quicksi`,
  usePrism: ['jsx'],
  highlight: {
    theme: 'atom-one-dark',
  },
  scripts: [
    'https://buttons.github.io/buttons.js',
    'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js',
    '/js/code-blocks-buttons.js',
  ],
  // gaTrackingId: 'UA-44373548-31',
  // facebookAppId: '199138890728411',
  facebookComments: true,
  twitter: 'true',
  twitterUsername: 'AnayoOleru',
  ogImage: 'img/quicksi.png',
  twitterImage: 'img/quicksi.png',
  onPageNav: 'separate',
  cleanUrl: true,
  scrollToTop: true,
  scrollToTopOptions: {
    zIndex: 100,
  },
  enableUpdateTime: false,
  enableUpdateBy: false,
  docsSideNavCollapsible: true,
};

module.exports = siteConfig;
