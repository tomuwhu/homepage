module.exports = {
  title: "Dr. Németh Tamás",
  description: "Oktatási weboldal",
  head: [["link", { rel: "icon", href: `/logo.png` }]],
  base: "./",
  dest: "./dist",

  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Oktatott tárgyak", link: "/subjects/" },
      {
        text: "Szakdolgozat témák",
        link: "http://diploma.bibl.u-szeged.hu/cgi/search/archive/advanced/export_diploma_HTML.html?screen=Search&dataset=archive&_action_export=1&output=HTML&exp=0%7C1%7C-date%2Fcreators_name%2Ftitle%7Carchive%7C-%7Cinstitution%3Ainstitution%3AANY%3AEQ%3Aszte%7Csupervisor_name%3Asupervisor_name%3AALL%3AEQ%3AN%C3%A9meth+Tam%C3%A1s%7C-%7Ceprint_status%3Aeprint_status%3AANY%3AEQ%3Aarchive%7Cmetadata_visibility%3Ametadata_visibility%3AANY%3AEQ%3Ashow&n=&cache=1375899"
      },
      { text: "GitHub", link: "https://github.com/tomuwhu/homepage" }
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

