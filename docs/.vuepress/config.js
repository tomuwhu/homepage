module.exports = {
  title: "Dr. Németh Tamás",
  description: "Dr. Németh Tamás oktatási weboldal - webes technológiák, algoritmusok, algoritmizálás",
  base: "/~tnemeth/",
  dest: "./~tnemeth/",
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    logo: '/profile.png',
    displayAllHeaders: true,
    nav: [
      { text: "Oktatott tárgyak", 
        items: [
          { text: 'Oktatás', link:'/subjects/index.html' },
          { text: 'Algoritmizálás', link:'/subjects/algo.html' },
          { text: 'Elemi Informatika 1', link:'/subjects/eli1.html' },
          { text: 'Elemi Informatika 2', link:'/subjects/eli2.html' },
          { text: 'Informatikai alapismeretek', link:'/subjects/mwt.html' },
          { text: 'Informatikai alkalmazások', link:'/subjects/infalk.html' },
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
      },
      { text: "CV",
        link: "/cv/" 
      },
      { text: "Kutatás",
       link: "/pl/" 
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
  plugins: [ 'latex' ],
  markdown: {
    toc: { includeLevel: [2, 3] },
    lineNumbers: true,
    anchor: { permalink: false }
  }
};

