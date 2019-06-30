---
prev: /subjects/infalk.html
next: /subjects/otir.html
---
# Modern webtechnológiák

[**# Pédaprogramok #**](/examples/webexamples/)

[[toc]]

## 1. Informatikai alapismeretek

### 1.1. Operációs rendszerek

- Operációs rendszer funkciói, típusai.
- Shell, kapcsolók, paraméterek, környezeti változók.
- Konzol alkalmazások, ssh, ftp, ...
- Shell parancsok
  - fájl és könyvtárstruktúra és kezelése (cd, ls, mkdir, rm, chmod, chown, ...)
  - processek és kezelésük (&, ps, top, kill, )
  - ssh, ftp
- Shell Scripting

### 1.2. Informatikai alkalmazások

- Program futtatása, grafikus ablak felépítése, felhasználói intefész elemei, kezelésük
- Programozási környezet kialakítása, lint, beautify. Editor és pluginjai, CodeSandbox (codesandbox.io).
- Számítógépes játékok
  - Arcade játékok: Pacman, Super Mario, ...
  - Stratégiai játékok: StarCraft, ...
  - FPS: UT, CS:GO, ...
- Csoportunka szoftverek
  - Felhő-alkalmazások, felhő-szolgáltatások
  - Verziókezelők ( GitHub, GitLab, ... )
  - Collaboration Hubs ( SLACK, ... )
  
### 1.3. Hálózati alapismeretek

- hálózati struktúrák
- az internet felépítése működése
  - tcp/ip
  - dns
  - proxy

### 1.4. Vizuális programozás ( Scratch, Lego Mindstorm, Unreal Engine, ... )

- Az első programunk.
- Objektum fogalma, jellemzők, adatok, metódusok.
- Események kezelése, interfészek.
- Kommunikáció az objektumok között.
- Komplex példaprogram.

---> 6. fejezet

### 1.5. Felhasználói adatfájlok

- Szövegfájlok, Karakterkódolás ( ASCII, UTF-8)
- Formázott szöveg (Markdown, KaTeX, HTML, ...)
  
---> 2. fejezet

- Dokumentumkészítés ( Markdown, LaTex, ... )
- Prezentációkészítés ( reveal.js )
- Képformátumok ( pixeles és vektor-grafikus képek )
- Hang digitalizálása, hangformátumok

### 1.6. A számítógép működése

- Számítógép felépítése, Neumann elvek.
- Hardver elemek és funkcióik
  - CPU
  - ALU
  - regiszterek
  - Memória
  - Címbusz
  - Adatbusz
  - Vezérlőbusz
- Program elhelyezkedése a memóriában, program (gépi kód) futása, alapvető gépi utasítások, verem memória.
- Alapvető vezérlési szerkezetek (szekvencia, szelekció, iteráció, alprogram-hívás, rekurzió).
- Operációs rendszer szerepe a programok futtatásában.
- Programok felépítése, felhasználói interfészek típusai.
- A böngésző kezelése, fejlesztői eszközök, bővítmények

## 2. Web alapismeretek

### 2.1. HTML

- HTML objektumok (div, br, hr, ...)
- jellemzők (id, class, ...)
- szelektorok
- fejléc
- felsorolás
- táblázatok
- hivatkozások
- képek beillesztése
- SVG
- Szintaxis diagramok
- HTML űrlapok
- HTML események (egér, billentyűzet, ...)
- DOM

---> 3. fejezet

### 2.2. CSS

- szintaxis
- színek
- doboz modell
- szegélyek
- szövegformázás
- igazítás
- színek
- ikonok
- grid
- animáció
- külső ikon- és fontkészletek
  - Feather
  - Font Awesome
  - Google
  - Ionicons
- scss, less

### 2.3 Statikus tartalmak hostingja

- GitHub Hosting
- Google analitics

## 3. JavaScript ( ECMAScript )

### 3.1. Javascript futtatása

- node konsole
- .js file futtatása (node index.js): console.log
- a böngészőben: document objektum (write, getElementById, querySelector, title, oncontextmenu, ...)

### 3.2. JavaScript - ES9 szintaxis

#### 3.2.1. Szintaxis (node konzol alkalmazása)

- Változók, utasítások, kifejezések, kommentek, változók. Operátorok és precedencia.

#### 3.2.2. Típusok (sok gyakorlással és pédával node és böngészős futtatás is)

- JavaScript primitívek.
- Függvények, paraméterek, függvény paraméter, objektum paraméter.
- Objektumok, jellemzők, metódusok.
- Stringek, számok és tömbök mint objektumok: mezők, jellemzők, metódusok.
- Osztályok (class, new, constructor, this, ...).
- Consol objektum, ui.

#### 3.2.3. Rekurzió

- a rekurzió működési mechanizmusa, a verem
- példák rekurzióra: faktoriális, fibonacci sorozat, hanoi tornyai
- rekurzióval megoldható további feladatok (6.3)

--- 3.6 alfejezet

#### 3.2.4. Standard built-in objekutumok

- Array
  - fill, map, join, forEach, find, filter, sort, reverse,
  - pop, push, shift, unshift, reduce, slice, splice, includes
- String
  - template, literals
  - slice, split, toLocaleLowerCase, toLocaleUpperCase,
  - search, localeCompare, repeat, includes, replace
- Set
- Map
- Date
- JSON
- Math
- RegExp
- Buffer

---> 4. fejezet

#### 3.2.5. Vezérlési szerkezetek

- { ... }
- if ... else
- for
- for ... in
- for ... of
- do ... while
- while
- switch
- brake
- continue
- try ... catch, throw

#### 3.2.6. Callback függvények

- Callback függvény. Promise objektum. Async Functions.
- Párhuzamos programozás, Worker

#### 3.2.7 TypeScript

- Alapvető típusok
- Változódeklaráció
- Interfészek
- Osztályok (Classes)
- Mixins
- Függvények
- Generikusok
- Enum típus
- Modulok
- Névterek
- JSX

### 3.3. Böngésző funkciók

- HTML APIs (Geolocation, Drag&Drop, Local Storage, Web Workers, SSE )
- Böngésző local tárolók (Session Storage, IndexedDB, Web SQL, Cookies).

---> 5. fejezet

#### 3.5. Vue.js

- Hello World!
- Feltételek és iterátorok, események, komponensek
- Adatok, Metódusok
- Életciklus, életciklus-diagram
- Template szintaxis
- Dinamukus argumentek
- Számított jellemzők, setter és getter
- v-if szintaxis
- v-for szintaxis, :key
- Vue.set, this.$set
- Eseménykezelés, módosítók
- Form-input hozzárendelés
- Komponensek, props
- Slot
- Single File Components
- Routing

### 3.6. Node.js

#### 3.6.1. Node.js alapok

- nodejs telepítése
- command line interface
- js fájl futtatása
- online felületek (runkit, repl.it, ...)

#### 3.6.2. Globals

- console ( log, time, table, ... )
- eseményvezérelt programozás, events, EventEmitter
- __dirname, __filename, TextDecoder, util, stream
- process ( argv, execPath, chdir, env, exit, getid, stdout, ... )
- process.stdin.on( 'data', callback ), .setRawMode( true )
- readline
- setImmediate, setInterval, setTimeout
- Worker Threads, cluster, Child Processes *
- File System
- Internationalization

#### 3.6.3. JS könyvtárak és Node.js modulok

- module.exports
- require
- import ( mjs mudules )
- npm
- nodemon

#### 3.6.4. Fejlesztés közbeni feladatok

- Debugolás
- Logolás
- Hibakezelés ( Jest, Nightwatch.js )
- Hibakeresés
- Tesztelés ( Mocha )
- Automatikus tesztelés
- Dokumentáció generálás ( JSDoc, VuePress, ... )

#### 3.6.5 Node Fejlesztői környezetek

- Webpack
- Grunt

#### 3.6.6. MVC Frameworks ( Koa, Express, Adonis, Basys, Nuxt )

- 'Hello world' app
- serving static files
- routing (get, post, put, del, all, ...)
- Middleware, params
- koa-body, kcors
- cookies, session variables
- hibakezelés
- adatbázis-integráció
- template engines (edge, swig, vue-server-renderer, ejs, ...)

### 3.6.7. Vue-CLI

- vue.config.js
- baseUrl
- publicPath
- outputDir
- crossorigin

#### 3.6.8. Tartalomkezelő rendszerek

- Ghost, KeystoneJS, ApostropheCMS, Strapi, Siberian CMS
- Install CMS
- Run CMS
- Configure and management
- Deploy

### 3.7. Webszerverek üzemeltetése

- Forever, PM2. Statikus webszerverek, Serve static files. http-server, VuePress.

## 4. Adatbáziskezelés

- NoSQL és SQL adatbázisok (NeDB, MongoDB, SQLite, MySQL, PostgreSQL...).

## 5. Alkalmazásfejlesztés

- Webes alkalmazások felépítése, működési elve, kliens és szerver oldal, RESTful API-k, axios.
- Vue UI-k ( Bootstrap-VUE, Semantic, Vuetify, ... ), VUEX, Vue Router.
- Vue Material Dashboard.
- Google API-k
  - autentikáció folyamata (vue-google-oauth2)
  - Google analitics (vue-analitics)
- Cloud platormok ( HEROKU, Firebase, ... ).
- Komplex skálázható webes rendszerek, webes kommunikációs interfészek ( ws, sse ).
- Platformfüggetlen alkalmazásfejlesztés (NW.js, ElectronJS, Cordova, ...).
- Mobil alkalmazások fejlesztése: accelerometer, GPS, kamera, ... ( NativeScript, ... ).
- JS könyvtárak és alkalmazásuk ( VIS.JS, ChartJS, CHARTIST.JS, vue-trend, ngraph,... ).
- Full stack webes alkalmazások, server side rendering, ( koa-vue-ssr, express-vue, ... ).
- Starter kitek.
- Full stack web frameworks ( Basys, NUXT, Quasar ).
- Webes IOT és beágyazott rendszerek programozása, RPI-GPIO.

[Példaprogramok](/examples/webexamples/)
