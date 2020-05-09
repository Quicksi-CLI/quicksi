
const users = require('./data/users');

const siteConfig = {
  title: 'Quicksi',
  tagline: 'Start new project easily',
  url: 'https://quicksi-bot.now.sh/',
  baseUrl: '/',
  organizationName: 'Quicksi',
  projectName: 'quicksi',
  cname: 'quicksi-bot.now.sh',
  noIndex: false,
  users,
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
  // footerIcon: 'img/quicksi_monochrome.svg',
  favicon: 'img/quicksi.png',
  colors: {
    primaryColor: '#D0582C',
    secondaryColor: '#205C3B',
  },
  // translationRecruitingLink: 'https://crowdin.com/project/quicksi',
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
