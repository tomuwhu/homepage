---
prev: /subjects/infalk.html
next: /subjects/otir.html
---
# Informatikai alapismeretek és modern webtechnológiák

[**# Pédaprogramok #**](/examples/webexamples/)

[[toc]]

## 1. Informatikai alapismeretek

### 1.1 Bevezetés az informatikába

- Alapfogalmak (jel, adat, információ)
- Informatikai eszközök működésük és jellemzőik
- Az informatika története
- Az informatika területei

### 1.2. Operációs rendszerek

- Operációs rendszer alapvető feladatai, tulajdonságai, típusai, felületei.
- Számítógép kezelése az operációs rendszer grafikus interfészével.
- Fájlrendszerek, prartíciók, alrendszerek.
- Processzusok, fonalak, erőforrások, ütemezés.
- Shell, kapcsolók, paraméterek, környezeti változók.
- Konzol alkalmazások, ssh, ftp, ...
- Shell parancsok
  - fájl és könyvtárstruktúra és kezelése (cd, ls, mkdir, rm, chmod, chown, ...)
  - processek és kezelésük (&, ps, top, kill, )
  - jogosultságkezelés, felhasználók kezelése
  - linkek, környezeti változók, szűrük
  - ssh, ftp
- Shell Scripting

### 1.3. Felhasználói adatfájlok

- Szövegfájlok, karakterkódolás (ASCII, ISO-8859-2, UTF-8).
- Formázott szöveg (Markdown, KaTeX, HTML, ...)
  
---> 2. fejezet

- Dokumentumkészítés ( Markdown, LaTex, ... )
- Prezentációkészítés ( reveal.js )
- Képformátumok ( pixeles és vektor-grafikus képek )
- Hang digitalizálása, hangformátumok
- Video formátumok + multi formátumok

### 1.4. Informatikai alkalmazások

- Program futtatása, grafikus ablak felépítése, felhasználói intefész elemei, kezelésük
- Internetes alkalmazások:
  - hírportálok
  - felhő alapú szolgáltatások
  - közösségi médiák, profilok, álprofilok
  - elektronikus banki és ügyfélkapcsolati szolgáltatások
  - digitális térképek és alkalmazásai
- Számítógépes játékok:
  - Keretrendszerek (Steam, EPIC, Battle.net, ...) 
  - Arcade játékok: Pacman, Super Mario, ...
  - Stratégiai játékok (StarCraft, Sims, Age of...)
  - FPS (UT, CS:GO, Fortnite, ...)
  - Racing (F1, NFS, ...)
  - Saját játékok és digitális tartalom fejlesztése (Unreal Engine, Unity, ...)
- Virtuális valóság és alkalmazásai.
- Csoportunka szoftverek
  - Felhő-alkalmazások, felhő-szolgáltatások
  - Verziókezelők ( GitHub, GitLab, ... )
  - Collaboration Hubs ( SLACK, ... )
- Kódszerkesztő programok (Visual Studio Code, Coda, ...)
  - programozási környezet kialakítása, lint, beautify
  - editor kezelése és pluginjai, 
  - CodeSandbox (codesandbox.io)
  
### 1.5. Hálózati alapismeretek

- hálózati struktúrák
- hálózati eszközök
- kliens-szerver architektúra
- peer-to-peer hálózatok
- az internet felépítése működése
  - protokollok (http, ftp, tcp/ip, pop3/imap/smtp)
  - címzések (ip-cím, dns)
  - szerver típusok (tűzfal, proxy, NAT, DHCP)
  - hálózati eszközök (router, switch, ...)

### 1.6. Digitális tartalmak létrehozása

- Szövegszerkesztés célszoftverrel
- Tábázatkezelés célszoftverrel
- Diagramtípusok, grafikonok készítése
- Animáció-készítés  célszoftverrel
- Prezentáció-készítés célszoftverrel
- Képszerkesztés, grafikai programok használata
- Zene-szerkesztés célszoftverrel
- Film-vágás célszoftverrel
- Interaktív tartalmak létrehozása célszoftverekkel

### 1.7. Vizuális programozás

( Scratch, Lego Mindstorm, Unity, Unreal Engine, ... )

- Az első programunk.
- Objektum fogalma, jellemzők, adatok, metódusok.
- Események kezelése, interfészek.
- Kommunikáció az objektumok között.
- Komplex példaprogram.

---> 6. fejezet

### 1.8. A számítógép működése

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

### 1.9 Információs társadalom

- informatikai biztonság
- adatvédelmi irányelvek
- szerzői joggal kapcsolatos alapfogalmak
- kommunikációs illemszabályok
- az információ és az informatika 
  - gazdaságra, 
  - környezetre, 
  - kultúrára, 
  - személyiségre, 
  - egészségre gyakorolt hatása.

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

- node konzol
- .js file futtatása (node index.js): console.log
- a böngészőben: document objektum 
  - write, 
  - getElementById, 
  - querySelector, 
  - querySelectorAll,
  - title, 
  - oncontextmenu

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

#### 3.2.6. JS és HTML kapcsolata

- JS Stringkezelés a gyakorlatban
- HTML generálás JS segítségével
- SVG generálás JS segítségével

#### 3.2.7. Callback függvények

- Callback függvény. Promise objektum. Async Functions.
- Párhuzamos programozás, Worker

### 3.3. Böngésző funkciók

- HTML DOM elérése JS-ből
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
- Internationalization
- eseményvezérelt programozás, events, EventEmitter
- __dirname, __filename, TextDecoder, util, stream
- process ( argv, execPath, chdir, env, exit, getid, stdout, ... )
- process.stdin.on( 'data', callback ), .setRawMode( true )
- readline
- setImmediate, setInterval, setTimeout
- Worker Threads, cluster, Child Processes *
- File System
- HTTP

#### 3.6.3. JS könyvtárak és Node.js modulok

- module.exports
- require
- import ( mjs mudules )
- npm
  - install
  - semantic versioning (major, minor, patch)
  - publish
- nodemon

#### 3.6.4. Fejlesztés közbeni feladatok

- Debugolás
- Logolás
- Hibakezelés ( Jest, Nightwatch.js )
- Hibakeresés
- Tesztelés ( Mocha )
- Automatikus tesztelés
- Dokumentáció generálás ( JSDoc, ... )

#### 3.6.5 Node Fejlesztői környezetek

- Webpack
- Grunt

#### 3.6.6. MVC Frameworks ( Koa, Express, Adonis, Basys, Nuxt, ... )

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

### 4.1 Áttekintés

- NoSQL és SQL adatbázisok (NeDB, MongoDB, SQLite, MySQL, PostgreSQL...).

### 4.2 NoSQL adatbázisok

- Kulcs-érték adatbázisok
- Gráf adatbázisok
- Dokumentumtárolók (NeDB, MongoDB, ...)
- Objektum-adatbázisok

### 4.3 Relációs adatbázisok

#### 4.3.1 Adatbázisok felépítése, tervezése

- alapelemek, egyed, tulajdonság, kapcsolat
- funkcionális függések és kulcsok a relációs modellben
- relációk normalizálása, normálformák

#### 4.3.2 Az SQL nyelv

- kiválasztó lekérdezések az SQL nyelvben
- csoportosító lekérdezések az SQL nyelvben
- több táblára vonatkozó lekérdezések
- beágyazott lekérdezések
- adatbázis módosítása SQL-lel, relációsémák definiálása
- SQL beépítése programozási környezetbe

#### 4.3.3 A MySQL használata

- szerver-adminisztráció
- mysql kliensek
- adattípusok, változók
- operátorok, függvények
- SQL utasítások használata
- tárolt objektumok (eljátások, nézetek, algoritmusok)
- connector-ok és API-k

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

## 6. Algoritmizálás

### 6.1 Alapfogalmak, algoritmusok elemei

- Számítási problémák és típusaik.
- Változó fogalma, adattípusok.
- Statikus és dinamikus memóriakezelés
- Elemi utasítások, a gépi kód működése. Szekvencia, ugrás, feltételes ugrás, szubrutin hívása.
- Algoritmusok elemei magas szintű programozási nyelvekben: 
  - szekvencia, 
  - szelekció, 
  - iteráció, 
  - rekurzió.
- A tömb fogalma és kezelése.
- Algoritmusok jellemzői, a futási idő és tárigény fogalma. Elemi kereső és rendező algoritmusok:
  - beszúró- és buborék rendezés, lineáris- és logaritmikus keresés
  - külső és helyben rendezések
  - függvények növekedési üteme, jelölések
  - rendezések futási idejének elemzése, rendezések típusai.
- A függvény fogalma, függvényhívás formái, bemeneti paraméterek, visszatérési érték és funkciói.

### 6.2 Alapvető adatszerkezetek, algortimusok tulajdonságai

- A verem és sor adatszerkezet és működése, a verem jelentősége a függvényhívások folyamán.
- Rekurzió működése az informatikában, rekurzióval megoldható feladatok.
- Kupacrendezés, gyorsrendezés, vödrös és radix rendezés, időigény elemzése.
- Rendező algoritmusok futási idejének elemzése.
- Struktúra és Osztály típus. Láncolt listák és megvalósításuk.
- Elemi és absztrakt adatszerkezetek, az interfész funkciója:
  - verem, sor
  - bináris kupac, prioritási sor, binomiáris kupac és alkalmazásai
  - bináris keresőfák, önszervező keresőfák (Splay, AVL, 2-3, B, Piros-fekete)
  - halmaz és függvény absztrakt adatszerkezet. (Map, Set)
  - hasítótáblák.
- Amortizációs költségelemzés.

### 6.3 Nevezetes informatikai problémák és algoritmusok

- Mintaillesztés: automatával, Knuth-Morris-Pratt algoritmus.
- Hátizsák feladat, tükörszó probléma.
- Eseménytér fogalma, dinamikus programozás, mohó stratégia.
- Optimális pénzváltás, hátizsák probléma, türedékes hátizsák probléma
- Csoportkép optimális időpontjainak meghatározása feladat.
- Hemming-távolság, Damerau–Levenshtein-távolság, Wagner–Fischer algoritmus.
- Számelméleti algoritmusok, nyilvános kulcsú tikosítás, RSA algoritmus.
- Gráf absztrakt adattípus, gráf tárolási módok, számított gráf fogalma és példák.
- Gráf-algoritmusok (gráf bejárás, Floyd-Warshall, PageRank algoritmus).
- Dijkstra- és A* algoritmus.
- Speciális gráfok, páros gráfok és párosítási problémák. Magyar módszer.
- Kruskal-algoritmus, halmazerdő adatszerkezet. Prím-algoritmus.
- Ajánlórendszerek. Számítási bonyolultság fogalma, Turing-gép, bonyolultsági osztályok.
- Gráfok tulajdonságai, gráf alapú adatbányászati módszerek. Adattudomány.
- A mesterséges intelligencia alapfogalmai.
- Visszalépéses keresés, alfa-béta vágás, gráfjátékok.
- Approximációs algoritmusok, utazóügynök probléma és időbonyolultsága, approximációs megoldások.
- Tanuló algoritmusok, genetikus algoritmusok.
- Neurális hálózatok, gépi tanulás. Tensorflow.
- Véletlenített algoritmusok.
- Online problémák és online algoritmusok:
  - átlagos eset elemzés, versenyképességi elemzés
  - online algoritmusok empírikus vizsgálata
  - online klaszterezezési és ütemezési feladatok
  - online nyugtázás, ládapakolás, k-szerver probléma
  - véletlenített online algoritmusok
  - online tanuló algoritmusok

## 7. TypeScript

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

## Továbblépési / Gyakorlási lehetőségek

- [Példaprogramok](/examples/webexamples/)
- Gyakorló feladatok, felületek
  - [NemesTihamér versenyfeladatok](http://tehetseg.inf.elte.hu/nemes-online/index.html)
  - [Mester](http://mester.inf.elte.hu/)
  - [SPOJ](https://www.spoj.com/)
  - [HackerRank](https://www.hackerrank.com/)]
  - [ACM](https://icpc.baylor.edu/worldfinals/problems)