// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/vsDark');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'SM Docs',
  tagline: 'Scrap Mechanic Documentation',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://scrapmechanicdocs.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'niknal357', // Usually your GitHub org/user name.
  projectName: 'sm-docu', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/sm-docs-social-card.png',
      navbar: {
        title: 'SM Docs',
        logo: {
          alt: 'SM Docs Logo',
          src: 'img/logo.png',
        },
        items: [
          { to: '/docs', label: 'Lua API Documentation', position: 'left' },
          { to: '/contentcompilerdocs', label: 'Content Compiler Documentation', position: 'left' },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        // Additional languages can be added here.
        additionalLanguages: ['lua', 'json'],
      }
    }),
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      ({
        hashed: true,
        removeDefaultStopWordFilter: true,
        explicitSearchResultPath: true,
        docsRouteBasePath: ["/docs", "/contentcompilerdocs"],
        docsDir: ["docs", "contentcompilerdocs"],
      }),
    ],
    // [
    //   require.resolve('@docusaurus/theme-classic'),
    //   {
    //     customCss: require.resolve('./src/css/custom.css'),
    //   }
    // ],
  ],
  plugins: [
    // [
    //   require.resolve('@docusaurus/plugin-content-docs'),
    //   {
    //     id: 'docs',
    //     path: 'docs',
    //     routeBasePath: 'docs',
    //     sidebarPath: require.resolve('./sidebars.js'),
    //   }
    // ],
    [
      require.resolve('@docusaurus/plugin-content-docs'),
      {
        id: 'contentcompilerdocs',
        path: 'contentcompilerdocs',
        routeBasePath: 'contentcompilerdocs',
        sidebarPath: require.resolve('./sidebars.js'),
      }
    ],
  ],
};

module.exports = config;
