module.exports = {
  title: "Dr. Németh Tamás",
  description: "Oktatási weboldal",
  base: "/~tnemeth/",
  dest: "./~tnemeth/",
  themeConfig: {
    logo: '/profile.png',
    displayAllHeaders: true,
    nav: [
      { text: "Home", link: "/" },
      { text: "Oktatott tárgyak", 
        items: [
          { text: 'Algoritmizálás', link:'/subjects/algo.html' },
          { text: 'Elemi Informatika 1', link:'/subjects/eli1.html' },
          { text: 'Elemi Informatika 2', link:'/subjects/eli2.html' },
          { text: 'Informatikai alkalmazások', link:'/subjects/infalk.html' },
          { text: 'Modern Webtechnológiák', link:'/subjects/mwt.html' },
          { text: 'Oktatást Támogató Informatikai Rendszerek', link:'/subjects/otir.html' },
          { text: 'Problémamegoldó szeminárium', link:'/subjects/pmsz.html' },
          { text: 'Szakmódszertan 1', link:'/subjects/szmt1.html' },
          { text: 'Számítástechnikai alapismeretek', link:'/subjects/sztai.html' }
        ]
      },
      { text: "Példaprogramok", 
        items: [
          { text: 'Algoritmizálás', link:'/examples/algoexamples/' },
          { text: 'JavaScript', link:'/examples/webexamples/' }
        ]
      }
    ],
    lastUpdated: 'Utoljára frissítve',
    serviceWorker: {
      updatePopup: { 
        message: "Új tartalom elérhető!", 
        buttonText: "Frissítés" 
      }
    }
  },
  markdown: {
    anchor: { permalink: false },
    config(md) {
      md.use(require("markdown-it-katex"));
    }
  }
};

