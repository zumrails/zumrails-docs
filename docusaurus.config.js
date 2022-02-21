const visit = require("unist-util-visit")
const ssrTemplate = require("./src/internals/ssr.template")
const consts = require("./src/config/consts")
const customFields = require("./src/config/customFields")
const math = require("remark-math")
const katex = require("rehype-katex")

function variable() {
  const RE_VAR = /{@([\w-_]+)@}/g
  const getVariable = (full, partial) =>
    partial ? customFields[partial] : full

  function textVisitor(node) {
    node.value = node.value.replace(RE_VAR, getVariable)
  }

  function linkVisitor(node) {
    node.url = node.url.replace(RE_VAR, getVariable)

    if (node.title) {
      node.title = node.title.replace(RE_VAR, getVariable)
    }
  }

  function transformer(ast) {
    visit(ast, "text", textVisitor)
    visit(ast, "code", textVisitor)
    visit(ast, "link", linkVisitor)
  }

  return transformer
}

const config = {
  title: "Zūm Rails Docs",
  tagline: "Powering smarter and faster money movement",
  url: `https://${consts.domain}`,
  baseUrl: "/",
  baseUrlIssueBanner: false,
  favicon: "/img/favicon.png",
  organizationName: "ZūmRails",
  projectName: "ZūmRailsDocs",
  customFields: customFields,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  plugins: [
    require.resolve("./plugins/fetch-latest-release/index"),
    require.resolve("./plugins/fetch-repo/index"),
    require.resolve("./plugins/fetch-contributors-count/index"),
    require.resolve("./plugins/webpack-ts/index"),
    require.resolve("./plugins/optimize/index"),
    require.resolve("./plugins/manifest/index"),
    require.resolve("./plugins/delay-code-block-appearance"),
    [
      require.resolve("./plugins/tutorial/compiled/index"),
      {
        remarkPlugins: [variable, math],
        rehypePlugins: [katex],
      },
    ],
    [
      "@docusaurus/plugin-pwa",
      {
        pwaHead: [
          {
            tagName: "link",
            rel: "manifest",
            href: "/manifest.webmanifest",
          },
          {
            tagName: "meta",
            name: "theme-color",
            content: "#d14671",
          },
          {
            tagName: "meta",
            name: "apple-mobile-web-app-capable",
            content: "yes",
          },
          {
            tagName: "meta",
            name: "apple-mobile-web-app-status-bar-style",
            content: "#21222c",
          },
        ],
      },
    ],
  ],
  themeConfig: {
    announcementBar: {
      id: "github-star",
    },
    colorMode: {
      defaultMode: "light",
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    image: "/img/og.gif",
    gtag: {
      trackingID: "",
      anonymizeIP: true,
    },
    prism: {
      defaultLanguage: "javascript",
      additionalLanguages: ["rust", "csharp", "julia", "cpp", "java"],
      theme: require("./src/internals/prism-github"),
      darkTheme: require("./src/internals/prism-dracula"),
    },
    algolia: {
      apiKey: "30ebdc1936d670289449270ace2c677e",
      indexName: "documentation_index",
    },
    navbar: {
      title: "Zūm Rails",
      logo: {
        alt: "Zūm Rails",
        src: "/img/navbar/questdb.svg",
      },
      items: [
        {
          label: "Documentation",
          to: "/docs/introduction/",
          position: "left",
        },
        {
          href: 'https://zumrails.statuspage.io/',
          label: 'Status',
          position: 'right',
        },
        {
          href: 'https://changelog.zumrails.com',
          label: 'Changelog',
          position: 'right',
        },
        {
          href: 'https://help.zumrails.com/',
          label: 'FAQ',
          position: 'right',
        },
        {
          href: 'https://www.youtube.com/channel/UCNefEZKqPOlM_Lf3fPn6zJw/videos',
          label: 'Video Tutorials',
          position: 'right',
        },
      ],
    },
    footer: {

    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          remarkPlugins: [variable, math],
          rehypePlugins: [katex],
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: {
          remarkPlugins: [variable, math],
          rehypePlugins: [katex],
          feedOptions: {
            type: "all",
            copyright: customFields.copyright,
          },
          showReadingTime: true,
        },
        sitemap: {
          // Removed: https://github.com/ekalinin/sitemap.js/blob/master/CHANGELOG.md#50-breaking-changes
          // cacheTime: 600 * 1000, // 600 sec - cache purge period
          changefreq: "daily",
          priority: 0.7,
          trailingSlash: true,
        },
        theme: {
          customCss: [
            require.resolve("./src/css/katex.min.css"),
            require.resolve("./src/css/_global.css"),
          ],
        },
      },
    ],
  ],
}

module.exports = {
  ...config,
  ssrTemplate: ssrTemplate(config),
}
