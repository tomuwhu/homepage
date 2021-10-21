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
          { text: 'őszi félév', items: [
            { text: 'Algoritmizálás N+L', link:'/subjects/algo.html' },
            { text: 'Elemi Informatika 1 N', link:'/subjects/eli1.html' },
            { text: 'Oktatást Támogató Informatikai Rendszerek N', link:'/subjects/otir.html' },
            { text: 'Problémamegoldó szeminárium N+L', link:'/subjects/pmsz.html' },
          ]},
          { text: 'tavaszi félév', items: [
            { text: 'Elemi Informatika 2', link:'/subjects/eli2.html' },
            { text: 'Informatikai alkalmazások', link:'/subjects/infalk.html' },
            { text: 'Szakmódszertan 1', link:'/subjects/szmt1.html' },
            { text: 'Számítástechnikai alapismeretek', link:'/subjects/sztai.html' }
          ]},
          { text: 'inaktív kurzusok', items: [
            { text: 'Informatikai alapismeretek', link:'/subjects/mwt.html' },
            { text: 'Intelligens felhasználói interfészek', link:'/subjects/ifi.html' },
          ]}
        ]
      },
      { text: "Segédanyagok", 
        items: [
          { text: 'Algoritmizálás', link:'/examples/algoexamples/' },
          { text: 'JavaScript', link:'/examples/webexamples/' },
          { text: 'JavaScript oktatási anyag', link:'http://www.inf.u-szeged.hu/~tnemeth/js_alapok/' }
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
  markdown: {
    toc: { includeLevel: [2, 3] },
    lineNumbers: true,
    anchor: { permalink: false }
  },
  plugins: [
    '@dovyp/vuepress-plugin-clipboard-copy',
    ['minimal-analytics', {ga: 'UA-5141940-1'}]
  ]
};