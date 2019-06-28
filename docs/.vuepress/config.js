module.exports = {
  title: "Dr. Németh Tamás",
  description: "Oktatási weboldal",
  head: [["link", { rel: "icon", href: `/logo.png` }]],
  base: "/~tnemeth/",
  dest: "./~tnemeth/",

  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Oktatott tárgyak", link: "subjects/" }
    ],
    sidebar: {
      '/guide/': genSidebarConfig('Guide')
    },
    lastUpdated: 'Last Updated'
  },

  markdown: {
    // options for markdown-it-anchor
    anchor: { permalink: false },
    config: md => {
      md.use(require("markdown-it-katex"));
    }
  }
};

function genSidebarConfig (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
        'getting-started',
        'customize',
        'advanced',
      ]
    }
  ]
}

