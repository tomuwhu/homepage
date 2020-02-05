# JavaScript (ECMAScript)

<a href="#1">[1]</a>
<a href="#2">[2]</a>

[[toc]]

## A programozás alapjai

### JavaScript primitívek, típuskonverzió, utasítások, kifejezések, kommentek, operátorok és precedencia

Egy számítógépes programot utasítások sorozatának nevezünk, amiket a számítógép végrehajt. 

Egy programozási nyelvben ezek lehetnek:

•	`értékek`

•	`operátorok`

•	`kifejezések`

•	`kulcsszavak`

•	`kommentek`

A kifejezések azon részei a kódnak, melyek valamilyen műveletet végeznek el és a művelet eredményét adják vissza, vagy valamilyen értéket képviselnek. Ezek lehetnek:

•	`konstansok`
 
•	`aritmetikai operátorok`
  
•	`értékadó operátorok`

•	`logikai operátorok`

•	`típus konverzió`
  
•	`bitszintű műveletek`

•	`zárójel`

•	`összehasonlító operátorok`

JavaScriptben az egyes utasításokat külön sorba írjuk, a program végrehajtása felülről lefelé történik. A szintaxis pedig meghatározza meg, hogy miképp építhetőek fel az utasítások:

•	`csokkentő és növelő utasítások`

•	`kifejező utasítások`

•	`elől és hátultesztelős ciklusok`

•	`feltételes utasítások`

•	`összetett utasítások`

Egy utasítás végére kerül a `;` kifejezés utasítás, amely elvégzi a teljes kiértékelést és elválasztja egymástól a különállónak vélt utasításokat. Egyes esetekben elhagyható, viszont akkor mindenféleképpen új sorban kell kezdeni az új utasítást.

```js
utasítás1
utasítás2
utasítás3
```

Összetett utasítások esetén `{}`-be foglaljuk a különálló utasításokat és így csoportosíthatjuk őket.

```js
{
	utasítás1
	utasítás2
	utasítás3
}
``` 

A JavaScript szintaxisa kétféle típust definiál: rögzített érték (literálók) és változó érték (változó).

Az `egész literálók` az egész számokat decimális, hexadecimális, továbbá oktális formában fejezik ki.

A lebegőpontos literálok olyan nem egész számokat fejeznek ki, melyek állnak egész részből, egy másik decimális számból , ami a törtrészt jelöli (őket a tizedespont köti össze `.`), egy exponens (`e` vagy `E`) és végezetül egy harmadik decimális szám, ami a hatványkitevőt takarja:

```js
egészrész tizedespont törtrész exponens hatványkitevő
```

```js
3.14
−1.602176487E−19
```

A boolean literálok két értéke lehet: igaz (`true`) vagy hamis (`false`). Számokkal kifejezve `0` vagy `1`.

A sztring literálok szimpla (`'szoveg'`), vagy dupla (`"szoveg"`) idézőjelek közé írt, tetszőleges hosszúságú karaktersorozatot takar. Tetszőleges Unicode karaktert meg lehet jeleníteni, viszont ezeket előtte le kell védeni (`\`) visszafele jellel. Erre egy példa a sortörés karakter a sztring végére: `\n`

Amennyiben a kódban megjegyzéseket szeretnénk tenni (olyan része a kódnak, ami nem fut le), akkor az egy és többsoros megközelítést használhatunk.

```js
// egysoros megjegyzés

/*
többsoros
megjegyzés
*/
```
`Primitív adattípusok` és típuskonverzió JavaScript nyelvben:

•	A `Number` (szám) olyan primitív adattípus, melyek értékei lehetnek a mínusz végtelen és plusz végtelen közé eső egész és valós (lebegőpontos) számok. Ezen belül háromféle számrendszerben ábrázolhatjuk a számokat: decimális, oktális valamint hexadecimális.

•	A `String` (karakterlánc) olyan adattípus, melynek értékei lehetnek szimpla (`''`), vagy dupla (`""`) idézőjelek közé írt, tetszőleges hosszúságú karaktersorozat.

•	A `Boolean` (logikai) olyan adattípus, melynek értékei lehetnek igaz (`true`) vagy hamis (`false`). Számokkal kifejezve `0` vagy `1`.

•	Az `undefined` (nem definiált - primitív adattípus)

•	Az `Undefined` olyan primitív adattípus, melyhez az `undefined` (definiálatlan) érték tartozik.

Ezen felül még létezik az objektum-féle adattípus, amely viszont már nem tekinthető primitívnek. A következő fejezetben részletesebben fogunk vele foglalkozni.

A JavaScript egy típustalan nyelv, ami annyit takar, hogy a változó értékének megadásával automatikusan hozzárendelődik a változóhoz a neki megfelelő adattípus. A leggyakrabban a számok és a sztringek között fordul elő. 

```js
"ez" + "egy" + "sztring" == "ezegysztring" //igazzal tér vissza, mert összekapcsolja a két sztringet
5 + "5" == "55" //igazzal tér vissza, mert a számot sztringgé konvertálja át és összekapcsolja őket.
```

JavaScriptben, mint megannyi más programozási nyelvben is definiálva vannak operátorok, melyek segítségével egymásra lehet hattatni az egyes változókhoz rendelt értékeket, vagy változóhoz értéket adni.

•	`értékadó`

•	`összehasonlító`

•	`aritmetikai`

•	`bitenkénti`

•	`feltételes`

•	`logikai`

•	`vessző`

•	`unáris`

•	`kapcsolat`
 
Az `értékadó operátor` hozzárendel az operandusához egy adott típusú értéket. Ilyen operátor az egyensőségjel (=) és a koncenciója szerint a bal oldali változóhoz hozzárendeli a jobboldali értéket.

```javascript
var x=1
var y
x=y
```

Az `összehasonlító` operátor összehasonlít két operandushoz rendelt értéket és igaz logikai értékkel tér vissza ha igen, egyébként hamissal. Az összehasonlítandó értékek lehetnek számok, objektumok, logikai értékek vagy stringek. Az utóbbiakat a lexikografikus értékük szerint történik az ellenőrzés. Azon értékek szerinti összehasonlításon túl azt is megvizsgálhatjuk, hogy a típus szerint is megegyeznek. Ha igen igaz logikai értékkel tér vissza, egyébként hamissal. Mindegyik operátorhoz hozzá lehet rendelni konvenció szerint baloldalt a tagadó (!) jelet, ami a visszatérő logikai érték negátját képezi.

| Operátor        | Leírás           | Példa  |
| ------------- |-------------| -----|
| `==`      | érték szerinti egyenlőség vizsgálat | 3=="3" |
| `===` | tipusos egyenlőség vizsgálat     |    3==="3" |
| `>` | nagyobb, mint      |    3 > 2 |
| `<` | kisebb, mint      |    3 < 2 |
| `>=` | nagyobb, vagy egyenlő      |    3 >= 2 |
| `<=` | kisebb, vagy egyenlő      |    3 <= 2 |

Az `aritmetikai` operátor az operandusok számértékeire hatva visszatér egy másik számértékkel. Ide tartozik az összeadás (+), a kivonás (-), a szorzás (*), az osztás (/) és a modulo (%).

```javascript
var z
z=3+4 // összeadás
z=3-4 // kivonás
z=2*3 // szorzás
z=2/3 // osztás
z=3%2 // modulo
z=3**2 // hatványképzés (hatványalap**hatványkitevő)
var x,y
x=5 
y=++x // preinkrement
x=5
y=x++ // posztinkrement
x=5
y=--x // predekrement
x=5
y=x-- // predekrement
```

A `bitenkénti` operátorok bit szintjén végzik el a számításokat.

| Operátor        | Leírás           | Példa  |
| ------------- |-------------| -----|
|    `op1 <<	op2`   | bitenkénti eltolás balra | 1111111111111000	<<	2 |
|    `op1 >>	op2`   |    bitenkénti eltolás jobbra   |  0000000000001000	>>	2  |
|    `op1 &	op2`   | bitenkénti és | 1111111111111000	<<	2 |
|    `op1 |	op2`   |    bitenkénti vagy   |  0000000000001000	>>	2  |
|    `op1 	op2`   | bitenkénti kizáró vagy | 1111111111111000	<<	2 |
|    `op1 ~	op2`   |    bitenkénti negálás   |  0000000000001000	>>	2  |

A `feltételes` (ternáris) az egyetlen olyan JavaScript operátor, aminek három operandusa van. Két értékből (érték 1 és érték2) egyet ad vissza annak a függvényében, hogy teljesül-e a feltétel. Amennyiben a feltétel teljesül (igazzal tér vissza), az operátor az érték1-el tér vissza, egyébként meg érték2-vel. Szintaxisa a következő:

 ```javascript
 feltétel ? érték1 : érték2
 ```

 A lenti példában az `állapot` nevű változóhoz a `felnőtt` vagy `fiatal` érték rendelődik annak a függvényében, hogy a feltételben az évhez rendelt érték nagyobb, vagy egyenlő, mint a feltételben megadott 18 értékkel:
 
 ```javascript
var állapot = ( év >=18 ) ? 'felnőtt' : 'fiatal'
 ```
 
 A `vessző operátor (,)` egyszerűen kiértékeli az operandusait, majd visszatér az utolsó operandus értékével. Leginkább a for ciklusban (ehhez később még visszatérünk) használatos, megengedve azt, hogy több változó értéke frissüljön egyszerre ahányszor végigmegyünk egy-egy cikluson. Legyen `a` egy tömb (ehhez később még visszatérünk), melyek értékei szintén tömbök. Ebben az esetben úgy használjuk fel a vessző operátort,hogy egszerre két változó értékét frissítse. A lenti példával ezt bemutatva a kódot lefuttatva kiírhatjuk a korábban definiált 2D tömb diagonális (megegyező sor és oszlop indexű) elemeit:
 
 ```javascript
var x = [0,1,2,3,4,5,6,7,8,9]
var a = [x, x, x, x, x]

for (var i = 0, j = 9; i <= j; i++, j--)
  console.log('a[' + i + '][' + j + ']= ' + a[i][j])
 ```

Az `unáris operátorokat` azon operátoroknak nevezzük, melyek csupán egyetlen operandussal rendelkeznek.

| Operátor        | Leírás           | szintaxis  |
| ------------- |-------------| -----|
|    `delete`   | képes kitörölni objektumot, objektum tulajdonságot, vagy egy tömb egy adott értékét | delete operandus |
|    `typeof`   |    visszatér egy stringgel, ami azt jelzi, hogy az operandusához (egy változó) milyen típusú érték van hozzárendelve  |  `typeof` operandus   |
|    `void`   | egy kifejezést definiál amit ki kell értékelni, visszatérési érték nélkül | `void` kifejezés |
 
 A `kapcsolati operátorok` összehasonlítják az operandusaikat és valamilyen logikai típusú értékkel (igaz vagy hamis) térnek vissza annak a függvényében, hogy az összehasonlítás feltétele miképp teljesül.
 
 | Operátor        | Leírás           | szintaxis  |
| ------------- |-------------| -----|
|    `in`   | igazzal tér vissza, ha egy objektum tartalmaz egy megadott nevű tulajdonságot | tulajdonság neve `in` objektum neve |
|    `instanceof`   |   igazzal tér vissza, ha egy objektum neve (mint változó - az egyik operandus) olyan típussal rendelkezik, mint egy objektum típus (a másik operandus)    |  objektum neve `instanceof` objektum típusa   |
 
 Az `operátorok precendenciája` meghatározza a műveleti sorrendet, azaz, hogy melyik hajtódjon végre hamarabb, és melyik később. Zárójelek használatával ezt a sorrendet felülírhatjuk. Egy listában felsoroltunk néhány fontosabb operátort a legnagyobb precedenciától a legkisebbig:
 
|    Precedencia    |      Operátor típusa      |  Operátor |
| ------------- |-------------| -----|
|    `1`   | tag | `. []` |
|    `2`   | hívás/példányosítás | `() new` |
|    `3`   | negáció/növelés | `! ~ - + ++ -- typeof void delete` |
|    `4`   | szorzás/osztás | `* / %` |
|    `5`   | összeadás/kivonás | `+ -` |
|    `6`   | bitszintű eltolás | `<< >> >>>` |
|    `7`   | kapcsolat | `< <= > >= in instanceof` |
|    `8`   | egyenlőség | `== != === !==` |
|    `9`   | bitszintű és | `&` |
|    `10`   | bitszintű xor | `^` |
|    `11`   | bitszintű vagy | `|` |
|    `12`   | logikai és | `&&` |
|    `13`   | logikai vagy | `||` |
|    `14`   | feltétel | `?:` |
|    `15`   | értékadás | `= += -= *= /= %= <<= >>= >>>= &= ^= |=` |
|    `16`   | vessző | `,` |


### Változók, konstansok, függvények, JavaScript objektumok, osztályok, öröklődés

```javascript
var valtozonev [= ertek1] [, ertek2 [= ertek3] ... [, valtozonevN [= ertekN]]];
```

```javascript
var x, y, z;          // így deklaráljuk a változókat
x = 5; y = 6;      // így adunk értéket
z = x + y;         // így számolunk
```

A `valtozonev` takarja a változó nevét - ez lehet bármilyen érvényes azonosító. Érvényesség alatt azt kell érteni. hogy például változó neve, vagy maga a változót deklaráló `var` szó nem lehet adattípus megnevezés. Továbbá kerüljük a hosszú és ékezetekkel-teli elnevezéseket, törekedjünk az egyszerűségre.

Az `ertekN` a változó kezdeti értéke - bármilyen érvényes kifejezés lehet.

•	Amennyiben egy nem definiált változó által tárolt értékre akarunk hivatkozni, akkor azt a változó `undefined` (nem értelmezett). 

•	Amennyiben egy definiált változó értékét `üresre` akarjuk beállítani, akkor `null`-t használunk.

•	Amennyiben két eltérő típusú (például szám és szöveg) értékkel próbálunk elvégezni egy szorzást, akkor bizony NaN lesz az eredmény. Technikailag ugyan szám a típusa, viszont ezt egyszerűen fogalmazva kezelhetjük egyfajta nem definiált számnak.   

A programozás során gyakran használunk olyan kódrészleteket, melyeket többször kell lefutattni. Ahelyett, hogy többször újraírnánk ugyanazt a kódot egymás alá, a kódot blokkba rendezve/csoportosítva újrafelhasználhatóvá tehetjük, ezzel jelentősen lecsökkentve a kód helyigényét. Mindez `függvényekkel` valósítható meg. A JavaScriptben számos út létezik a függvények létrehozására. Az egyik ilyen út a `függvény deklaráció`. Ahogy a változókhoz hozzárendelünk értéket, a függvények deklarációjánál egy nevet/azonosítót társítunk. A függvény deklaráció önmagában nem kéri meg a benne lévő kódot, hogy fusson le rögtön a deklaráció után, a futtatáshoz/végrehajtáshoz magát a függvényt meg kell hívni.

```js
function azonosító () {
	// függvény test, beleértve a kapcsos zárójeleket
}

azonosító ()  // függvény hívása
```

Igény esetén a függvényben lefutó kód igényelhet bemeneti értékeket, melyeket paramétereken keresztül adhatunk meg, minden egyes futtatással a függvény argumentumában.

```js
function teruletszamol(szelesseg, magassag){
	console.log(szelesseg*magassag)  // függvény deklarálása
}

teruletszamol(10,6) // függvény hívása
```  

Az ES6 egyik újdonsága az alapértelmezett értékekkel ellátott paraméterek. Ez azt jelenti, ha a függvényargumentumban nem inicializáljuk mondjuk az egyik bemeneti paramétert valamilyen értékkel és ha deklarálva van a függvényen belül, akkor alapértelmezettként a függvényen belüli értékkel hajtódnak végre a függvényen belüli utasítások. 

```js
function udvozles (nev = 'idegen') {
  console.log(`Hello, ${nev}!`)
}

udvozles('Csaba') //  Hello, Csaba!
udvozles() //  Hello, stranger!
``` 

A függvények egyik sajátossága, hogy vissza tud térni valamilyen értékkel, ami tulajdonképpen a `{}`-ba foglalt utasítások által kiértékelt eredmény. Ahhoz, hogy ezt megtehessük, a `return` kulcsszót kell használnunk. A függvény nemcsak a benne foglalt utasítások sorozatának eredményével térhet vissza, hanem egy másik (ezen kívül deklarált) meghívott függvénnyel is, ezeket `helper függvényeknek nevezzük`.  

```js
function teruletszamol(szelesseg, magassag) {
  if (szelesseg < 0 || magassag < 0) {
    return 'Pozitív számot adjon meg bemeneti értékként!';
  }
  return szelesseg * hosszusag;
}

teruletszamol(5,7)  //  35

teruletszamol(-5,7)  //  Pozitív számot adjon meg bemeneti értékként!
```

Egy másik megközelítése a függvények definiálására a `függvény kifejezések`. Függvény kifejezések esetén a függvény neve elhagyható, ezeket `névtelen függvényeknek` nevezzük. Ezen függvények egy változóhoz kötődnek, így lehet rájuk hivatkozni. Fontos megjegyezni, hogy nem hívható meg akárhonnan a függvény ezzel a deklarációval, a sorrend szigorúan deklaráció aztán függvényhívás.

```js
const terulet = function(szelesseg, magassag){
	const terulet = szelesseg*magassag;
	return terulet
}

terulet(5, 7)  //  35
``` 

Az ES6 másik újdonsága az úgynevezett nyíl függvények (`arrow functions`) szintaxisa, ami leegyszerűsíti a függvények deklarálását. Ha nincs értelmezve a függvénynek argumentuma, akkor értelemszerűen nem kerül oda semmi, csak a két zárójel.

```js
const szamoltterulet = (szelesseg, magassag) => {
  let terulet = szelesseg * magassag;
  return terulet
};
```

Visszatérve a változókhoz, a láthatóságuk (`scope`) szempontjából két csoportra lehet felosztani: lokális és globális. A globális szó lényegében azt takarja, hogy a változó hatóköre az egész programja kiterjedt, míg az utóbbi hatóköre gyakran csak egy függvényen belül értelmezhető. A lokális csoport tovább bontható blokk szintű (a let kulcsszóval deklarált), illetve a függvényszintű (var szóval definiált) változókra.

```js
// példa globális változóra

var szamlalo = 0

function szamlalovisszater(){
	return szamlalo;
}

szamlalovisszater() // a szamlalo változó globálisan van értelmezve

// példa lokális változóra

function allapotbeallit(){
	var allapot = "be"
	alert(allapot)
}

allapotbeallit()  // az állapot változó lokálisan van értelmezve

alert(változó)  // undefined - kívülről nem tudjuk meghivatkozni az állapot változót
``` 

A dolgot némileg tovább árnyalja az a tény, ha egymásba ágyazunk két függvényt, a külső függvényben deklarálok egy lokális változót és a belsőbe meghívva értelmezve van, viszont a legkülső függvények kívül továbbra sincs értelmezve. Csakis tőlünk (programozóktól) függ, hogy melyik hatókör meddig érhet. 

```js
var ev = 20
  if (ev > 12){
    var kutyaev = ev * 7;
    console.log(`A te kutyád ${kutyaev} éves kutyaévekben`) // A te kutyád 140 éves kutyaévekben
  }
```  

Globálisan azért volt elérhető a kutyaév változó, mert a var kulcsszó által deklarált változók hatókörét a függvények határozzák meg, nem egy függvényen belül volt definiálva. Ezzel szemben a let kulcsszóval definiált változók hatókörét éppp a `{}` blokkok határozzák meg, a függvények nem.

```js
var ev = 20
  if (ev > 12){
    let kutyaev = ev * 7
    console.log(`A te kutyád ${kutyaev} éves kutyaévekben`) // Uncaught ReferenceError: kutyaev is not defined.
  }
```

![ASZINKRON](./jegyzet/JAVASCRIPT/HATOKOR.jpg)
<figcaption style="text-align: center; font: italic bold 12px/30px Georgia, serif;">1. ábra, aszinkron programozás</figcaption>

Konstansnak nevezzük az olyan speciális változót, melynek értékét a kezdeti inicializálás után nem változtathatjuk meg a program lefutása során. Ugyanakkora hatókörrel rendelkezik, mint a let kulcsszavakkal definiált változók.  

```js
const konstans = 20
```

A JavaScriptben rengeteg előre definiált elem, amivel eddig találkozhattál valójában `objektum`, még a sztringek és számok is úgy működnek, mint valamilyen objektum példánya/leszármazottja. A primitív adattípusokon még értelmezve van az `objektum` és `tömb` (mint összetett) adattípus. A JavaScript objektumokat arra használhatjuk, hogy koncepcionizálhassuk a valós világ dolgait. Lényegében az objektumok egyfajta tárolóként funkcionálnak, `{}`, blokkba (objektum literál) foglalva annak tartalmát, az elemek definiálásának sorrendje nem számít. Minden belefoglalt elem `kulcs-érték pároknak` feleltetehtő meg, ahol a kulcshoz (a változókhoz hasonlóan) a memóriában rámutat a hozzá rendelt érték helyére, ahol az érték van eltárolva. Ez a dolog rendelkezhet bármilyen érvényes adattípussal, beleértve másik objektumot (még név nélküli függvény is lehet értéke a kulcsnak). Szintaktikája szerint a kulcsot követően az értékadás `=` helyett `:`-el történik, azt követi az érték. A kulcsokat `''`-ba is szokták rakni. Az ilyen objektumokat `JSON` formátumú fájlokként lehet eltárolni. A különálló kulcs-érték párokat `,`-vel választjuk el. Az objektumokat hozzá lehet rendelni változókhoz, ennek a típusa értelemszerűen objektum típussá konvertálódik. A beépített objektumok példányosított tulajdonságaihoz és metódusaihoz hozzá tudunk férni az úgynevezett pontjelzés (`dot notation`) módszerrel. Szintaxisa szerint a lepéldányosított objektum (mint változó) után pontot rakunk, utána szimplán odaírva a tulajdonság, vagy metódus nevét meghívhatjuk azt. Amennyiben a meghívott tulajdonság konkrét értékre mutat, az objektumhoz rendelt változó adattípusa a tulajdonság értékének adattípusára konvertálódik át. Egy másik lehetséges hozzáférési lehetőség a zárójel jelzés (`bracket notation`). Szintaxisa szerint először a példányosított objektum nevét írjuk, aztán zárójelbe a tulajdonság nevét (JavaScript objektum esetén `'tulajdonság'`). Nemcsak lekérhetjuk a kulcsokhoz rendelt értékeket, hanem meg is változtathatjuk. Szintaxisa szerint meghívjuk az objektum egyik tulajdonságát és értékül adjuk az új értéket `=` értékadó operátorral. Ezen kívül még lehetőségünk van kulcsok hozzáadásához, módosításához és törléséhez.     

![ASZINKRON](./jegyzet/JAVASCRIPT/OBJEKTUM.jpg)
<figcaption style="text-align: center; font: italic bold 12px/30px Georgia, serif;">2. ábra, objektum</figcaption>

```js
let urhajo = {
  'uzemanyag': 'Turbo uzemanyag',
  'aktiv statusz': true,
  anyabolygo: 'Fold',
  szemelyzet: 5,
  szin: 'ezust'
};

urhajo.szin  //  ezust

urhajo['uezmanyag']  //  Turbo uzemanyag

urhajo.szin = 'arany'

urhajo.szin  //  arany

delete urhajo.szin  // törli a szín tulajdonságot
``` 

Ahogy korábban említésre került, a kulcs értéke lehet függvény is, ezeket `metódusoknak` hívjuk. Ilyen például a `consol` osztály példányának `log()` metódusa, amivel kiírhatjuk a konzolra a zárójelekbe a kívánt értéket.

```js
const idegenhajó = {
  megszallas: function () { 
    console.log('Hello, készüljetek a megszállásra!')
  }
};

// ES6 szintaxissal

const idegenhajó = {
  megszallas () { 
    console.log('Hello, készüljetek a megszállásra!')
  }
};

alienShip.megszallas()  //  Hello, készüljetek a megszállásra! 
```

Mint már korábban említettük, az objektum és tartalma referenciával érhető el. Ez azt jelenti, hogy amikor egy változóhoz van rendelve egy objektum, melyet egy függvény argumentumának egyik paraméterére állítjuk be, a számítógép ezt úgy értelmezi, hogy a paraméter neve rámutat a memória azon helyére, ahol az objektum van eltárolva. Ennek erdeményeképpen véglegesen megváltoztatja a lepéldányosított objektum tulajdonságát (vagy annak értékét) még akkor is, ha az objektumot konstansnak deklaráltunk. 

```js
const urhajo = {
  anyabolygo : 'Fold',
  szin : 'ezust'
};

urhajo.szin // ezust

let lefest = obj => {
  obj.szin = 'arany'
};

lefest(urhajó);

urhajo.szin // arany
```

Mi a helyzet akkor, amikor szeretnénk adni egy új metódust (`masikmetodus`), ami rámutatna egy már korábban definiált tulajdonságra (`egyikkulcs`) ugyanazon az objektumon belül? Azt fogjuk tapasztalni, hogy a meghívandó tulajdonság nincs definiálva, holott tudjuk, hogy helyesen definiáltuk. Ez azért fordulhat elő, mert a `cselekszik metódus` hatóköre nincs kiterjesztve az objektum többi elemére (nincs hozzáférése). Itt jön a képbe a `this` kulcsszó. Szintaxisa szerint a this kulcsszó után írjuk a metódus nevét (ponttal összekötve és `()` nélkül). A this kulcsszó hivatkozik az objektumra és összeköti egymással a tulajdonságait. Ezután probléma nélkül lefutatthatjuk az új metódusunkat.

```js
const allat = {
  egyikkulcs: 'egyikérték',
  cselekszik() {
    console.log('mozog')
  },
  masikmetodus() {
    console.log(egyikkulcs)
  }
}

allat.cselekszik()  // "ReferenceError: egyikkulcs is not defined"
```

```js
const allat = {
  egyikkulcs: 'egyikérték',
  cselekszik() {
    console.log('mozog')
  },
  masikmetodus() {
    console.log(this.egyikkulcs)
  }
}

allat.cselekszik()  // mozog
```

A JavaScript `prototípusokon` alapuló `objektum orientált nyelv`, ellentétben a sokkal általánosabb osztály alapúval (C++ vagy Java). Az `osztály` egy absztrakt dolog, aminek egy konkrét előfordulása a `példány`. A `prototípus` alapú nyelveknél, mint például a JavaScript, nincs meg ez a különbség, csak objektumok vannak. Egy osztályt a `class` kulcsszóval definiálhatunk. Konvenció szerint az osztályok nevét nagy kezdőbetűvel írjuk. Egy objektumot lehet használni, mint egy új objektum sablonja. Mint korábban említettük, bármely objektumnak lehet icicializálni a tulajdonságait. Az osztály alapú nyelvekben egy elkülönített úgynevezett osztály definiciós részben adjuk meg az osztály metódusait. Itt adhatunk meg egy speciális függvényt (metódust), amit a példányok létrehozására használunk. Ez az úgynevezett `konstruktor`. Ebben az eljárásban adhatjuk meg a tulajdonságok (property-k) kezdőértékét, és hajhatjuk végre az egyéb létrehozáskor szükséges műveleteket. A `new` operátor ezen metódusok segítségével hoz létre példányokat. A JavaScript hasonló példát követ, csak nincs elkülönítve az osztálydefinició a konstruktortól. Helyette definiálni kell egy létrehozó függvényt, ami meghatározza a tulajdonságok kezdeti halmazát, és értékeit. Bármely JavaScript függvény lehet konstruktor. Emellett objektumokat létrehozhatunk implicit módon is, azaz nem kezdetben adjuk meg tulajdonságait, hanem már létrejöttük után. Mint már korábban említettük, JavaScript-ben hozzá lehet adni vagy törölni tulajdonságokat. Ha például egy olyan objektumnak adok egy új tulajdonságot, aminek vannak leszármazottai, azok is meg fogják kapni. Mindezen absztrakciók arra szolgálnak, hogy emberközelibbé tegyék a programozást és elkerülhessük a felesleges kódismétléseket. Nézzünk rá a lenti példára. A konstruktornak van egy bemeneti paramétere (`nev`), ezen belül a `this` kulcsszóval rámutatunk a `Kutya` osztály példányára, ezzel be tudjuk állítani a Kutya példányának nev tulajdonságát, melynek értékét a nev argumentum paramétertől várható. A viselkedés tulajdonság pedig minden egyes példányosítás alkalmával 0 értéket kap. A Kutya osztályt példányosítsuk le Buksi névvel a `new` példányosító kulcsszó (operátor) segítségével. Ekkor a konstruktor meghívódik, a Buksi sztring értékül adódik a nev tulajdonsagnak, végül a példány értékül adódik a buksi változónak. 

![OSZTALY](./jegyzet/JAVASCRIPT/OSZTALY.jpg)
<figcaption style="text-align: center; font: italic bold 12px/30px Georgia, serif;">3. ábra, osztály</figcaption>

```js
class Kutya {
  constructor(nev) {
    this.nev = nev;
    this.viselkedes = 0
  }
}

const buksi = new Dog('Buksi')
console.log(buksi.nev); // Buksi
```

Az osztályunk repeotárjához most hozzáadjuk az úgynevezett `gettereket` és `settereket`. Szintaktikailag hasonlít az objektumoknál megszokott metódusok szintaktikájához, a különbséget köztük csupán annyi, hogy nem kell vesszővel elkülöníteni őket egymástól. A `viselkedesnovel()` metódus meghívásával 1-gyel növekszik a `_viselkedes` tulajdonság értéke. A `getter` neve utal a tulajdonságára - visszatér valamilyen értékkel (ebben az esetben egy tulajdonsághoz rendelt érték). A `setter` név szintén utal a tulajdonságára - beállít valamiylen értéket.  Ha az egyik példány (buksi) `viselkedesnovel` metódusát meghívjuk, attól a kantor példány `viselkedes` változója változatlanul 0 marad. Tovább bonyolítva a dolgokat, az osztály alapú nyelveknél megkülönböztetünk publikus (`public` kulcsszóval) és privát (`private` kulcsszóval) tulajdonságokat, melyek a konstruktorban vannak definiálva. Ezzel letilthatjuk azt, hogy kívülről befolyásolni lehessen az adott tulajdonsághoz rendelt értéket. A JavaScript szintaxisában ez csupán egy `_` a tulajdonság elé írva.

```js
class Kutya {
  constructor(nev) {
    this._nev = nev
    this._viselkedes = 0
  }

  get nev() {
    return this._nev
  }

  get viselkedes() {
    return this._viselkedes
  }

  viselkedesnovel() {
    this._viselkedes++
  }
}

const buksi = new Kutya('Buksi')

const kantor = new Kutya('Kantor')
```

Ha az eddig megismert elveket alkalmazzuk a példányok elkészítéséhez, akkor minden egyes új dolog bevezetéséhez új osztályt kell definiálni (ami lehet akár Macska is) és megint ott tartunk, hogy a kódunk egy csomó helyet foglal. Erre azt a megoldást találták ki, hogy magukat az osztályokat is lehessen többszörözni úgy, hogy definiálnak egy úgynevezett `szülő osztályt` (ez esetben Allat), a példányai (`gyerek osztály`) pedig `öröklik` a szülő osztály valamely tulajdonságait és metódusait (attól függően, hogy melyikre van szükségünk). 

![OROKLES](./jegyzet/JAVASCRIPT/OROKLES.jpg)
<figcaption style="text-align: center; font: italic bold 12px/30px Georgia, serif;">4. ábra, öröklés</figcaption>

```js
class Allat {
  constructor(nev) {
    this._nev = nev;
    this._viselkedes = 0
  }

  get nev() {
    return this._nev
  }

  get viselkedes() {
    return this._viselkedes
  }   

  viselkedesnovel() {
    this._viselkedes++
  }
  
}

class Macska {
  constructor(nev, masiktulajdonsag) {
    this._nev = nev
    this._masiktulajdonsag = masiktulajdonsag
	this._viselkedes = 0
  }

  get nev() {
    return this._nev
  }

  get masiktulajdonsagmetodus() {
    return this._masiktulajdonsagmetodus
  }
  
  viselkedesnovel() {
    this._viselkedes++
  }
} 
```

Az osztályszintű örökítés menete szintaktikailag a következő: definiáljuk a Gyerek osztálynevet, írjuk mellé az `extends` kulcsszót utána pedig a Szulo osztálynevet.  Az örökíteni kívánt tulajdonságokat a konstruktorban a `super(tulajdonsag1, tulajdonsag2, ...)` speciális "metódus" meghívásával tehetjuk meg, az argumentumába pedig a kívánt paramétereket írjuk be. Ez tulajdonképpen meghívja a szülő osztály konstruktorát. Amennyiben új tulajdonságot akarunk definiálni (ami nem része a szülő osztálynak), azt a konstruktorban tehetjük meg ugyanúgy, ahogy eddig megszoktuk. Így már létrehozhatunk Macska osztályt is anélkül, hogy belegabalyodnánk a saját kódunkba.

```js
class Macska extends Allat {
  constructor(nev, masiktulajdonsag) {
    super(nev)
    this._masiktulajdonsag = masiktulajdonsag
  }
  
  get masiktulajdonsagmetodus() {
    return this._masiktulajdonsag
  }
}

const cirmos = new Macska('Cirmi', false)
console.log(cirmos._nev)  //  Cirmi
```

Néha előfordulhat az az eset, amikor olyan metódusokat szeretnénk generálni a Szülő osztályban, amiket nem szeretnénk, hogy örököljenek a Gyerek osztályai. Ilyenkor `statikus` osztályokat kell generálni a `static` kulcsszó segítségével (szintaktikailag a metódus neve elé kell írni a static kulcsszót). 

```js
class Allat {
  constructor(nev) {
    this._nev = nev
    this._viselkedes = 0
  }

  static nevgeneral() {
    const nevek = ['Morzsi', 'Potyi', 'Fulonc', 'Miruku', 'Rudolf']
    const randomszam = Math.floor(Math.random()*5)
    return nevek[randomszam]
  }
  
}

console.log(Animal.nevgeneral())  //  visszatér egy névvel

const morzsi = new Animal('Morzsi') 
morzsi.nevgeneral()  //  TypeError
```

### Stringek, számok és tömbök mint objektumok: leggyakrabban használt tulajdonságok, metódusok

Az olyan hagyományos értelemben vett primitívek, mint "szoveg" nem rendelkezhet metódusokkal és tulajdonságokkal, mert nem objektumok, ellentétben a JavaScripttel. Megjegyzésként megemlítenénk, hogy a `prototype` kulcsszót nem kötelező használni. 

```js
var string_literal = 'karakterlanc'
var string_ojektum = new String(string_literal)

console.log(typeof string_literal)  //  string
console.log(typeof string_ojektum)  //  object
```

|    String tulajdonság     |      Leírás      |
| ------------- |-------------|
|    String.prototype.length   | Visszatér a string hosszával  |
|    String.prototype.constructor   |  Visszatér a string konstruktor függvényével |

|    String metódus     |      Leírás      |
| ------------- |-------------|
|    String.prototype.indexOf("bemenet")   | Visszatér a String példány azon indexével, ahol először előfordul (kezdődik) az argumentumba írt string  |
|    String.prototype.lastIndexOf("bemenet")   | Visszatér a String példány azon indexével, ahol utoljára fordul elő (kezdődik) az argumentumba írt string |
|    String.prototype.search("bemenet")   | Visszatér a String példány azon indexével, ahol előfordul (kezdődik) az argumentumba írt string (vagy reguláris kifejezés) |
|    String.prototype.slice(kezdopont,vegpont)   | visszatér azon stringgel, ami az eredeti String példány kezdő és végpont indexe közé esik |
|    String.prototype.substring(kezdopont,vegpont)   | visszatér azon stringgel, ami az eredeti String példány kezdő és végpont indexe közé esik viszont negatív indexet nem fogad el |
|    String.prototype.substr(kezdopont,hossz)   | visszatér azon stringgel, ami az eredeti String példány kezdő és végpont (mint hossz) indexe közé esik |
|    String.prototype.split("elvalasztostring")   | visszatér egy tömbbel, melynek elemei az elválasztóstring közti alstringjei az eredeti String példánynak |
|    String.prototype.replace("ezt","erre")   | Az adott String példánynál lecseréli az első paraméterbe írt értéket a másikba írt értékre, és elfogad reguláris kifejezéseket is |
|    String.prototype.toUpperCase()   | Lecseréli a String példány összes karakterét nagybetűre |
|    String.prototype.toLowerCase()   | Lecseréli a String példány összes karakterét kisbetűre |
|    String.prototype.toLowerCase()   | Lecseréli a String példány összes karakterét kisbetűre |
|    String.prototype.concat("osszekotostring","masikstring")   | Az adott String példány összeköti a második paraméterbe írt stringgel az első paraméterbe írt string elválasztással |
|    String.prototype.trim()   | kitörli a String példány előforduló összes whitespace-t |
|    String.prototype.charAt(szam)   | Visszatér a String példány adott indexéhez (szám) tartozó karakterével |
|    String.prototype.charCodeAt(szam)   | Visszatér a String példány adott indexéhez (szám) tartozó UTF-16 karakterével |

Az olyan hagyományos értelemben vett primitívek, mint 123 nem rendelkezhet metódusokkal és tulajdonságokkal, mert nem objektumok, ellentétben a JavaScripttel. Megjegyzésként megemlítenénk, hogy a `prototype` kulcsszót nem kötelező használni.

```js
var szam1 = new Number('123')
console.log(szam1 === 123)  // false
var szam2 = Number('123')
//  ez globális metódus, nincs köze a Number példányhoz
console.log(szam2 === 123)  //  true
console.log(szam1 instanceof Number)  //  true
console.log(szam2 instanceof Number)  //  false
```

|    Szám tulajdonság     |      Leírás      |
| ------------- |-------------|
|    Number.prototype.MAX_VALUE   | Visszatér a lehető legnagyobb számmal, ami értelmezve van |
|    Number.prototype.MIN_VALUE   | Visszatér a lehető legkisebb számmal, ami értelmezve van |
|    Number.prototype.POSITIVE_INFINITY   | pozitív végtelennel tér vissza |
|    Number.prototype.NEGATIVE_INFINITY   | negatív végtelenel tér vissza |
|    Number.prototype.NaN   | a nem szám értékkel tér vissza |
|    Number.prototype.constructor   | Visszatér a Number példány konstruktor függvényével |

|    Szám metódus     |      Leírás      |
| ------------- |-------------|
|    Number.prototype.toString()   | Visszatér a Number példánnyal, mint string adattípus |
|    Number.prototype.toExponential(kitevo)   | Visszatér a Number példány kitevo-edik hatványával |
|    Number.prototype.toFixed(szamkerekit)   | Visszatér a szamkerekit tizedesjegyre kerekített számmal |
|    Number.prototype.toPrecision(szamlevag)   | Visszatér a szamlevag tizedesjegyik levágott számmal  |
|    Number.prototype.valueOf()   | Visszatér a Number példány értékével |

A `tömb (array)` egy olyan adatstruktúra, ami több értéket tartalmazhat és egy érték többször is szerepelhet. Megjegyzésként megemlítenénk, hogy a `prototype` kulcsszót nem kötelező használni. A tömb elemei számozással indexelődnek. A kezdő index a 0, az utolsó pedig a tömb hossza-1. A tömb neve után []-be írva a tömb egy tetszés szerinti indexét, visszatér a hozzá rendelt elem értékével. A tömbök az objektumok speciális fajtája. A JavaScriptben a `typeof` operátor `object`-et ír ki. A `new` kulcsszó használata kerülendő, számas nem várt következményekkel jár a használata, főleg kezdő programozók számára.

```js
var tomb1 = [1, 2, 3]
var tomb2 = new Array(1, 2, 3)

console.log(typeof tomb1)  //  object
console.log(typeof tomb2)  //  object
console.log(tomb1 instanceof Array)  //  true
console.log(tomb2 instanceof Array)  //  true

var tomb3 = new Array(30, 40)  //  Egy olyan tömböt definiál, melynek elemei 1 és 2
var tomb4 = new Array(30)  //  Egy olyan tömböt definiál, melynek hossza 30 és minden egyes eleme undefined

var szemely = []
person[0] = "Jakab"
person[1] = "Elemér"
person[2] = 64
console.log(person[0])  //  Jakab
```

Számos programozási nyelv támogatja a tömb elemek név-szerinti Indexelést. Ezeket a tömböket asszociatív tömböknek hívjuk. A JavaScript ezt a lehetőséget nem támogatja, a tömb elemeinek indexelése csak számmal történhet. Különben a tömb újradefiniálódna standard objektummá. Ezt követően néhány tömb metódus alkalmazása hibákat dobhat ki. 

```js
var szemely = []
person["keresztnev"] = "Jakab";
person["vezeteknev"] = "Elemér"
person["ev"] = 64
console.log(person[0])  //  undefined      
```

|    Tömb tulajdonság     |      Leírás      |
| ------------- |-------------|
|    Array.prototype.length   | Visszatér az Array példány hosszával  |
|    Array.prototype.constructor   |  Visszatér az Array példány konstruktor függvényével |

|    Tömb metódus     |      Leírás      |
| ------------- |-------------|
|    Array.prototype.toString()   | Visszatér az Array példány egyetlen stringgé konvenrált elemeivel  |
|    Array.prototype.pop()   | Kitörli az Array példány utolsó elemét |
|    Array.prototype.push()   | Új elemet szúr be az Array példány végére |
|    Array.prototype.shift()   | Kitörli az Array példány első elemét |
|    Array.prototype.unshift()   | Új elemet szúr be az Array példány elejére |
|    Array.prototype.tomb[index] = "valami"   | A tomb nevű Array példány index-edik eleméhez rendelődik a "valami" érték |
|    Array.prototype.splice()    | Visszatér az eredeti Array példány módosított változatával (elemet lehet hozzáadni, vagy kitörölni) |
|    Array.prototype.concat()    | Visszatér egy dublikált elemekkel rendelkező két (vagy több) tömbből összefűzött tömböt |
|    Array.prototype.slice()   | Visszatér az eredeti Array példány elemeiből képzett altömbbel (kezdőpont és végpont indexeket felhasználva) |
|    Array.prototype.sort(fuggveny)   | Visszatér az eredeti Array példány valamilyen függvény szerint rendezett formájával |
|    Array.prototype.forEach()   | Végigiterál az Array példány összes elemén |
|    Array.prototype.forEach()   | Végigiterál az Array példány összes elemén |
|    Array.prototype.map(fuggveny)   | Az eredeti Array példány tartalmát módosítja valamilyen függvény szerint |
|    Array.prototype.filter(fuggveny)   | Visszatér az eredeti Array példány elemeiből képzett altömbbel valamilyen függvény szerint |
|    Array.prototype.reduce(fuggveny)   |  Az eredeti Array példányon végigfut és visszatér egy értékkel aszerint, hogy milyen függvényt definiáltunk a metódus argumentumában |
|    Array.prototype.indexOf(elem)   | Visszatér az Array példány első azon elemének indexével, amelynek értéke megegyezik a metódus argumentumába írt paraméter értékével |
|    Array.prototype.lastIndexOf(elem)   | Visszatér az Array példány utolsó azon elemének indexével, amelynek értéke megegyezik a metódus argumentumába írt paraméter értékével |
|    Array.prototype.find(fuggveny)   | Visszatér az Array példány első azon elemével, ami teljesít azon feltételt, amit az argumentumba írt függvény definiál |
|    Array.prototype.findIndex(fuggveny)   | Visszatér az Array példány első azon elemének indexével, ami teljesít azon feltételt, amit az argumentumba írt függvény definiál |

### Standard objektumok: Set, Map, Date, JSON, Math, RegExp

A `halmaz (set)` egy olyan adatstruktúra, melyben az összes elem egyszer szerepelhet (típus szerint is történik az egyenlőség vizsgálat). Az adatok sorrendje attól függ, hogy melyiket mikor szúrták be. Megjegyzésként megemlítenénk, hogy a `prototype` kulcsszót nem kötelező használni. Nézzünk rá egy pillanatra a lenti példára. Amikor a halmazt először inicializáljuk egy tömbbel több elemmel benne, a halmaz nem egyetlen elemmel fog rendelkezni, hanem azon tömb elemeivel. A későbbiekben egy tömb egy eleme lesz a halmaznak. Erre fokozottan ügyelnünk kell!

```js
var halmaz = new Set(['1','2','1','1'])
halmaz.add(['1','3'])
halmaz.add({tulajdonsag1: 'ertek1', tulajdonsag2: 'ertek2'})
console.log(halmaz.size)  //  4
halmaz.forEach(elem => {
  console.log(elem)  //  1
                      //  2
					  //  ['1','3']
					  //  Object {tulajdonsag1: 'ertek1', tulajdonsag2: 'ertek2'}
})
```

|    Halmaz tulajdonság     |      Leírás      |
| ------------- |-------------|
|    Set.prototype.constructor   | Visszatér a halmaz konstruktor függvényével |
|    Set.prototype.size   | Visszatér a halmaz méretével |

|    Halmaz metódus     |      Leírás      |
| ------------- |-------------|
|    Set.prototype.add(ertek)   | Új értéket ad  |
|    Set.prototype.clear()   | Az összes érték törlődik a set példányában |
|    Set.prototype.delete(ertek)   | Azon érték törlődik a set példányában, amelynek értéke megegyezik a metódus argumentumába írt értékkel |
|    Set.prototype.forEach(fuggveny)   | Az összes elemen végigiteráltatja a set példányán a metódus argumentumában definiált függvényt |
|    Set.prototype.has(ertek)   | Visszatér az egyik logikai értékkel aszerint, hogy a metódus argumentumában a paraméter értéke szerepel-e a set példányában |
|    Set.prototype.values()   | Visszatér az összes kulcs-érték pár értékével, ami a set példányában található  |
|    Set.prototype.keys()   | Visszatér az összes kulcs-érték párral, ami a set példányában található |

A `JSON` (`J`ava`S`cript `O`bject `N`otation) egy olyan adatstruktúra (és egyben szöveges fájlformátum), amiben ami több értéket tartalmazhat és egy érték többször is szerepelhet. Leginkább szerverek közti adatkommunikációban használják. A szintaxisából adódóan könnyedén átalakítható JavaScript objektumokká. Tartalmát `{}`, blokkba foglaljuk annak tartalmát, az elemek definiálásának sorrendje nem számít. Minden belefoglalt elem `kulcs-érték pároknak` feleltetehtő meg, ahol a kulcshoz a memóriában rámutat a hozzá rendelt érték helyére, ahol az érték van eltárolva. Ez a dolog rendelkezhet bármilyen érvényes adattípussal. A kulcsot követően az értékadás `:`-el történik, azt követi az érték. A kulcsokat `''`-ba is szokták rakni. A különálló kulcs-érték párokat `,`-vel választjuk el.

```js
{"kulcs1":"ertek1", "kulcs2":"ertek2"}
```

A `Map` egy olyan adatstruktúra, melyben az összes elem (pontosabban kulcs) egyszer szerepelhet (típus szerint is történik az egyenlőség vizsgálat). Az adatok sorrendje attól függ, hogy melyiket mikor szúrták be.  Minden belefoglalt elem `kulcs-érték pároknak` feleltetehtő meg, ahol a kulcshoz a memóriában rámutat a hozzá rendelt érték helyére, ahol az érték van eltárolva. Ez a dolog rendelkezhet bármilyen érvényes adattípussal (primitív vagy objektum). Megjegyzésként megemlítenénk, hogy a `prototype` kulcsszót nem kötelező használni. Kulcs-érték párokat hozzá adhatunk az `add(kulcs,ertek)` metódussal, az adott kulcshoz tartozó értékkel pedig a `get(kulcs)` metódussal férhetünk hozzá. Nézzünk rá egy pillanatra a lenti példára. Amikor a Map-et először inicializáljuk egy tömbbel több kulcs-érték párral benne, a Map nem egyetlen elemmel fog rendelkezni, hanem azon tömb kulcs-érték párjával. Erre fokozottan ügyelnünk kell!

```js
let valami = new Map([
  ['uborka', 500],
  ['paradicsom', 350],
  ['hagyma', 50]
]);
valami.set('1', 'string')
valami.set(1, 'szam')
valami.set(true, 'logikai')
console.log(valami.get(1))  //  szám
console.log(valami.get('1'))
```

|    Map tulajdonság     |      Leírás      |
| ------------- |-------------|
|    Map.prototype.constructor   | Visszatér a Map példányának konstruktor függvénnyel |
|    Map.prototype.size   | Visszatér a Map példányának mérettel |

|    Map metódus     |      Leírás      |
| ------------- |-------------|
|    Map.prototype.clear()   | Az összes kulcs-elem pár törlődik a Map példányában |
|    Map.prototype.delete(kulcs)   | Azon kulcs-érték pár törlődik a Map példányában, amelynek kulcsa megegyezik a metódus argumentumába írt értékkel   |
|    Map.prototype.forEach(fuggveny)   | Az összes elemén végigiteráltatja a Map példányán a metódus argumentumában definiált függvényt   |
|    Map.prototype.get(kulcs)   | Visszatér a kulcshoz rendelt értékkel   |
|    Map.prototype.has(kulcs)   | Visszatér az egyik logikai értékkel aszerint, hogy a metódus argumentumában a paraméter értéke szerepel-e a Map példányában   |
|    Map.prototype.set(kulcs, ertek)   |  Új kulcs-érték párt ad a Map példányához  |
|    Map.prototype.values()   | Visszatér az összes kulcs-érték pár értékével, amit a Map példánya tartalmaz  |
|    Map.prototype.keys()   | Visszatér az összes kulcs-érték pár kulcsával, amit a Map példánya tartalmaz  |

JavaScriptben a `new Date()` (dátum) egy objektum példányt hoz létre, ami a pillanatnyi időt képviseli. Az `UNIX időbéjegzőt` használja ami azt jelenti, hogy az 1970 január elseje óta eltelt tizedmásodperceket számolja (mint egész szám) UTC-szerint. Negatív tizedmásodperc értékek is értelmezve vannak. A példányok gettereiről és settereiről (beleértve a különböző dátumformátumokat és időzónákat).

```javascript
var datum = new Date();  // a datum erteke a pillanatnyi idő, példa erre: Fri Mar 29 2019 09:58:18 GMT+0100 (közép-európai téli idő)
var datum = new Date(2018, 11, 24, 10, 33, 30, 0);  //  Mon Dec 24 2018 10:33:30 GMT+0100 (közép-európai téli idő)
var datum = new Date(0);  // az argumentumba a tizedmásodpercet is lehet írni, akkor az eredmény:  Thu Jan 01 1970 01:00:00 GMT+0100 (közép-európai téli idő)
var datum = new Date("October 13, 2014 11:13:00");  //  Mon Oct 13 2014 11:13:00 GMT+0200 (közép-európai nyári idő)
```

A `Math` egy beépített objektum, ami matematikai fggvényekkel és konstansokkal térhet vissza. Ellentétben a többi 'globális' objektumaival, nem rendelkezik konstruktorral, az összes tulajdonság és metódus statikus.

```js
console.log(Math.PI)  //  kiírja a pí közelítő értékét
console.log(Math.sqrt(16))  //  kiírja a négyzetgyök alatt 16 közelítő értékét
```

|    Math tulajdonság     |      Leírás      |
| ------------- |-------------|
|    Math.E   | Visszatér az Euler konstans közelített értékével |
|    Math.LN2   | Visszatér a 2 természetes alapú logaritmusának közelített értékével |
|    Math.LN10   | Visszatér a 10 természetes alapú logaritmusának közelített értékével |
|    Math.LOG2E   | Visszatér az E kettes alapú logaritmusának közelített értékével  |
|    Math.LOG10E   | Visszatér az E tizes alapú logaritmusának közelített értékével |
|    Math.PI    | Visszatér a PI közelített értékével |
|    Math.SQRT1_2   | Visszatér az 1/2 négyzetgyökének közelített értékével |
|    Math.SQRT2   | Visszatér a 2 négzetgyökének közelített értékével |

|    Math metódus     |      Leírás      |
| ------------- |-------------|
|    Math.abs(szam)   |  Visszatér a szam abszolút értékével |
|    Math.acos(szam)   |  Visszatér a szam arkusz koszinuszának közelített értékével |
|    Math.acosh(szam)   |  Visszatér a szam arkusz koszinusz hiperbolikuszának közelített értékével |
|    Math.asin(szam)   |  Visszatér a szam arkusz szinuszának közelített értékével |
|    Math.asinh(szam)   |  Visszatér a szam szinusz hiperbolikuszának közelített értékével |
|    Math.atan(szam)   |  Visszatér a szam arkusz tangensének közelített értékével |
|    Math.atanh(szam)   |  Visszatér a szam arkusz tangensének közelített értékével |
|    Math.cos(szam)   |  Visszatér a szam koszinuszának közelített értékével |
|    Math.cosh(szam)   | Visszatér a szam koszinusz hiperbolikuszának közelített értékével  |
|    Math.exp(kitevo)   |  Visszatér az Euler szám kitevo-edik hatványának közelített értékével |
|    Math.floor(szam)   |  Visszatér a szám egészre (lefelé) kerekített értékével |
|    Math.log(szam)   |  Visszatér a szam természetes alapú logaritmusának közelített értékével |
|    Math.log2(szam)   |  Visszatér a szam kettes alapú logaritmusának közelített értékével |
|    Math.pow(alap, kitevo)   |  Visszatér az alap kiveto-edik hatványával |
|    Math.random()   |  Visszatér 0 és 1 közötti random számmal egyenletes eloszlással |
|    Math.round(szam)   | A szam-ot .5-től felfelé kerekíti  |
|    Math.sign(szam)   |  Visszatér a szam előjelével (+1 vagy -1) |
|    Math.sin(szam)   |  Visszatér a szam szinuszának közelített értékével |
|    Math.sinh(szam)   |  Visszatér a szam szinusz hiperbolikuszának közelített értékével |
|    Math.sqrt(szam)   | Visszatér a szam nényzetgyökének közelített értékével  |
|    Math.tan(szam)   |  Visszatér a szam tangensének közelített értékével |
|    Math.tanh(szam)   | Visszatér a szam tangens hiperbolikuszának közelített értékével  |
|    Math.trunc(szam)   | Visszatér a szam egész részével, levágva a tizedespont utáni számjegyeket  |

A gyakran mintának nevezett `reguláris kifejezés` (`regular expression`) a jelsorozatok, stringek egy halmazát határozza meg. A minták használatával tömören megadhatók halmazok leírásai anélkül, hogy az összes elemüket fel kell sorolni. A `reguláris kifejezés Javascriptben egy olyan objektum (`RegExp`), amelynek vannak előre definiált tulajdonságai és metódusai. Szintaxisa szerint a mintát `//` közé illesztjük, utána pedig az úgynevezett módosítókat. Ezt adjuk értékül egy változónak. Egyik leggyakoribb felhasználása különböző beviteli mezők ellenőrzése, például megvizsgálhatjuk, hogy a megadott e-mail cím formátuma helyes-e. Ezen kívül szövegcseréket is végre tud hajtani. Kétféleképpen hozhatunk létre `RegExp` objektumot: literál jelöléssel és konstruktorral. Szintaxisuk szerint az köztük a különbség, hogy az előbbinél nincs definiálva a módosító, az utóbbinál viszont igen. A legtöbb formalizálásánál a következő operátorok használatával konstruálhatók meg a megfelelő reguláris kifejezések:

•	`Módosítók` - Felülírják a reguláris kifejezések normál működését.

|    Módosítók     |      Leírás      |
| ---------------- |------------------|
| `i` | Érzéketlen mintaillesztést tesz lehetővé |
| `g` | Globális mintaillesztést tesz lehetővé (nem áll meg az első találatnál, az öszesre rákeres) |
| `m` | Többsoros mintaillesztést tesz lehetővé |


```js
console.log("Elso masodik".match(/elso/i))  //  Elso
console.log("Elso masodik elso masodik?".match(/elso/g))  //  elso,elso
console.log("\nElso th\nelso".match(/^is/n))  //  Elso
```

•	`Csoportosítás` - A zárójelek az operátorok hatásköre elsőbbségének a meghatározására szolgálnak. Általában egy tartománynyi karaktersorozat keresése során alkalmazzák. 

|    Kifejezés     |      Leírás      |
| ---------------- |------------------|
| `[abc]` | Minden karaktert megtalál, ami a zárójelben megtalálható |
| `[0-9]` | Minden számjegyet megtalál, ami a zárójelben megtalálható |
| `(x|y)` | Megtalálja a `|` - el elválasztott mintáknak megfelelő karakter sorozatokat  |

```js
console.log("Elso masodik nyolcadik".match(/[l]/g))  //  l,l
console.log("987654321".match(/[1-4]/g))  //  4,3,2,1
console.log("ol, zold, voros, zold, gren, zo, kek, sarga".match(/(voros|zold)/g))  //  zold,voros,zold
```

•	`Metakarakterek` - Mindegyiknek megvan a saját jelentése.

|    Metakarakter     |      Leírás      |
| ------------------- |------------------|
| `\d` | Megtalálja a számjegyeket |
| `\s` | Megtalálja a szóközöket |
| `\b` | Megtalálja az adott karakter sorozattal kezdődő és végződő karakter sorozatokat |

```js
console.log("12345 egy ketto harom negy ot".match(/\d/g))  //  1,2,3,4,5
console.log("Mennyi szokoz talalhato ebben a szovegben?".match(/\s/g))  //  , , , , ,
console.log("A programozas egy kiraly dolog".match(kiraly))  //  kiraly
```

•	`Mennyiségjelzés` - A mennyiségjelző egy karakter vagy csoport után azt határozza meg, hogy hányszor fordulhat elő a megelőző kifejezés.

|    Mennyiségjelző     |      Leírás      |
| --------------------- |------------------|
| `+` | Jelzi, hogy a megelőző kifejezés legalább 1 esetben fordulhat elő |
| `*` | Jelzi, hogy a megelőző kifejezés akárhány esetben fordulhat elő (beleértve a nullát is)  |
| `?` | Jelzi, hogy a megelőző kifejezés csak 0 vagy 1 esetben fordulhat elő |

```js
console.log("Hellooo Vilag! Gyujtsuk ki és határozzuk meg a csoportositott es a kulonallo o karaktereket!".match(/o+/g))  //  ooo,o,o,o,o,o,o
console.log("Hellooo Vilag! Ez egy pelda szoveg lenne azon vizsgalathoz, amikor olyan karakter sorozatokat kell kiszűrni, amikor a minta az l es o karakterek valamelyikét tartalmazza, tovabba a sorrend szamit!".match(/lo*/g))  //  l,looo,l,l,l,l,l,l,l,l,l,l,l
console.log("101, 1000 or 10?".match(/10?/g))  //  10,1,10,10
```

|    Metódus     |      Leírás      |
| ---------------- |------------------|
| `exec()` | Mintaillesztést végez az adott stringre és visszatér az első találatra |
| `test()` | Mintaillesztést végez az adott stringre és visszatér egy logikai értékkel |
| `toString()` | Visszatér az argumentumában definiált reguláris kifejezés string értékével  |


### Vezérlési szerkezetek: Feltételes végrehajtás, ciklusok, iterátorok

A valós életben a környezetünk döntési feltételeket szab meg és a döntéshozatalunk kimenetele alapán történnek a későbbi események, amelyek akár újabb döntési feltételeket szabhat meg. A programozás során annyival több szabadságunk van, hogy mind a feltételeket, mind a végkimeneteleket mi magunk szabhatjuk meg. Vegyük példának azt az esetet, amikor elálmosodunk, akkor elmegyünk lefeküdni. A feltételt szintaxisa szerint úgy definiálhatunk, hogy használjuk az `if` kulcsszót. A függvényekhez hasonlóan `()`-be definiáljuk a feltételt, `{}`-be pedig az egyes végkimenetelekhez tartozó ágakat definiáljuk. A feltétel argumentuma két állapot közül az egyiknek kell teljesülnie: igaz (`true`), vagy hamis (`false`). Amennyiben az adott feltétel nem teljesül, definiálhatunk egy alapértelmezett ágat az `else` kulcsszó használatával. 

```js
if (true) {
  console.log('A feltétel teljesült ága hajtódik végre!')
} else {
  console.log('A feltétel alapértelmezett ága hajtódik végre!')
}

//  A feltétel teljesült ága hajtódik végre!
```  

Néha, amikor azt kell ellenőrizni, hogy a feltételben van-e értelmezve egy meghatározott változó és van-e hozzá rendelve valamilyen logikai adattípustól eltérő érték, ezt megtehetjük a feltétel argumentumában. Amennyiben értelmezve van az az adott változó és/vagy van hozzá rendelve valamiylen 'nem nulla hosszúságú' érték, akkor a feltétel teljesül, egyébként nem. Akkor nem teljesülhet a feltétel, ha az argumentumába az alábbi értékek közül az egyik kerül:

•	0

•	Üres string: `""` vagy `''`

•	az adott változóhoz `null` érték tartozik

•	az adott változó nem definiált, azaz `undefined`

•	az adott változónak az értéke nem szám, azaz `NaN`

A lenti példában definiálva van a feltétel végkimenetele `0` értékkel. Amennyiben a feltétel teljesül, az íródik ki, hogy `A feltételteljesült`, egyébként meg azt írná ki alapértelmezésképpen, hogy `A feltétel nem teljesült!`. 

```js
var feltetel_eredmenye = 0

if (feltetel_eredmenye){
   console.log('A feltétel teljesült!')
} else {
   console.log('A feltétel nem teljesült!')
}

//  A feltétel nem teljesült!
```

Az else ágat kibővíthetjük további feltételek definiálásával, melyek tovább újabb és újabb feltételekre ágaztathatunk le az `else if` kulcsszó segítségével. Konvenció szerint az else if 'állapot' mindig az if és az else 'állapototok' között helyezkedik el. Többszörösen összetett feltétel kezelést érdemes alaposan átgondolni (vizuális típusú embereknek lerajzolni), ugyanis gyorsan belebonyolódhatunk azok definiálásában. Egy példa keretén belül modellezzük le a közlekedési lámpa működését. Legyen a lámpa fénye alapértelmezetten sárga. Az első elágazásnál vizsgáljuk meg azt, hogy a lámpa fénye piros-e. Amennyiben igen, írjuk ki azt, hogy `A járműveknek meg kell állnia!`. Amennyiben nem teljesül a feltétel, az alapértelmezett ágat ágaztassuk le további két ágra az alábbi feltétel vizsgálatával: a lámpa fénye sárga-e. Amennyiben a feltétel teljesül, írjuk ki azt, hogy `A járműveknek le kell lassítani!`. Ezt az ágat ágaztassuk tovább azzal a feltétellel, hogy a lámpa fénye zöld-e. Amennyiben teljesül a feltétel, írjuk ki azt, hogy `A járművek szabadon mehetnek!`. Amennyiben egyik ág sem teljesül (a lámpafény színe az előbb felsoroltaktól eltér), írjuk ki azt, hogy `Köztes állapot!`.  

```js
let lampafeny = 'sárga'

if (lampafeny == 'piros') {
  console.log('A járműveknek meg kell állnia!')
} else if (lampafeny == 'sárga') {
  console.log('A járműveknek le kell lassítani!')
} else if (lampafeny === 'zöld') {
  console.log('A járművek szabadon mehetnek!')
} else {
  console.log('Köztes állapot!')
}
```

A fenti példánál még szerencsésnek mondhattuk magunkat, hogy a lámpához három állapotot kellett lekezelni. Most képzeljk el egy pillanatra azt az esetet, amikor több száz állapotot kell kezelnünk. Egyszer csak arra ébredünk rá, hogy követhetelnenné válik a probléma implementálása ezzel a technikával. Ezt kiküszöbölve találták ki a `switch` és `case` kulcsszó párost. Szintaxisa szerint a függvényekhez hasonlóan `()`-be definiáljuk a feltételt, `{}`-be pedig az összes végkimenetelekhez tartozó ágakat definiáljuk. A case ág után egy konkrét értéket definiálunk, ez az ág akkor hajtódik végre, ha a () argumentumba átadott érték megegyezik vele. Amennyiben ki szeretnénk lépni a {} blokkból, akkor `break` kulcsszót kell használni. A switch az összes case-t végignézi egészen addig, ameddig nincs definiálva a break kulcsszó, vagy végig nem ért az összes definiált eseten. Az utolsó ágat konvenció szerint az alapértelmezett ágnak nevezzük, ekkor a `default` kulcsszót használjuk a case kulcsszó helyett. A lenti példában definiáltunk egy switch-case feltételes végrehajtást három ággal és egy alapértelmezettel. Bármelyik ág teljesül, a számítógép kilép belőle. 

```js
let valtozo = 'érték2'

switch (valtozo) {
  case 'érték1':
    console.log('A változó értéke érték1.')
    break
  case 'érték2':
    console.log('A változó értéke érték2.')
    break
  case 'érték3':
    console.log('A változó értéke érték3.')
    break
  default:
    console.log(`A megadott ${valtozo} értékre nincs létrehozva lekezelő ág.`)
    break
}

//  A változó értéke érték2.
```

![SWITCH-CASE](./jegyzet/JAVASCRIPT/SWITCH-CASE.jpg)
<figcaption style="text-align: center; font: italic bold 12px/30px Georgia, serif;">5. ábra, switch-case</figcaption>

A programozásban definíció szerint a `ciklusok` egy olyan komponense az eszköztárunkban, ami annyiszor lefuttat egy utasítás sorozatot, ameddig az `állapota` be nem áll `megállt`-ra. Az egyik ilyen ciklus a `for` ciklus. Szintaxisa szerint értelmezve van az úgynevezett `itarátor változó` ami azt figyeli, hogy a feltétel teljesül-e. A for kulcsszó után a `()` argumentumban definiáljuk a feltételt. Az iterátor értékkészlete a pozitív egész számok halmaza, beleértve a nullát. Alapértelmezésképpen három kifejezést kell definiálni benne, melyeket `;`-vel választjuk el. A `{}`-ben pedig a kívánt utasítássorozatot definiálhatjuk, a függvényekhez hasonlóan. Az elsőnél az iterátor változót definiáljuk (mint lokális változó), valamilyen kezdő értékkel inicializálva. A soron következő kifejezésnél egy logikai értékkel kell visszatérni (`true` vagy `false`). Végezetül az 'utolsó' kifejezésben azt definiáljuk, hogy mit szeretnénk csinálni ezzel az iterátor változóval. Vegyük azt az egyszerű esetet, hogy 0-tól háromig 'számoljunk' el és írassuk ki az egyes értékeket egymás után. Az első kifejezésben definiáljunk egy `szamlalo` nevű változót 0 kezdő értékkel inicializálva. A második kifejezésben a feltétel legyen az, hogy a számláló változóhoz rendelt érték legyen kisebb, mint 4. Az utolsó kifejezésben léptessük a szamlalo változóhoz rendelt értéket 1-egyel, minden egyes iteráltatás során. Az iteráltatás addig zajlik, amíg a második kifejezésben visszatért érték `false`-ra nem vált át. Alapértelmezésképpen a két iteráció között eltelt idő különbséget a processzor órajele határozza meg. Köztük fordított arányosság van. Futtassuk le a példaprogramunkat és nézzük meg, hogy mi történik! 

```js
for (var szamlalo = 0; szamlalo < 4; szamlalo++) {
  console.log(szamlalo)
}

//  0
//  1
//  2
//  3
``` 

A for ciklus egyik másik lehetséges felhasználási módja, amikor bonyolult (nem elemi) adatstruktúrák elemein kell végig futni. Képzeljük el azt az esetet, amikor egy tömbben tárolunk egy listányi adatot. Minden egyes adatot (vagy azokat, amelyek teljesítenek egy bizonyos feltételt) meg szeretnénk változtatni. Ahelyett, hogy egyesével a `hard-code` technikával végighaladnánk az elemeken, egy for ciklussal egyszerűbben és hatékonyabban elvégezhetjük ugyanazt a feladatot. Az iterátor változó maximális mérete legyen a tömb mérete, a kezdő index pedig 0. 

```js
const tomb = ['első', 'második', 'harmadik']
for (let i = 0; i < tomb.length; i++){
  console.log(tomb[i])
}

//  első
//  második
//  harmadik
```

Csak hogy tovább bonyolítsuk a dolgokat, a következő példában ágyazzuk egybe két for ciklust. Vegyük azt az esetet, amikor két tömb elemeit szeretnénk összehasonlítani. A külső ciklus minden egyes léptetése során a belső ciklus teljesen végig ér. Ez annyiszor hajtódik végre, ahányszor a külső ciklus. Amennyiben a két tömb bármely elem-páros értéke megegyezik, írjuk ki azt, hogy `Az elso tömb i-dik eleme megegyezik a masodik tömb j-dik értékével!`.

```js
const elso = [20, 19, 6]
const masodik = [81, 19, 2]
for (let i = 0; i < elso.length; i++) {
  for (let j = 0; j < masodik.length; j++) {
    if (elso[i] === masodik[j]) {
      console.log(`Az elso tömb ${i}-dik eleme megegyezik a masodik tömb ${j}-dik értékével!`)
    }
  }
};

//  Az elso tömb 1-dik eleme megegyezik a masodik tömb 1-dik értékével!
```

Amíg a for ciklussal problémák kezelhetőek, melyeknél ismert az iteráció száma, addig a `while` ciklus esetén nem kell megadni az iterációk számát, annyiszor fut le az utasítás sorozat, ameddig a `()` -ban definiált egyetlen kifejezés visszatért értéke `true`. A for ciklussal ellentétben, az iterációs változót a while cikluson kívül definiáljuk (mint globális változó), ennek a léptetését pedig a `{}`-ben definiáljuk. A while ciklus `előltesztelős ciklusnak` hívjuk, mert először vizsgálja a feltéteé teljesülését és csak utána hajtja végre a {}-ba definiált utasítás sorozatot. Létezik a while ciklus `hátultesztelős változata`, melynek használata esetén a feltétel vizsgálat csak utólag hajtódik végre. A hátultesztelős legalább 1x lefut még akkor is, ha a feltétel nem teljesül! Szintaxisa szerint az iterációs változó itt is globálisan van definiálva. a do kulcsszó után `{}`-ban definiáljuk az iterációs változó léptetését és más utasításokat. A kapcsos zárójel végén pedig a `while` kulcsszót használva `()`-ban definiáljuk a feltételt. Abban az esetben, ha a `szamlalo` értékének növelése nincs implementálva, a feltétel mindig teljesülni fog és a ciklusunk az idők végezetéig fog futni. Ezt a jelenséget `végtelen ciklusnak` hívjuk. Kódolás során az ilyen ciklusok implementálása kerülendő, akár a számítógép lefagyását is okozhatják!  

```js
for (var szamlalo = 1; szamlalo < 5; szamlalo++){
  console.log(szamlalo)
}

//  1
//  2
//  3
//  4

var szamlalo = 1
while (szamlalo < 5) {
  console.log(szamlalo)
  szamlalo++
}

//  1
//  2
//  3
//  4

do {
	console.log(szamlalo);
	szamlalo++;
}
while(szamlalo < 5)

//  1
//  2
//  3
//  4
```

Az eddig használt ciklusokhoz képest számos beépített metódusokkal (nevén nevezve `iterátorokkal`) lényegesen könyebben végigmehetünk egy tömb elemein és igény szerint átalakíthatjuk azokat. Az egyik ilyen iterátor a `forEach()` metódus, mely a nevéből adódóan a tömb összes elemén végighalad. Szintaxisa szerint ez a metódus az argumentumában vár egy függvényt, amit paraméterként lehet átadni és akár minden egyes tömb elemre lehet hattatni. Ennek az iterátornak a visszatérési értéke `undefined`. A lenti példa szerint definiáltunk egy `tomb` nevű tömböt string elemekkel, egy `szoveg` nevű string típusú globális változót egy `szoosszerako` nevű függvényt, ami az argumentumában vár valamilyen paramétert. Meghívva a forEach() iterátort és az argumentumába átadva a szoosszerako függvényt végigiteráltatjuk a tömb összes elemén. A szoosszerako függvény az csinálja, hogy szóköz mentén összefűzi a tömb elemeit egyetlen stringgé és átadja a szoveg változónak.

```js
const tomb = ['elso', 'masodik', 'harmadik']
var szoveg = ''
function szoosszerako(elem){
	szoveg + = elem + ' '
}
tomb.forEach(szoosszerako)
console.log(szoveg)  //  elso masodik harmadik
```

A második iterátor, amiről érintőlegesen fogunk beszélni, az a `map()`. Amikor ezt a tömb metódust meghívjuk, az argumentumába átadott függvényt hattatva a tömb elemeire egy új tömbbel tér vissza, szemben a forEach() iterátorral. A lenti példában definiáltunk két változót: `eredeti` és `uj`. Az első egy tömbnyi tartalmaz, erre meghívjuk a map()-et, definiálunk az argumentumában egy függvényt, ami a tömb összes elemét 5-tel megszorozza. Végül a map() visszatér egy tömbbel és ezt adjuk át az uj nevű változónak, mint érték. 

```js
const eredeti = [1,1,2,3,5,7]
var uj = eredeti.map(szam => {
	return szam *5
})
console.log(uj)  //  [5,5,10,15,25,35]
``` 

Egy másik hasznos iterátor a `filter()`, amely a map()-hez hasonlóan egy új tömbbel tér vissza. Az argumentuma vár egy olyan függvényt, amiben egy feltételt kell definiálunk. Aszerint, hogy a feltétel teljesül, vagy nem, vissza kell térnie egy logikai változóval (`true` vagy `false`). Amennyiben a feltétel teljesül, az új tömb részét fogja képezni az aktuális elem, ahol éppen az iteráció tart, egyébként nem. A lenti példában ez a feltétel legyen az, hogy az aktuális elem (mint string) hossza kisebb, mint 6.

```js
const eredeti = ['első', 'második', 'harmadik', 'negyedik', 'ötödik']
var uj = eredeti.map(elem => {
	return elem.length < 6
})
console.log(uj)  //  ['első']
```

Néhány esetben, amikor meg szeretnénk találni egy elem indexét (mint visszatérési érték), itt jön a képbe a `findIndex()` iterátor. Az argumentuma vár egy olyan függvényt, amiben egy feltételt kell definiálunk. Aszerint, hogy a feltétel teljesül, vagy nem, vissza kell térnie egy logikai változóval (`true` vagy `false`). Fontos megjegyeznünk, hogy rögtön az első találat indexével tér vissza, tehát nem nézi végig a tömb teljes tartalmát! A lenti példában ez a feltétel legyen az, hogy az aktuális elem (mint string) hossza kisebb, mint 6. Ha a tömbön végigmenve egyszer sem teljesülne a megadott feltétel, -1-gyel térne vissza. 

```js
const tomb = ['első', 'második', 'harmadik', 'negyedik', 'ötödik', 'első']
var szam = tomb.findIndex(num => {
  return num < 6
});
console.log(szam)  //  0
console.log(tomb[szam].length)  //  5
```

Végezetül még egy rendkívül hasznos iterátort mutatnánk meg, név szerint a `reduce()`-t. Szintaxisa szerint az argumentuma paramétert vár egy függvényt (és opcionálisan egy kezdő értéket). amelyet hattatva a tömb összes elemére, visszatér egy értékkel. Ennek a függvényke két kötekező és egy opcionális paramétere van, név szerint:

•	`Accumulator` (acc) - kötelező paraméter - Ez a változó tárolja el a függvény pillanatnyi visszatérési értékét két iteráció között. Ha a függvény argumentum mellett nincs inicializálva kezdő érték, a függvény első meghívásával az értéke a tömb 0. indexű eleme lesz.

•	`Current value` (cur) - kötelező paraméter - A tömb jelenlegi eleme, ami a feldolgozásra vár. A függvény első meghívásával az értéke a tömb 1. indexű eleme lesz.

•	`Current index` (idx) - opcionális paraméter - A tömb jelenlegi elemének az indexe, ami a feldolgozásra vár.

A lenti példa szerint a `tomb` nevű tömb szám elemeit adjuk össze úgy, hogy a kezdő érték 10. Egy táblázatba összefoglaltuk, hogy az egyes iterációk során a változók milyen értéket vesznek fel.  

```js
const tomb = [0, 1, 2, 3, 4]
var szam = tomb.reduce((acc, cur) => {
    return acc + curr
}, 10)
console.log(szam)
```

|      hívás    |       acc     |      cur      |      idx      | visszatérési érték |
|:-------------:|:-------------:|:-------------:|:-------------:|:------------------:|
|       1.      |       10      |       0       |       0       |         10         |
|       2.      |       10      |       1       |       1       |         11         |
|       3.      |       11      |       2       |       2       |         13         |
|       4.      |       13      |       3       |       3       |         16         |
|       5.      |       16      |       4       |       4       |         20         |

### Callback függvény, promise objektum, aszinkron JavaScript, párhuzamos programozás

`Aszinkronnak` nevezzük az olyan utasításokat, amelyek arra késztetik a számítógépet, hogy ameddig az aszinkron utasítás le nem fut, addig más utasításokat is tudjon futtatni párhuzamosan. `Párhuzamos programozás` esetén időigényes utasítássorozat futtatása esetén nem kell szükségszerűen egyszerre egy utasítást futattni, feltéve ha adottak a megfelelő körülmények. A mindennapjaink során számtalan aszinkron folyamattal találkozhattunk. Példának felhozva a házimunkát, egyszerre történhet az edények mosása mosogatógéppel, ruhák mosása mosógéppel ,takarítás porszívóval. Miközben az egyik folyamat végrehajtása folyamatban van, addig egy másik feladatra koncentrálhatunk. Ehhez hasonlóan, a szoftverfejlesztés közben is értelmet nyer ez a fogalom. Az utasítások, mint kérés küldése a hálózat felé, vagy adatok lekérése ad adatbázisról néha időigényes lehet összességében ha egymás után csak egy utasítást futtathatunk, viszont a JavaScript megadja az utasítások párhuzamos végrehajtását.

•	`Teljesítve (Resolved)` - az utasítás végrehajtása sikeresen befejeződött, az utasítás `resolved` objektummal tért vissza 

•	`Visszautasítva (Rejected)` - az utasítás végrehajtása sikertelenül fejeződött be, az utasítás `rejected` objektummal tért vissza (hiba)

•	`Folyamatban (Pending)` - az utasítás végrehajtása folyamatban van

![ASZINKRON](./jegyzet/JAVASCRIPT/PARHUZAMOS.jpg)
<figcaption style="text-align: center; font: italic bold 12px/30px Georgia, serif;">6. ábra, párhuzamos programozás</figcaption>

A `promise` (ígéret) egy olyan objektum, amely egy aszinkron utasítás egy (a három közül) lehetséges állapotát reprezentálja. A kapott állapotokkal valamit kezdeni is kell (legyen bármi is a vágkimenetel), ezekért felelnek az úgynevezett `kezelők (handlers)`. A kezelés egyik lehetséges módja az állapot kijelzése, a másik pedig a következő utasításra való ugrás (ha van).

![PROMISE](./jegyzet/JAVASCRIPT/PROMISE.jpg)
<figcaption style="text-align: center; font: italic bold 12px/30px Georgia, serif;">7. ábra, promise</figcaption>

Szintaxisa szerint a `new` kulcsszóval meghívjuk a promise konstruktor metódusát és lepéldányosítjuk. A konstruktor bemenete vár egy függvény paramétert, amely lefut amint meghívjuk a konstruktort. Ennek a függvénynek általában két bemeneti függvény paramétere van:

•	`resolve()` - meghívása esetén a promise állapota átvált folyamatban-ról teljesítve állapotra, a promise visszatérési értékét szintén ez határozza meg

•	`reject()` -  meghívása esetén a promise állapota átvált folyamatban-ról visszautasítva állapotra, a promise visszatérési értékét szintén ez határozza meg

```js
const vegrehajtofuggveny = (resolve, reject) => {
  if (feltetel) {
      resolve('Teljesült!')
  } else {
      reject('Elutasítva!')
  }
}
const igeret = new Promise(vegrehajtofuggveny);
``` 

Ahelyett, hogy egyszerűen magunk építenénk fel a promise-ket, gyakrabban találkozunk olyan esetekkel, amikor promise objektumokkal kell visszatérni, ami tulajdonképpen egy aszinkron utasítás végeredménye. Ezen promise-ok végrehajtása egy időre el lesz halasztva, de mindenféleképpen vágrehajtódnak. Tovább haladva az anyaggal próbaként szimuláljuk le az esetet. Ahhoz hogy ezt megvalósítsuk, a `setTimeout()` -t fogjuk használni. A setTimeout() egy `NODE API`, ami visszahívó függvényeket használ (`callback function`), hogy ütemezzen be egy utasítást egy előre megadott idővel később. Két paramétert vár, az egyik egy callback függvény, a másik pedig a késleltetés mértéke ms-ban megadva (ez legyen 1000 ms).

```js
const kesleltetettkoszones = () => {
  console.log('Aszinkron köszönés!')
};

setTimeout(kesleltetettkoszones, 1000)  // minimum 1 s elteltével lefut a program, de nem pontosan!
``` 

Mint ahogy korábban említettük, a késleltetés aszinkron módon történik, a program többi részének futását nem fogja feltartani, miközben zajlik a késleltetés. Működését egy esemény-hurokként lehet egyszerűen szemléltetni. Az 1 másodperces késleltetés egész egyszerűen azért nem garantált, mert annyi utasítás is lefuthat előtte, aminek össz futási ideje meghaladhatja ezt a beállított késleltetési időt.

![ESEMENYHUROK](./jegyzet/JAVASCRIPT/ESEMENYHUROK.jpg)
<figcaption style="text-align: center; font: italic bold 12px/30px Georgia, serif;">8. ábra, eseményhurok</figcaption>

```js
const igeretvisszater = () => {
  return new Promise((resolve, reject) => {
    setTimeout(( ) => {resolve('I resolved!')}, 1000)
  })
}

const prom = returnPromiseFunction();
```

A promise objektum rendelkezik az úgynevezett `then()` metódussal, melyben definiálhatjuk, hogy milyen utasításokat szeretnénk lefutattni, miután beállt a promise az egyik lehetséges állapotba. Az argumentumába opció szerint nulla, egy vagy két függvény paramétert (`onFulfilled` és `onReject`) állíthatunk be, melyeket `handler`-nek (kezelőnek) is neveznek. Érdemes az összes lehetséges szituációt megfelelően előre lekezelni, különben a hibakeresés folyamatát saját magunk nehezítjük meg. Vegyük észre, hogy a then() mindig promise-al tér vissza. 

```js
const az_igeret = new Promise((resolve, reject) => {
  resolve('Szép_szó!')
})

const sikerkezeles = (teljesitettertek) => {
  console.log(teljesitettertek)
}

igeret.then(sikerkezeles) // Szép_szó!

```

A fenti példakód szerint az `igeret` egy promise, ami a `Szép_szó` teljesítéssel tér vissza ha meghívjuk. Továbbá definiáltuk a `sikerkezeles` függvényt, ami kiírja konzolra az argumentumába átadott értéket. Hívjuk az_igeret-et, majd hajtsuk végre a then() metódust és az argumentumában adjuk át a sikerkezeles-t. Mivel az_igeret automatikusan teljesül, a sikerkezeles meghívódik és kiírja a teljesített értéket a konzolra. Általános esetben nem elégséges a teljesített állapotot lekezelni, a másikkal is kell foglalkozni, hisz nem ismerhetjük minden egyes folyamat végkimenetelét. A lenti példa működése hasonlít a fenti példakódra azzal a különbséggel, hogy a then() metódus immáron egy helyett két függvény paramétert vár. A másik függvény paraméternek átadjuk a visszautasitott állapot lekezeléséért felelős függvényt. A példát kibővítve a két állapot egy sorban is lekezelhető mégpedig úgy, hogy a fenti két then() metódust láncba összekötjuk. A gyakorlatban a hiba kezelését külön választják a jobb átláthatóság érdekében a `catch()` metódus meghívásával. Működése szerint egy függvény paraméterrel rendelkezik (`onReject`). Amennyiben a promise a visszautasítva állapotba kerül, a catch() meghívódik és lefutnak a belefoglalt utasítások.  

```js
let igeret = new Promise((resolve, reject) => {
  let szam = Math.random()
  if (szam < .5 ){
    resolve('A szám kisebb, mint .5!')
  } else {
    reject('A szám nagyobb, mint .5!')
  }
})

const sikerkezel = (teljesitettertek) => {
  console.log(teljesitettertek)
}

const visszautasitottkezel = (visszautasitottertek) => {
  console.log(visszautasitottertek)
}

igeret.then(sikerkezel, visszautasitottkezel);

// hibakezelés catch() metódussal

igeret.then((teljesitettertek) => {
	console.log(teljesitettertek)
}).catch((visszautasitottertek) => {
    console.log(visszautasitottertek)
  })
``` 

Az aszinkron programozás egyik gyakran használt mintája az `utasítások meghatározott sorrendben történő futtatása`. Tegyük fel, hogy egy adatbázis felé intézünk egy kérést és a megérkező adatokat felhasználnánk további kérésekhez és így tovább. Vegyük észre, hogy mindegyik kérés egy-egy promise, amiket úgy kell összekötni, hogy egymást bevárva egyszerre csak egy fusson le (ahogy a `soros` programozásnál megszokhattuk). 

```js
elso_igeret().then((elsoteljesitettertek) => {
	return masodik_igeret(elsoteljesitettertek)
}).then((masodikteljesitettertek) => {
	console.log(masodikteljesitettertek)
})
```

Működése szempontjából először meghívódik az `elso_igeret`, ami visszatér egy promise-al. A teljesített állapotot then() metódus meghívásával lekezelődik. Ebben az ágban visszatérünk egy promise-al, ennek eredményeképpen meghívódik a masodik_igeret. Az erre vonatkozó teljesített állapot egy másik then() metódus meghívódással lekezelődik. Végül ebben az ágban kiíratódik a `masodikteljesitettertek` paraméter értéke. Ahhoz, hogy megfelelően összekössük a két promise-t, visza kellet térni a masodik_igeret(elsoteljesitettertek) promise-al. Ezzel azt értük el, hogy az első then() visszatérési értéke legyen a második promise.

Mi van abban az esetben, ha ugyanúgy több promise-t kell kezelnünk, viszont a végrehajtás sorrendje nem számít? Tegyük fel, hogy a lakásunkat ki kell takarítani, a ruháinkat meg kell szárítani, és el kell mosni az edényünket mosogatógéppel. Mindegyik házimunkát el kell végezni, viszont a sorrend nem számít. Vegyük észre, hogy az összes munka párhuzamosan fut. A probléma megoldására kitalálták a `Promise.all()`-t, mely paraméterként tömböt vár, elemei pedig egy-egy promise. Amennyiben bármelyik promise visszautasított állapotba áll be, a Promise.all() is ugyanúgy visszautasított állapotbaáll be.

```js
var tomb = [elsoigeret(), masodikigeret(), harmadikigeret()]
var osszesigeret = Promise.all(tomb)

osszesigeret.then((tombertekek) => {
	console.log(tombertekek)
}).catch((visszautasitottertek) => {
	console.log(visszautasitottertek)
  })
```   

A fenti példakód működése a következő: definiálunk egy `tomb` nevű tömböt, melynek eleme három promise. Definiálunk egy osszesigeret változót és értékül adjuk a `Promise.all(tomb)`-t. Az osszesigeretet meghívása után ha nem következik be hiba, mind a három promise lefut párhuzamosan a then() ágban. Hiba esetén a catch() ág hívódik meg és leállítja az összes futó utasítást (értékek kiírása).

A JavaScript ES8 bevezetésekor a párhuzamos programozás szintaxisa némileg megváltozottt, már másképp is tudjuk kezelni a promise-kat. Ezek közül megmutatjuk mit takarnak a `async` és `await` kulcsszavak. Az async kulcsszót alkalmazva a soros programozás során megismert függvény deklarációban olyan függvényt tudunk létrehozni, mely aszinkron módon képes lefutni. Egy ilyen `aszinkron függvény` három dologgal térhet vissza:

•	Amennyiben nincs beállítva visszatérési érték, automatikusan visszatér egy promise-al teljesítve állapotban undefined értékkel

•	Amennyiben nem promise van beállítva visszatérési értéknek, automatikusan visszatér egy promise-al teljesítve állapotban ugyanazzal az értékkel

•	Amennyiben promise van beállítva visszatérési értéknek, azzal fog visszatérni

A lenti példában definiáltunk egy `igeret` nevű aszinkron függvényt, melynek visszatérési értéke 5. Ezt a függvényt meghívva visszatér egy promise-al teljesítve állapotban és kiírja azt, hogy 5.

```js
async function igeret() { 
  return 5
}

igeret().then(teljesitettertek => {
	console.log(teljesitettertek)  //  5
})
```   

Az `await`, mint operátor kizárólag az aszinkron függvényen belül van értelmezve, ami visszatér a promise teljesítve állapothoz rendelt értékkel. Mivel a folyamatban állapotból a teljesítve állapotba való beállás közt eltelt idő előre nem meghatározható, az await feltartóztatja/megállítja az aszinkron függvény végrehajtódását, amíg a promise állapota be nem áll a folyamatban-tól különböző állapotba. A legtöbb esetben promise-al akkor találkozunk, amikor egy függvény visszatér vele. Vegyünk egy olyan példát, amikor nem mi magunk szerkesztjük meg ezt a függvényt, hanem egy másik fájlból beimportáljuk. Származzon a jelenlegi fájlunk, valamint az importálni kívánt "dolog" ugyanabból a könyvtárból. Hasonlítsuk össze a natív megoldással! Először importáljuk be a `valami` változóba mindent, amit a `innen_importalunk.js` fájlból exportálunk. A `bejelentes` nevű aszinkron függvényen belül az await kulcsszót használva feltartóztatjuk a `valami()` végrehajtását amíg a promise be nem áll teljesítve állapotba. A visszatért értéket átadjuk az `akarmi` változónak és kiíratjuk a kapott értéket. Az await kulcsszó nélkül a bejelentes függvény azt írja ki, hogy `Promise { <pending> }`, ami azt jelenti, hogy a promise még nem állt a teljesített állapotba. 

```js
// innen_importalunk.js

const ezt_kell_exportálni = () => {
  return new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Végre értem az aszinkron függvények használatát!')
  }, 1000)
})
}

module.exports = ezt_kell_exportálni

// ezzel_dolgozunk_most.js

// a feladat aszinkron függvénnyel való megoldása

const valami = require('./innen_importalunk.js')

async function bejelentes() {
  let akarmi = await valami()
  console.log(akarmi)  // Végre értem az aszinkron függvények használatát!
}

bejelentes()

// a feladat natív promise-al való megoldása


function masikbejelentes() {
  valami().then((akarmi) => {
	  console.log(akarmi)  // Végre értem az aszinkron függvények használatát!
  })
}

masikbejelentes()
``` 

Az async és await kulcsszavak igazi ereje akkor mutatkozik meg az aszinkron programozásban, amikor több, egymással összefüggő aszinkron utasításokat kell kezelni. A lenti példában röviden szót ejtünk erre az eshetőségre is. Először importáljuk be a `valami` változóba mindent, amit a `innen_importalunk.js` fájlból exportálunk. A `aszinkronfuggveny` nevű aszinkron függvényen belül az await kulcsszót használva feltartóztatjuk az `elso` végrehajtását amíg a promise be nem áll teljesítve állapotba. A `masodik`-kal is ugyanezt kell eljátszani azzal a különbséggel, hogy van egy bemeneti paramétere, ahova az első promise teljesitve állapotához rendelt érték tartozik. Az aszinkronfuggveny meghívását követően 1 másodperccel kiíródik az `elsoertek` értéke, majd megint 1 másodpercre rá kiíródik a `masodikertek` értéke. 

```js
// innen_importalunk.js

const elso = () => {
  return new Promise((resolve, reject) => {
  setTimeout(() => {
	const elsoertek = 'Első'
    resolve(elsoertek)
  }, 1000)
})
}

const masodik = (elsoertek) => {
  return new Promise((resolve, reject) => {
  setTimeout(() => {
	const masodikertek = elsoertek.concat(' Második ')
    resolve(masodikertek)
  }, 1000)
})
}

module.exports = {elso, masodik}

// ezzel_dolgozunk_most.js

const {elso, masodik} = require('./innen_importalunk.js')

async function aszinkronfuggveny() {
 let elsoertek = await elso()
 console.log(elsoertek)  // Első
 let masodikertek = await returnsSecondPromise(elsoertek)
 console.log(masodikertek)  //  Első Második
}

aszinkronfuggveny()
```

Ahogy a fenti példában is láthatjuk, amikor több aszinkron utasítást hajtunk végre egymás után, hiba esetén nem tudjuk, hogy konkrétan hol lépett fel a hiba. A lenti példában megmutatjuk, hogy az ES8 szintaxissal a hibakezelést miképp implementálhatjuk az úgynevezett `try` és `catch` kulcsszavak használatával. Ennek a módszernek az egyik előnye, hogy nemcsak `aszinkron`, hanem `szinkron` utasításokból eredendő hibákat is le lehet kezelni. 

```js
// innen_importalunk.js

let eredmeny = () => {
 let szam = Math.random()
 if (szam > .5 ){
   return false
 } else {
   return true
 }
}

let fuggveny = () => {
 return new Promise((resolve, reject) => {
   setTimeout(()=>{
     let igaz_vagy_nem = eredmeny()
     if(igaz_vagy_nem){
       resolve('A szám nagyobb, mint .5!')
     } else {
       reject('A szám kisebb, mint .5!')
     }
   }, 1000)
 })
}

module.exports = fuggveny;

// ezzel_dolgozunk_most.js

const fuggveny = require('./innen_importalunk.js')

async function aszinkronfuggveny_hibakezelessel() {
 try {
   let teljesult = await fuggveny()
   console.log(teljesult)  //  'A szám nagyobb, mint .5!'
 }
 catch(error){
   console.log(error)  //  'A szám kisebb, mint .5!'
 }
}

aszinkronfuggveny_hibakezelessel();
```

Mi van abban az esetben, ha ugyanúgy több promise-t kell kezelnünk, viszont a végrehajtás sorrendje nem számít? A probléma megoldására kitalálták szintén alkalmazható a `Promise.all()`-t annyi különbséggel, hogy előtte az await kulcsszót kell használni. A lenti példában beimportáljuk a szükséges függvényeket, a Promise.all() argumentumában definiálunk egy tömböt, melynek elemei legyenek a beimportált függvények. Ez visszatér egy promise-al és az állapota akkor vált át teljesítetté, amikor az argumentumában definiált összes függvény promise-a teljesített állapotba nem áll át. A visszakapott értékek a `tomb` nevű tömbben mentődnek el. Végül egy `for ciklussal` kiíratjuk a tomb értékeit. Amennyiben bármelyik promise visszautasított állapotba kerül, a Promise.all() azonnal visszautasított állapotba kerül és a hibánál fellépet függvény hibakezelő ágában implementált értékkel tér vissza.

```js
// innen_importalunk.js

const elso = () => {
  return new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Első')
  }, 1000)
})
}

const masodik = (elsoertek) => {
  return new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Második')
  }, 1000)
})
}

module.exports = {elso, masodik}

// ezzel_dolgozunk_most.js

const {elso, masodik} = require('./innen_importalunk.js')

async function aszinkronfuggveny() {
  const tomb = await Promise.all([elso(), masodik()])
  for (let i = 0; i<tomb.length; i++){
    console.log(tomb[i])  //  Első
						   //  Második
  }
}

aszinkronfuggveny()
```

Párhuzamos programozás

## Lokális böngésző tárolók: Local Storage, Session Storage, IndexDB, Web SQL, Cookies

## Hibakeresés, tesztelés

A programozás során elkerülhetetlenül véthetünk logikai és szintaktikai hibákat. A hibák nagy részének beazonosítása nehézségekbe ütközhet, ugyanis nincs definiálva semmiféle visszajelzés és emiatt még arra is sok munkát kell befektetni, hogy a hibakeresést honnan kezdjük. A programozás során debuggolásnak hívjuk azt a folyamatot, amikor megkeressük és kijavítjuk a hibás működést okozó kódrészleteket. A tesztelés alapjait a következő alapelvekben foglalhatjuk össze: 
 
- A tesztelés hibák jelenlétét jelzi: A tesztelés képes felfedni a hibákat, de azt nem, hogy nincs hiba. Ugyanakkor a szoftver minőségét és megbízhatóságát növeli.

- Nem lehetséges kimerítő teszt: Minden bemeneti kombinációt nem lehet letesztelni és nem is érdemes. Általában csak a magas kockázatú és magas prioritású részeket teszteljük.

- Korai teszt: Érdemes a tesztelést az életciklus minél korábbi szakaszában elkezdeni, mert minél hamar találunk meg egy hibát (mondjuk a specifikációban), annál olcsóbb javítani. Ez azt is jelenti, hogy nemcsak programot, hanem dokumen-tumokat is lehet tesztelni.

- Hibák csoportosulása: A tesztelésre csak véges időnk van, ezért a tesztelést azokra a modulokra kell koncentrálni, ahol a hibák a legvalószínűbbek, illetve azokra a bemenetekre kell tesztelnünk, amelyre valószínűleg hibás a szoftver (pl. szélsőértékek).

- A tesztelés függ a körülményektől: Másképp tesztelünk egy atomerőműnek szánt programot és egy beadandót. Másképp tesztelünk, ha a tesztre 10 napunk vagy csak egy éjszakánk van. 

A tesztelési technikákat csoportosíthatjuk a szerint, hogy a teszteseteket milyen információ alapján állítjuk elő. E szerint létezik:

- `Feketedobozos` (`black-box`) vagy specifikáció alapú, amikor a specifikáció alapján készülnek a tesztesetek.

- `Fehérdobozos` (`white-box`) vagy strukturális teszt, amikor a forráskód alapján készülnek a tesztesetek.

Feketedobozos tesztelésről beszélünk, amikor a tesztelő nem látja a forráskódot, de a specifikációkat igen, fehérdobozos tesztelésről, amikor a forráskód rendelkezésre áll. A feketedobozos tesztelést specifikáció alapúnak is nevezzük, mert a specifikáció alapján készül. Ugyanakkor a teszt futtatásához szükség van a lefordított szoftverre. Leggyakoribb formája, hogy egy adott bemenetre tudjuk, milyen kimenetet kellene adni a programnak. Lefuttatjuk a programot a bemenetre és összehasonlítjuk a kapott kimenetet az elvárttal. A fehérdobozos tesztelést strukturális tesztelésnek is nevezzük, mert mindig egy már kész struktúrát, pl. program kódot, tesztelünk. A strukturális teszt esetén értelmezhető a (struktúra) lefedettség. A lefedettség azt mutatja meg, hogy a struktúra hány százalékát tudjuk tesztelni a meglévő tesztesetekkel. Általában ezeket a struktúrákat teszteljük: kódsorok, elágazások, metódusok, osztályok, függvények, modulok. A tesztelés szintjei a következők:

- `Komponensteszt` - A komponensteszt csak a rendszer egy komponensét teszteli önmagában.

- `Integrációs teszt` - Az integrációs teszt kettő vagy több komponens együttműködési tesztje.

- `Rendszerteszt` - A rendszerteszt az egész rendszert, tehát minden komponenst együtt, teszteli.

- `Átvételi teszt` - Az átvételi teszt során a felhasználók a kész rendszert tesztelik.
 
A frontend fejlesztők számára számos böngésző debugger alkalmazás érhető el, amelyeket igény szerint ki és bekapcsolhatunk. Bármely debugger alkalmazással be lehet állítani töréspontokat, meg lehet vizsgálni a változókat logolással futás közben és még sok más lehetőséggel felgyorsíthatjuk a hibakeresés folyamatát. Első hallásra talán idegennek hangozhatnak az előbb elhangzott szavak, de nem kell aggódni, szépen végigmegyünk a leggyakrabban használt hibakereső eljárásokon, példákkal színesítve. A böngészők (mint a Google Chrome) alapból is rendelkeznek hibakezekő eszközökkel. Ezen eszközök része a fejlesztői eszközöknek (developer tools) amelyet Windows-os gépeken az F12 gomb lenyomásával (Mac OS X alatt Cmd+Opt+I) hívhatunk elő. Ezt követően megnyílik előttünk egy ablak, számos füllel. Egy Javascript alkalmazás debuggolásának egyik megközelítése szerint a console.log() metódus meghívásával a kívánt helyen a kódunkban szemmel tarthatjuk az egyes változókhoz rendelt értékeket. Az eredményt a Console fülre való kattintással tudjuk megjeleníteni. Az előforduló hibák egy részére a fordítóban definiáltak úgynevezett hibakódokat, melyekhez hibaüzenetek társulnak. Ezek automatikusan megjelennek a Console fülön. Ezen a fülön  Hatékonyság szemponjából nem a legjobb választás egyrészről azért mert lassú, továbbá nem feltétlenül kaphatjuk meg vele a szükséges információkat. Emberi léptékkel mérve a kódunk egy pillanat alatt is lefuthat és könnyen lemaradhatunk a lényeges információkról. Logolni nem csak értékeket, hanem események bekövetkeztét is lehet. Ekkor jön a képbe a töréspontok (breakpoints), amik elhelyezésével a kódunk kívánt szekciójának futása felfüggeszthető és újraindítható. A `Sources` menüpontban debuggolhatjuk az alkalmazásunk JavaScript "részét". Ez a menüpont további három részre tagolódik. A bal felső szekcióban forráskódot felépító fájlokat érhetjük el fa struktúrába rendezve. Az egyikre rákattintva a jobb felső szekcióban annak a tartalma jelenik meg. Végül a lenti szekcióban a debuggoló eszközök érhetők el. A lenti példa kódot felhasználva vessünk egy pillantást a forráskódra. Amint láthatjuk, a sorok számozva vannak. Ha az egyikre rákattintunk, bekékül. Itt állíthajuk be a töréspontokat. Jelöljük ki a 4. és 8. sort. A jobb felső szekcióban a Breakpoint fület megnyitva fel van sorolva az összes általunk kiválasztott töréspont, melyeket konfigurálhatunk. Ezen kívül még néhány hasznosnak vélt menüpont érhető el a jobb felső szekcióban: 

- A `Watch` menüpontnál képesek vagyunk kijelezni bármilyen kifejezés pillanatnyi értékét, ami a kódban előfordul.

- A `Call` menüpontnál meg tudjuk jeleníteni az egymásba ágyazott függvény hívásokat, a meghívás időpontja szerint sorba rendezve. Itt meg kell jegyeznünk, ha egy függvénynek nincs neve, akkor `anonymous`-ként van feltűntetve. A megjelenített hívások kattinthatóak. Ha az egyikre rámegyünk, a bal felső szekciónál a kódunk megfelelő részére ugrik a debugger. 

- A `Scope` menüpontnál egy általunk kiválasztott változót vizsgálhatunk meg. Hatókör szerint csoportosítva fel vannak sorolva a globális (`Global`) és lokális (`Local`) változók. Ha az egyikre rámegyünk, a bal felső szekciónál a kódunk megfelelő részére ugrik a debugger.

A jobb felső szekció tetején a töréspontok mentén széttördelt utasításokat lehet léptetni. Balról jobbra felé haladva bemutatjuk az egyes gombok funkcióit:

- Végrehajtás folytatása - a gomb lenyomásával folytathatunk egy korábban felfüggesztett kódrészlet futtatását.

- Léptetés a következő fő végpontra - ha egy függvényben több fügvény van definiálva, melyekben további végpontok vannak elhelyezve, a gombot nyommogatásával csakis kizárólag a legkülső végpontok között lehet ugrálni.

- Léptetés az összes végponton keresztül - az előző funkcióval ellentétben az összes végpontok keresztül végig tudunk vele haladni.

- A végrehajtás folytatása ( amíg nincs vége a kódnak ) - akkor hasznos, ha egymásba ágyazott függvényeket futtatunk.

- Összes töréspont engedélyezése vagy letiltása - a gomb lenyomásával az összes eddig definiált töréspontot engedélyezhetjük, vagy letilthatjuk.

- Végrehajtás automatikus leállításának engedélyezése vagy letiltása - ha a funkció engedélyezve van, hiba esetén az éppen futó utasítás végrehajtását felfüggeszti a debugger a bal felső szekciónál kijelöli a hiba forrását.

```js
function koszones(nev) {
  let valtozo = `Szia, ${nev}!`;

  kimond(valtozo);
}

function kimond(valtozo) {
  alert(`** ${valtozo} **`);
}
```

```html
<!--index.html-->
<!DOCTYPE HTML>
<html>
<body>

  <script src="koszones.js"></script>

  <script>
  koszones("Ádám");
  </script>

</body>
</html>
```

![	DEBUGGOLAS](./jegyzet/JAVASCRIPT/DEBUGGOLAS.jpg)
<figcaption style="text-align: center; font: italic bold 12px/30px Georgia, serif;">14. ábra, debuggolás</figcaption> 

## Vue.js: Szintaxis, data, methods, computed, mounted, komponensek, props, Single File Components, Vue-CLI
 
A Vue.js az alkotóik szerint egy nélkülözhetetlen eszköz a modern webfelületek hatékony fejlesztésében. A Vue.js keretrendszert akkor ajánlott használni , ha egy applikációt emberközelibbé szeretnénk tenni, a DOM elemeit hatékonyabban irányíthassuk, gyorsan reagálhassunk a felhasználó igényeire és mobilalkalmazás-szerű benyomást kelthessünk az asztali alkalmazásunkon. A Vue.js egy HTML-alapú sablon (template) szintaxist használ, amiben lehetőségünk adódik, hogy összekössük a lerenderelt DOM-t a Vue.js lepéldányosított osztályával kapcsolatos adatokat. A motorháztető alatt a Vue lefordítja a sablont virtuális DOM renderelő függvényekké. Kellően sikerült összezavarodni? Nem kell aggódni, rövidesen szót ejtünk a DOM és virtuális DOM közti különbségről.

![SPA](./jegyzet/JAVASCRIPT/VUE_REAGALO_RENDSZER.jpg)
<figcaption style="text-align: center; font: italic bold 12px/30px Georgia, serif;">9. ábra, Vue.js reagáló rendszer</figcaption>
																																																																																																																																																																																																													 	
Számos JavaScript keretrendszer, beleértve a Vue.js-t is az úgynevezett `Virtuális DOM-t` használják. Elméletileg a DOM-ra gondolhatunk úgy, ami reprezentálja a HTMl dokumentum felépítését. Gyakorlatilag a DOM egy olyan adatstruktúra ami akkor jön létre, amint a HTML dokumentumot a böngésző lefordítja. Amikor JavaScript segítségével változtatni kívánunk a megjelenített oldal állapotán, a böngésző elkezdi megkeresni a DOM-on belül a megfelelő csomópontokat amik érintettek lehetnek, végül azokat megváltoztatja. Egy modern alkalmazásban több ezer ilyen csomó található a DOM-ban, amik frissítése rengeteg erőforrást emészt fel. A kisebb jellegű de gyakoribb frissítések elkerülhetetlenül lelassítják az oldal betöltését. A Virtuális DOM egyfajta egyszerűsített és leválasztott (lokális) absztraktciója a HTML DOM-nak, ami a memóriában helyezkedik el. A böngészőkön az elemek megjelenítése régebben úgy működött, hogy minden egyes változás bekövetkezte esetén (legyen az akármilyen kicsi jelentőségű) is lerenderelte a teljes DOM-t ahelyett, hogy csak a szükséges elemei frissítse. Szóval akárhányszor változás következik be mondjuk azzal ,hogy új elemet szeretnénk megjeleníteni a DOM-ban, egy virtuális DOM létrejön, ami első ízben nem végez semmi nemű változtatást a DOM-ban, csupán a különbséget vizsgáljuk az előző és jelenlegi virtuális DOM között. Ezt követően a példánál maradva az új elem be fog töltődni a DOM-ba anélkül, hogy az egészet újra renderelnénk.  Virtuális DOM-t nem csak az erőforrás csökkentés miatt érdemes használni, hanem több funkcionalitást is kínál.
																																																																																																																																																																																																																																																																																																																																			
![SPA](./jegyzet/JAVASCRIPT/VIRTUALIS_DOM_FRISSITES.jpg)
<figcaption style="text-align: center; font: italic bold 12px/30px Georgia, serif;">10. ábra, dinamikus DOM frissítés</figcaption>

Kezdésnek látogassunk el a Vue.js dokumentációjának kezdő honlapjára. Számtalan lehetőség közül választhatunk miképp telepítsük fel a Vue.js keretrendszert. Amennyiben gyorsan szeretnénk prototípust készíteni, elegendő importálni a megfelelő scriptet online forrásból. Viszont ha komplex alkalmazást próbálnánk meg összerakni (pl. `Webpack` segítségével) és nem szeretnénk, hogy a használt könyvtárak verziószáma ne változzon, akkor lokális telepítés ajánlott. Ebben a szekcióban egy egyszerű példán keresztül bevezetnénk az olvasót a Vue.js keretrendszer használatának alapjaiba, ezért elegendőnek gondoljuk a könyvtár online módon történő importálását. Az első lépésként példányosítsuk le a Vue osztályt a `new Vue()` kulcsszóval. Ebben az esetben nem akarjuk eltárolni a példányt egy változóba, mert nincs szükség rá. A példány argumentuma vár egy objektumot, amiben konfigurálhatjuk, hogy miképp szeretnénk felhasználni. Az `el` property segítségével megadhatjuk, hogy a DOM mely elemét szeretnénk vezérelni. A színfalak mögött ez az elem lesz a template a Vue példánynak, ami lerendelődik a DOM-ba és betöltődik, mint View (nézet). Legyen ez az elem egy `<div id="app></div>` és rá úgy tudunk hivatkozni a Vue példányban, hogy `el: #app`. Az `el` property segítségével megadhatjuk, hogy milyen adatokkal szeretnénk felhasználni az adott Vue példányhoz. Adjunk át neki az alábbi objektumot `{cim: "Ez az első Vue,js alkalmazásom"}`. Ezzel azt értük el, hogy a cim property-nek értékül adtuk az alábbi szöveget: `Ez az első Vue,js alkalmazásom`. Ahhoz, hogy ezt meg is jeleníthessük a View-ben, a két `<div>` között, kettős kapcsos zárójel közé szírjuk be a cim változót. Ezzel a szintaxissal bármilyen előre definiált változóra lehet hivatkozni, hogy a View-ben megjeleníthessük a pillanatnyi értékét. Próbáljuk ki és nézzük meg mi történik! 

```html
<!--index.html-->
<!DOCTYPE html>
<html lang="hu">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width,initial-scale=1.0">
		<title>Példa</title>
		<style>
		</style>
	</head>
	<body>
		<div id="app">
			<p>{{cim}}</p>
		</div>
	</body>
	<script src="https://cdn.jsdelivr.net/npm/vue"></script>
	<script>
		new Vue({
			el: '#app',
				data: {
				cim: 'Ez az első Vue.js alkalmazásom!'
					  }
				});
	</script>
<html>
```

<iframe height="300" style="width: 100%;" scrolling="no" title="1. Vuejs2 példa" src="//codepen.io/i-like-physix/embed/preview/KYJPYj/?height=300&theme-id=36889&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/i-like-physix/pen/KYJPYj/'>1. Vuejs2 példa</a> by I-like-PhysiX
  (<a href='https://codepen.io/i-like-physix'>@i-like-physix</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																					          

A következő lépésként nézzük meg, hogyan figyelhetünk egy esemény bekövetkeztére. Deklaráljunk egy gombot valamiylen névvel. Az események bekövetkeztének figyelésére használhatóak az arra szakosodott direktívák (`directive`). A directive egy olyan utasítás, ami elhejezhető a template-en és vezérelhetjük vele a DOM megcélzott elemét. A szintaxisa szerint: `v-direktiva_neve`, ahol a direktiva_neve a direktíva attribútuma, melynek értéke egy JavaScript kifejezés. Az események figyelésére szakosodott direktíva a  `v-on`. Többféle eseményt különböztetünk meg, a kattintás esetén `v-on:click`. Végül a `=""` mentén definiálhatjuk a kódot, amit végre szeretnénk hajtani. Legyen az a példa, hogy gombnyomásra változtassuk meg a kezdeti szöveget valamilyen más szövegre egy metódus meghívásával. A következő lépésként hozzunk létre egy `methods` property-t a lepéldányosított Vue osztályában, melynek értéke legyen egy objektum. Itt definiálhatjuk a metódusokat. A Vue osztályon belül definiált összes változót, metódust (és egyéb property-t) a `this.` kulcsszóval tudjuk meghivatkozni. Próbáljuk ki és nézzük meg, hogy mi történik!        

```html
<!--index.html-->
<!DOCTYPE html>
<html lang="hu">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width,initial-scale=1.0">
		<title>Példa</title>
		<style>
		</style>
	</head>
	<body>
		<div id="app">
			<button v-on:click="cimvaltoztat">Change</button>
			<p>{{cim}}</p>
		</div>
	</body>
	<script src="https://cdn.jsdelivr.net/npm/vue"></script>
	<script>
		new Vue({
			el: '#app',
			data: {
				cim: 'Ez az első Vue.js alkalmazásom!'
			},
			methods: {
				cimvaltoztat(){
					this.cim='Ez egy masik szöveg'
				}
			}
		});
	</script>
<html>
```
																																																																																																																																																																																																																																																          
<iframe height="300" style="width: 100%;" scrolling="no" title="2. Vuejs2 példa" src="//codepen.io/i-like-physix/embed/preview/ROvwoY/?height=300&theme-id=36889&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/i-like-physix/pen/ROvwoY/'>2. Vuejs2 példa</a> by I-like-PhysiX
  (<a href='https://codepen.io/i-like-physix'>@i-like-physix</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

A következő lépésként tároljuk el azt, amit a felhasználó begépel. A JavaScriptben amint bekövetkezik egy esemény egy alapértelmezett esemény objektumot adunk át az esemény figyelő számára. Ez az objektum tartalmazza az események forrását legyen az gomb, bemeneti mező, stb. amire később hivatkozhatunk. Példaként egy bemeneti eseményt azon bemeneti mezővel lehet összekötni, ahova a felhasználó éppen gépelt karaktereket. A cél az, hogy hivatkozni tudjunk erre a bemeneti mezőre, hogy hozzá tudjunk férni a begépelt értékhez. Vuejs-ben az alábbi kód deklarálásával férhetünk hozzá ezen értékekhez az eseményt kiváltó elemnél: `$event.target.value`. A direktívákat nemcsak események figyelésére, hanem egy elem dinamikus módon történő "összekapcsolását" is megoldhatjuk vele. Az előbb tárgyaltaktól eltérően ezúttal nem értékeket szeretnénk lekérni egy bemeneti mezőből (az előző példánál maradva), hanem értékeket közvetíteni szeretnénk a bemeneti mező felé. Így a kommunikáció már oda-vissza történhet a felhasználó és az applikáció között. Az erre a célra használatos direktíva a `v-bind:attributum_neve`, ahol a `attributum_neve` a kérdéses attributum, amivel össze akarom kötni az adott elemet dinamikusan. Végül a `=""` mentén definiálhatjuk azt az egyetlen kifejezést, amit végre szeretnénk hajtani. Az egyik leggyakrabban összekötött attribútumok, melyeket összekötnek az elemekkel, a HTML attribútumok (például `class` és `style`). Egy példa keretén belül meg szeretnénk változtatni egy elem pixelben megadott méretét dinamikusan aszerint, hogy egy szám típusú bemenetbe milyen számot pötyögtünk be. Szintaktikája szerint többféleképpen implementálhatjuk a megoldást, a könnyedség érdeképen maradjunk az úgynevezett objektum megközelítésnél: `v-bind:style="{ fontSize: valtozo_neve + 'px' }"`. Próbáljuk ki és nézzük meg, hogy mi történik!    

```html
<!--index.html-->
<!DOCTYPE html>
<html lang="hu">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width,initial-scale=1.0">
		<title>Példa</title>
		<style>
		</style>
	</head>
	<body>
		<div id="app">
			<input type="number" v-on:input="valtozo=$event.target.value">
			<p v-bind:style="{ fontSize: valtozo + 'px' }">Begépelt szám: {{valtozo}}</p>
		</div>
	</body>
	<script src="https://cdn.jsdelivr.net/npm/vue"></script>
	<script>
		new Vue({
			el: '#app',
			data: {
				valtozo: ''
			}
		});
	</script>
<html>
```

<iframe height="300" style="width: 100%;" scrolling="no" title="3. Vuejs2 példa" src="//codepen.io/i-like-physix/embed/preview/VNgPrd/?height=300&theme-id=36889&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/i-like-physix/pen/VNgPrd/'>3. Vuejs2 példa</a> by I-like-PhysiX
  (<a href='https://codepen.io/i-like-physix'>@i-like-physix</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>																																																																																																																																																																																																																																																																																																																																																																																																																		            

A sablon-beli kifefezések habár elég egyértelműek, mégis egyszerű műveletek definiálására találták ki. Túlbonyolított kifejezéseket írni a sablonba felesleges, csupán a saját dolgunkat nehezítené meg. A probléma feloldására találták ki a `computed property-t`. Általánosságban a computed property-t koncepciója szerint akkor érdemes használni, amikor egyes property-k egymástól függenek és valamilyen értékkel vissza kell térni. A metódus property-hez hasonlóan a computed property is értelmezve van, melyenk értéke szintén egy objektum, megyben definiálhatjuk a computed property-ket. Egy computed property csak akkor értékelődik újra, amennyiben az egyik függő property értéke meg nem változik. A computed property koncepciójának tovább csiszolásával és általánosításával megszületett a `watch` property. Mindezen fejlesztések arra szolgálnak, hogy az adatokban történt változásokat könnyebben nyomon követhessük és kezelhessük le. A lenti példában létrehoztunk egy Vue példányt egy number változóval, increment és showalert metódusokkal, anothercounter computed property-vel és a number változóra figyelő watcher-t. A frontend oldalon gombnyomásra 1-egyel megnövekszik a number értéke. Amint változik a number változónak az értéke egyrészt az anothercounter reagál és más értékkel tér vissza, másrészt watchert-t deklarálva ugyanerre a változóra végrehatdódik a showalert metódus. Próbáljuk ki és nézzük meg mi történik!

```html
<!--index.html-->
<!DOCTYPE html>
<html lang="hu">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width,initial-scale=1.0">
		<title>Példa</title>
		<style>
		</style>
	</head>
	<body>
		<div id="app">
			<button v-on:click="increment">Érték növelése</button>
			<p>A gomblenyomás száma: {{number}}</p>
			<p>Számolt érték: {{anothercounter}}</p>
		</div>
	</body>
	<script src="https://cdn.jsdelivr.net/npm/vue"></script>
	<script>
		new Vue({
			el: '#app',
			data: {
				number: 0
			},
			methods: {
				increment(){
					this.number++;
				},
				showalert(){
					alert(`A szám változó értéke az alábbira változott: ${this.number}`);
				}
			},
			computed: {
				anothercounter(){
					return this.number*this.number
				}
			},
			watch: {
				number(val){
					if(val){
						this.showalert()
					}
				}
			}
		});
	</script>
<html>
```
																																																																																																																																																																																																																																									 
<iframe height="300" style="width: 100%;" scrolling="no" title="4. Vuejs2 példa" src="//codepen.io/i-like-physix/embed/preview/KYJBZp/?height=300&theme-id=36889&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/i-like-physix/pen/KYJBZp/'>4. Vuejs2 példa</a> by I-like-PhysiX
  (<a href='https://codepen.io/i-like-physix'>@i-like-physix</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Az eddig tanultak alapján képesek vagyunk megjeleníteni adatokat a felhasználók számára. Az átláthatóség szempontjából nem tenne jót egy átlag felhasználónak (biztonsági okokból pedig az alkalmazás szolgáltatójának), ha az összes adatot a nyakába zúdítanánk egyetlen nézetre. Feltételekhez kötve definiálhatunk különböző nézeteket, ahol minden egyes nézet egy-egy külön fájlnak feleltetünk meg, melyeket szolgáltathatunk a felhasználók felé a szerverünk segítségével. Ez a megoldás rendkívül körülményessé vállhat (nem beszélve az adatforgalomról), ha például oylan alkalmazásról beszélünk, ami sok tucatnyi regisztrált felhasználót kiszolgáló alkalmazásról van szó. Egy másik megközelítés szerint ugyanazt az oldalt/fájlt szolgáltatva több különböző nézetet is meg tudunk jeleníteni attól függően, hogy az általunk definiált feltételek teljesültek-e, vagy sem. Néhány egyszerű példa keretén belül megmutatjuk, hogy a felhasználó térfelén a Vue.js segítségével a HTML elemek megjeleníthetőségét miképp köthetjük feltételekhez, kialakítva ezzel a különböző nézeteket. Az egyik példánk legyen az, hogy egy `<p></p>` és tartalmának megjelenítését kössük feltételhez. A direktívák erre a problémára is megoldást nyújtanak, méghozzá a `v-if` és `v-show`. Ezen direktívák egy feltételt definiáló kifejezést várnak a `=""` mentén, melyeknek valamilyen logikai értékkel kell visszatérniük. Amennyiben a feltétel teljesül, az adott HTML elem megjelenítődik az oldalunkon, egyébként nem. A két direktíva között annyi különbség van, amíg a v-if esetén az adott elem valóban megjelenik/eltűnik a DOM-ban, addig a v-show esetén az inline stílust megváltoztatva (style="display: none;") imitáljuk az elem eltűnését/előbukkanását. A v-if ághoz tartozhat egy `v-else` alapértelmezett ág is. Az egyetlen kitötés rá, hogy ugyanolyan típusú elemre lehet else ágat implementálni, amilyenre az if ágat. A lenti példában létrehoztunk egy Vue példányt condition változóval true értékkel inicializálva, egy change metódussal, melynek meghívása esetén (gombnyomásra reagálva) a condition változó értékét megváltoztatja. Van három paragrafus, az egyikre if ágat rakunk, a másikra else ágat, a harmadikra pedig a v-show direktívát. Próbáljuk ki és nézzük meg mi történik?

```html
<!--index.html-->
<!DOCTYPE html>
<html lang="hu">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width,initial-scale=1.0">
		<title>Példa</title>
		<style>
		</style>
	</head>
	<body>
		<div id="app">
			<button v-on:click="change">Láthatóság megváltoztatása</button>
			<p v-if="condition">Látható vagyok v-if segítségével</p>
			<p v-else>Látható vagyok v-else segítségével</p>
			<p v-show="condition">Látható vagyok v-show segítségével</p>
		</div>
	</body>
	<script src="https://cdn.jsdelivr.net/npm/vue"></script>
	<script>
		new Vue({
			el: '#app',
			data: {
				condition: true
			},
			methods: {
				change(){
					this.condition=!this.condition
				}
			}
		});
	</script>
<html>
```

<iframe height="300" style="width: 100%;" scrolling="no" title="5. Vuejs2 példa" src="//codepen.io/i-like-physix/embed/preview/QPYZjQ/?height=300&theme-id=36889&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/i-like-physix/pen/QPYZjQ/'>5. Vuejs2 példa</a> by I-like-PhysiX
  (<a href='https://codepen.io/i-like-physix'>@i-like-physix</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																					     

Tegyük fel, hogy van egy listányi adatunk melyet be szeretnénk tölteni a sablonba/DOM-ba, hogy a felhasználók tudomást szerezhessenek róla. Ebben az esetben a `v-for` direktíva nyújthat segítséget. Szintaxisa szerint egy olyan kifejezést vár, melyben az egyik része egy tömbre/objektumra mutató változó amin végi kell iterálni, a másik fele pedig a tömb/objektum aktuális elemét reprezentálja a `=""` mentén: `v-for="elem in tomb"`. A v-for-nak van egy opcionális argumentuma, ami az indexelést könnyíti meg. Amennyiben a tömb/objektum rendelkezik egyedi elemekkel, a Vue.js lehetőséget nyújt ezen elemek hatékonyabb nyomon követésére a `v-bind:key="elem.id"` direktívával. Tegyük fel, hogy egy tömbnyi számot szeretnénk megjelenítani, ezt követően pedig szeretnénk növekvő sorba rakni a tömb elemeit. Alapártelmezetten a Vue.js a beillesztés-alapú frissítés technikáját használja a nézet frissítéséhez ami annyit takar, hogy először sorba rendeződnek a számok, aztán az újrarendezett tömb teljes tartalmát (mint HTML elem) újra renderelődik és betöltődik a DOM-ba. A v-bind:key direktívát használva a tömb elemei számon vannak tartvaés kizárólag az érintett tömbelemek fognak újrarenderelődni, amivel számításigényes feladatok esetén rengeteg erőforrást takaríthatunk meg. A feladatunk legyen az, tartsunk nyilván egy listányi nevet és írassunk ki a felhasználó számára. Az adatstruktúra legyen egy tömb, melynek minden eleme egy-egy objektum, `id` és `nev` property-vel. Legyen az id property legyen az egyedi kulcsunk és kössük össze a v-bind:key direktívával. Próbáljuk ki és nézzük meg mi történik? 																																																																																																																																																																																																																														

```html
<!--index.html-->
<!DOCTYPE html>
<html lang="hu">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width,initial-scale=1.0">
		<title>Példa</title>
		<style>
		</style>
	</head>
	<body>
		<div id="app">
			<ul>
				<li 
					v-for="(elem, index)       in tomb"
					v-bind:key="elem.id"
					>index: {{index}}            id: {{elem.id}}
					nev: {{elem.nev}}
				</li>
			</ul>
		</div>
	</body>
	<script src="https://cdn.jsdelivr.net/npm/vue"></script>
	<script>
		new Vue({
			el: '#app',
			data: {
				tomb: [
					{id: 1, nev: 'Gábor'},
					{id: 2, nev: 'Zsolt'},
					{id: 3, nev: 'Nóra'},
				]
			},
			methods: {

			}
		});
	</script>
<html>
```

<iframe height="300" style="width: 100%;" scrolling="no" title="6. Vuejs példa" src="//codepen.io/i-like-physix/embed/preview/eoxQaW/?height=300&theme-id=36889&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/i-like-physix/pen/eoxQaW/'>6. Vuejs példa</a> by I-like-PhysiX
  (<a href='https://codepen.io/i-like-physix'>@i-like-physix</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

A `komponens` a Vue.js keretrendszer egyik kulcsfontosságú koncepciója ami megadja azt a lehetőséget, hogy a kódunkat egyrészt funkcionalitás szerint csoportosíthatjuk, másrészt újrafelhasználhatjuk (rengeteg sornyi kódot megspórolva). Nem szükséges magunknak újraírni teljes komponenseket ha találunk az interneten való böngészés során funkcionalitásban hasonló komponenseket, elegendő azokat módosítani. Úgy képzelhetjül el őket, mint a LEGO kockák: egymással összeilleszthetjük őket és bármit építhetünk belőle. Az alkalmazásban egy-egy nézet eltérő helyet foglal el a képernyőn. Amikor egy alkalmazás sok, de kis helyet elfoglaló nézetet tartalmaz, szokás egymásba ágyazni őket. A Vue.js keretrendszerben egy úgy valósítható meg, hogy a komponenseket egyszerűen egymásban meghivatkozzuk. Kétféle megközelítés ismert: az összes komponens deklarálása a main.js fájlban, továbbá minden egyes komponens implementálása külön fájlokként. Mind a két megközelítést tárgyalni fogjuk, egyenlőre fókuszáljunk az elsőre. Tegyük fel, hogy egy-egy funkcionalitást egy-egy komponens segítségével szeretnénk megvalósítani. A funkciók eléréséhez az egyes komponenst regisztrálni és végrehajtani kell a main.js fájlban. A komponenseket regisztrálhatjuk globálisan és lokálisan. Ebben az esetben tegyük globálisan elérhetővé a komponenseket a `Vue.component(nev,beallitasok)` metódus meghívásával. Globálisan regisztrált komponenst bármely másik komponensben meghívható, ugyanazon Vue osztály példányán belül. Az első paraméter a komponens neve, amilyen név szerint szeretnénk regisztrálni. A második paraméter  egy objektumot vár, amiben a komponenst definiáljuk. Minden egyes komponens tartalmaz egy `template` property-t, amiben a nézetünk felépítését definiálhatjuk. Ebben az esetben használjuk a string literál deklarálási formát. A <template></template> egészen pontosan egyetlen gyökér elemet tartalmazhat. Ha több HTML elemből építettük fel a nézetet, akkor szúrjuk be őket egy `<div></div>`. A nézeten belül a következőképpen hívhatunk meg egy tetszőleges komponenst: `<komponens_neve ></komponens_neve >`, ahol `komponens_neve` a komponens regisztrált neve. A Vue példányunkhoz hasonlóan itt is értelmezve van a `data` property. Azonban a data itt egy függvény, ami egy objektummal tér vissza. Ha a data property egy objektumot tartalmazna, akkor minden egyes komponens ugyanazon az adatokon fog osztozni, tehát az újrafelhasználhatóság koncepcióját dobhatnánk a kukába, nem használhatjuk sablonként. Ehelyett visszatérünk egy objektummal a data függvény segítségével, így minden adat egyedi lesz, ahányszor hívjuk meg a kérdéses komponenst. Definíció szerint azt a komponenst, amibe ágyazunk egy másikat `szülő komponensnek` nevezzük, amit beleágyaztunk pedig `gyerek` komponensnek hívjuk. Az egyes komponensek közötti relációt fa struktúrában szokás ábrázolni.

![COMPONENT_TREE](./jegyzet/JAVASCRIPT/COMPONENT_TREE.jpg)
<figcaption style="text-align: center; font: italic bold 12px/30px Georgia, serif;">11. ábra, komponens fa struktúra</figcaption> 

Mi a helyzet akkor, amikor az egymásba ágyazott komponensek között adatokat szeretnénk cserélni. Minden egyes komponens természetétől adódóan a hatóköre nem nyúlik ki saját magán túlra.  Az akadály áthidalására találták ki a `props` property-t. A Prop property egy objektumot vár, melynek elemei olyan property-k, melyek csatornaként funkcionláva megoszthatunk adatokat egymással szomszédos kapcsolatban álló komponens között. Minden változó vár egy objektumot, amiben többek között konfigurálhatjuk az átadott értékek típusát, az alapértelmezett értéket, és így tovább. A szülő komponensből kiindulva adatokat dinamikusan a gyerek komponens számára úgy tudunk elküldeni, hogy a v-bind direktíva segítségével összekötjük a Props-ban definiált változót (mint attribútum) a szülőben definiált változóval, ami valamilyen értékre mutat: `v-bind:gyerek_prop="szulo_valtozo"`. A létrehozott kommunikációs csatorna akkor válik teljessé, ha a másik irányba is történet adatcsere, azaz gyerek -> szülő. Mi a helyzet akkor, amikor egy szülő objektumot szeretnénk értesíteni egy a gyerek komponensben bekövetkezett eseményről? Ezt úgy tudjuk megvalósítani, hogy egy esemény objektumot küldünk el. Egy ilyen objektumot magunk nevezhetünk el és opcionálisan adatot is beilleszthetünk be objektum formájában. Vegyük az alábbi példát. Egy gyerek komponens tartalmaz egy bemeneti mezőt és egy metódust, amik össze vannak kötve. Akárhányszor bepötyögünk valamit a bemeneti mezőbe, mindig meghívjuk az összekötött metódust és átadjuk neki az esemény objektumot. A metódus deklarációjánál az argumentumban értelmezve van egy ’kifejezés’, ami az esemény objektumot takarja, az elnevezés tetszőleges. Ennek az objektumnak értelmezve van a target attribútum, ami az esemény forrását azonosítja be. Ahhoz, hogy effektíve megkaphassuk a forrástól származó adatokat, a value metódust használjuk. Ezt követően a `this.$emit(’esemeny_neve’, event.target.value)` segítségével megvalósíthatjuk az adatok továbbküldését, ahol ’esemeny_neve az esemény neve, amire a túloldalt számíthatunk. Ahhoz, hogy a túloldalt (a szülő komponens) foghassa a vételt, a gyerek komponenst reprezentáló elemnél használhatjuk az események figyelésére kitalált v-on direktívát és az argumentumába adjuk át annak az események a nevét, amelyre kíváncsiak vagyunk. A `=””` mentén pedig definiálhatunk egy kifejezést, aminek átadhatjuk a kapott esemény objektumot. Ebben az esetben legyen ez egy metódus, ami a szülő komponensben van deklarálva. A gyerek komponenshez hasonlóan lekérjük a kívánt adatokat, amit aztán arra használhatunk fel, amire akarjuk: `v-on:esemeny_neve=”szulo_metodus”`. Ezzel sikeresen megvalósítotttunk két, egymásba ágyazott komponens közti kétirányú kommunikációt. 

![SZULO-GYEREK_ADATCSERE](./jegyzet/JAVASCRIPT/SZULO-GYEREK_ADATCSERE.jpg)
<figcaption style="text-align: center; font: italic bold 12px/30px Georgia, serif;">12. ábra, szülő-gyerek adatcsere</figcaption> 

Az eddigi ismereteink szerint a beviteli mezők és a bevitt értékeket tároló változók közti kommunikáció egyirányú, az előző példában a kétirányúságot két különböző kommunikációs forma ötvözéséből hoztuk össze. Sok esetben azonban rendkívül hasznos lenne egy ilyen kommunikációs forma egyrészt a könnyű implementálás, másrészt az áttekinthetőség szempontjából. Az igények nem találtak süket fülekre, meg is alkották az erre szakosodott direktívát: ` v-model `. Szintaxisa szerint a `=””` mentén egy változót vár, amin keresztül történhet a kétirányú kommunikáció. Ez a megoldás ekvivalens azzal, amikor egy bemeneti mezőt összekötünk egy változóval v-bind:value és v-bind:input direktívákkal. Próbáljuk ki a lenti példákat és nézzük meg mi történik.  

```js
<input
  v-bind:value="valtozo"
  v-on:input="valtozo = $event.target.value"
>

<input
  v-bind:value="valtozo"
  v-on:input="valtozo = $event.target.value"
>
```

```html
<!--index.html-->
<!DOCTYPE html>
<html lang="hu">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width,initial-scale=1.0">
		<title>Példa</title>
		<style>
		</style>
	</head>
	<body>
		<div id="app">
			<p>Szülő komponens</p>A gyerek komponens felé:
			<input type="text" 
				v-on:input="updatevariable"> 
				&nbsp; {{variable}}
			<p>A gyerek komponenstől: {{anothervariable}}</p>
			Kétirányú adatátvitel bemeneti mező 1:
			<input type="text" v-model="twowaydata">
			<br>
			<br>
			Kétirányú adatátvitel bemeneti mező  2:
			<input type="text" v-model="twowaydata">
			<hr>
			<component_name 
				v-bind:childprop="variable" 
				v-on:childevent="updateanothervariable">
			</component_name>
		</div>
	</body>
	<script src="https://cdn.jsdelivr.net/npm/vue"></script>
	<script>
		Vue.component('component_name',{
			props: {
			childprop: {
				required: true,
				type: String,
				default: ""
			}
			},
			template: `<div>
							<p>Gyerek komponens</p>
							<p>A szülő komponenstől: {{childprop}}<p>
							<p>A gyerek komponens felé: 
								<input type="text" 
									v-on:input="updateothervariable">
									&nbsp;
									{{othervariable}}                 
							</p>
                       </div>`,
			data: function(){
				return {
					othervariable: ''
				}   
			},
			methods: {
				updateothervariable(event){
					this.othervariable=event.target.value
					this.$emit('childevent', event.target.value)
				}
			}
		});

		new Vue({
			el: '#app',
				data: {
					variable: "",
					anothervariable: "",
					twowaydata: ""
				},
				methods: {
					updatevariable(event){
						this.variable=event.target.value
					},
					updateanothervariable(value){
						this.anothervariable=value
					}
				}
		});
	</script>
<html>
```

<iframe height="300" style="width: 100%;" scrolling="no" title="7. Vuejs2 példa" src="//codepen.io/i-like-physix/embed/preview/WWmeKK/?height=300&theme-id=36889&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/i-like-physix/pen/WWmeKK/'>7. Vuejs2 példa</a> by I-like-PhysiX
  (<a href='https://codepen.io/i-like-physix'>@i-like-physix</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

																																																																																																																																																								
A `Vue CLI` (`C`ommand `L`ine `I`nterface) egy parancssor alapú interfész, melyen keresztül menedzsenletjük a Vuejs környezetben történő fejlesztéseket. Lehetőséget ad a projektek és különböző könyvtárak menedzselésére. Amikor élesre állítjuk az alkalmazásunkat, az összes JavaScript fájlunkat, a CSS stílus fájlokat és az importált könyvtárakat a `Webpack` egybecsomagolja és optimalizálja számunkra a megfelelő működés érdekében. Továbbá a projektek megvalósításának metodikájának sem szab határt, ugyanazt a projektet meg tudjuk csinálni `vue komponensek`, `TypeScript`, `SCSS`, `Pug`, a legfrissebb verziójú `ECMAScript`, stb. `Fejlesztői üzemmódban` akárhányszor végzünk mentést, a változtatások azonnal lefordítódnak és megjelennek a képernyőnkön. Hogy is működik? Egyenlőre szorítkozzunk a jelenlegi legfrissebb verziójával (3.x.). Egy projekt létrejozásán keresztül bemutatjuk a tényleges működését. Az első lépésként feltelepítjük a Vue CLI legfrissebb változatát. A telepítés minimum követelménye a `Node.js 8.9-es verziója` és az `npm`. A feltelepítés után a `vue create` paranccsal új projektet kezdhetünk. Ezt követően választhatunk a gyors (előre konfigurált) és lassú (minden egyes (általunk vagy mások által írt) bővítményt magunk választhatunk ki) létrehozás között. A saját konfigurácionkat mi magunk is elmenthetjük, hogy később újra felhasználhassuk (mint template). Akármelyik lehetőséget választottuk, máris megkezdődhet a fejlesztés és véglegesítés. Ha szükségét látjuk, a projektünk funkcionalitásának tárházát kiegészíthetjük utólag is általunk, vagy mások által készített bővítményekkel. Végül indítsuk el az alkalmazást fejlesztői módban az `npm run serve` paranccsal.

![VUECLI](./jegyzet/JAVASCRIPT/VUECLI.jpg)
<figcaption style="text-align: center; font: italic bold 12px/30px Georgia, serif;">13. ábra, Vue-CLI</figcaption>

<Telepites1></Telepites1>

<br>

Nézzünk rá az újonnan telepített projektünk könyvtár struktúrájára:

```
> dist  //  az éles üzemmódhoz lefordított html, javascript és css fájlok
> node modules //  az összes telepített könyvtár ebben a mappában helyezkedik el
> public //  az összes olyan fájl, amit a webpack nem dolgoz fel, ebben a mappában helyezkedik el
> src //  az alkalmazás forráskódja ebben a mappában helyezkedik el
	|_ 
		> assets //  az alkalmazással kapcsolatos képek, stíluselemek, stb ebben a mappában helyezkednek el
		> components //  a forráskódhoz tartozó komponensek ebben a mappában helyezkednek el
		> plugins  //  a forráskódhoz tartozó bővítmények ebben a mappában helyekzednek el 
		> views //  több oldalas applikáció esetén a különálló oldalak/nézetek ebben a mappában helyezkednek el        
		App.vue  //  A forráskód gyökér komponense, ami összeköti a többi különálló komponenst
		main.js  //  a fájl, ami "lerendeli" az alkalmazást és betölti a DOM-ba
		router.js  //  single page application esetén a különálló oldalak/nézetek (mint komponensek) regisztrálásáért és váltásáért felel
		store.js  //  a vuex technológia egyik fontos eleme, ahol definiálni és szinkronizálni lehet olyan változókat, melyek értékeit az összes regisztrált komponens között szabadon meg lehet osztani
.gitignore  //  olyan fájl, amiben definiálhatunk egy listát, melyeket nem szeretnénk ha felkerülnének a repozatórumunk színpadára
package.json  //  olyan fájl, amiben fel van jegyezve minden fontos információ ami a projektünkkel kapcsolatos (projekt neve, verziója, leírása, tesztelői és éles üzemmóddal kapcsolatos parancsok definiálása, kulcsszavak, szerző, licensz, repozatórium neve, a telepített könyvtárak neve és verziószáma)
package.lock.json
babel.config.js
```

Nézzünk meg, hogy az alkalmazás hogyan is töltődik be. Elsőként azt láthatjuk, hogy a szükséges "dolgokat" beimportáljuk. Ezt követően a Vue-t lepéldányosítjuk (mint osztályt), az argumentumába belekerülnek az importált "dolgok" és megmondjuk a Vue-nak, hogy renderelje le az alkalmazást és töltse be a DOM-ba konkrétan (alapértelmezetten) a `./public/index.html` fájlban a `<div id="app"></div>` -be. Az alatta megfogalmazott <!-- built files will be auto injected --> komment szövege annyit takar, hogy éles üzemmódban (`npm run build`) a webpack összecsomagolja az összes fejlesztő üzemmódban kódolt utasítást. Az így kapott HTML fájlokat bármelyik böngészőben megnyitva azt láthatjuk, hogy már nem helyi hálózatról "szolgáltatjuk". 

Gondolom már felmerült bennetek, hogy mik is lehetnek ezek a fura `.vue` kiterjesztésű fájlok az `src` mappában? Nyissunk meg egyet egy kódszerkesztővel és vizsgáljuk meg a felépítését. Azt láthatjuk, hogy három részre tagolódik az implementált kód: `<template></template>`, `<script></script>` és `<style></style>`. A színfalak mögött a webpack átalakítja ezen a szekciókat JavaScript kóddá, majd exportálja. Az előző példára építkezve bővítsük ki a projektünket komponensek létrehozásával úgy, hogy mindegy komponens egy-egy nézetet valósítson meg és minden egyes nézetet útvonalakkal érjük el. Ezeket a projekt gyökérkönyvtárában található main.js fájlba kell importálni és regisztrálni (globálisan) a `Vue.component()` metódus segítségével. Az általunk (vagy mások által) definiált `komponenseket` a következőképpen hívhatjuk meg: `<komponens_neve></komponens_neve>`, ahol `komponens_neve` a komponens neve, amivel regisztráltuk. Ebben az esetben az útvonalak kezelését és a nézetek lerendelését nem a szerver intézi, csak a bejövő kéréseket igyekszik teljesíteni és az alkalmazást reprezentáló `index.html` fájlt szolgáltatni.

Első lépésként telepítsük fel a `vue-router` könyvtárat, majd importáljuk be a main.js fájlba. Deklaráljunk egy tömbnyi objektumot, ahol egy-egy objektum (`path` property-vel) egy-egy útvonalat reprezentáljon. Az útvonalak alatt az URL DOMAIN utáni részét kell érteni. Ezt követően társítsuk össze a komponenseket az útvonalakkal. Példányosítsuk le a Vuerouter osztályt. A konstruktora vár egy objektumot routes property-vel. Adjuk át neki a korábban deklarált útvonalak listáját tartalmazó tömböt. Végezerül adjuk át paraméterként a Vue osztály lepéldányosított verziója számára. A soron következő feladatunk az egyes oldalak megjenenítése egy általunk kiválasztott (keretként funkcionáló) oldalon. Ezt az oldalt ezesetben azonosítsuk az App.vue fájllal és a template-ben deklaráljuk az alábbiakat: `<router-view></router-view>`. A felhasználói élményt növelve az App.vue template felső részére (fejléc) helyezzünk két linket (`<router-link></router-link>`) és mindegyik link vezessen egy létező nézetre. A `<router-link></router-link>` elem `to` attribútumának adjuk át az útvonalat a `=’/ez_az _utvonal’` mentén. Amennyiben az útvonal dinamikusan változna, a v-bind direktíva segítségével összeköthetjük a megfelelő változóval a következő módon: `v-bind:to="utvonal"`, ahol az `utvonal` az útvonal értélére mutató változó. A vue-router megadja a lehetőséget arra, hogy egy változó értékét szúrhassunk be az URL címbe, ezáltal tetszés szerinti nézeteket tudunk kialakítani dinamikusan. Ezen felül akár adatokat is tudunk küldözgetni az egyes komponensek között pusztán azzal, hogy a `$route.params`-ba beillesztjük és kiolvassuk a kívánt adatokat. Eddig minden szép és jó, viszont hogyan oldhatnánk meg azt, hogy az alkalmazásunk kezébe adjuk a nézetek betöltésénekirányítását? Erre találták ki a `router.push()` metódust. Minden egyes végrehajtás alkalmával az argumentumába átadott statikus, vagy dinamikus útvonal (mint érték) belekerül a `böngészés előzmény verembe`. Tehát ha a böngészőnkben az előző nézetet szeretnénk megtekinteni, a bal felső sarkában a `Vissza` nyílra kattintva betölthetjük. Az URL beviteli mezőben azt láthatjuk, hogy az URL címet kétfelé választja a # jel. A # előtti részét az alkalmazásnak a szerver kezeli, a másik felét pedig a böngésző rendereli le. Próbáljuk ki a példát és nézzük meg mi történik?

<Telepites1></Telepites1>

<br>
<br>

<Codesandbox1></Codesandbox1>

## Node.js

### Node.js alapok

`NodeJs` egy olyan futtató környezet, ami lehetőséget nyújt JavaScriptben írt programook futtatására szervereken. JavaScriptet leginkább a kliens oldalon szokták használni, a böngészőn keresztül. Ahhoz, hogy megértsük miképp futatthatunk JavaScript kódot szerveren, először nézzük meg, miképp valósul meg ugyanez a böngészőn keresztül. A böngésző applikáció fejlesztők számára olyan motorokat kell biztosítani (a Google Chrome esetén a `v8 engine`), amik a JavaScript kódot gépi nyelvként interpretálják és le is futtatják. Alapvetően a NodeJs is ugyanazt a v8 engine-t használja, némi módosítással. Most felmerülhet bennünk az a kérdés, hogy miben jobb, mint a `Ruby`, `PHP`, `asp.net`, ... ? Nyilvánvalóan ez csak az adott szituációtól függ, ezért egyes esetekben hátrány lehet NodeJs-t használni. Annyi könnyebséget nyújt, ha már dolgoztunk `frontend` oldalon, nem kell egy teljesen új nyelvet megtanulni ahhoz, hogy a `backend`-et is implementáljuk. A másik előnye az, hogy a non-blocking természetéből adódóan alkalmas egyszerre több ezer bejövő 'egyszerű' kérés kezelésére. Ezzel szemben egyetlen számításigényes utasítássorozat végrehajtására nem tűnik éppen ideális választásnak. Egy példa keretén belül létrehozunk és futattunk egy egyszerű szervert NodeJs használatával. A későbbiekben még lesz szó a szerverekről. Első lépésként a https://nodejs.org weboldalról töltsük le a számunkra megfelelő verziót és telepítsük a számítógépünkre. Egy parancssort megnyitva a `node -v` parancsot lefuttatva lekérdezhetjük a NodeJs aktuálisan telepített verzióját. Egy tetszőleges útvonalon (`projekt_neve` mappa) futtassuk le a parancssoron az `npm init` parancsot és kövessük végig a projekt létrehozásának menetét:             

<Telepites2></Telepites2>

A következő lépésként importáljuk be a `http modult` és adjuk értékül a `http változónak`. Hozzuk létre a `kerest_vegrehajto` függvényt, melynek argumentuma két paramétert várjon: `request` és `response`. Tulajdonképpen egy kérést (request, mint objektum) kezelnénk le, ami a böngészőtől várnánk. A választ (response, mint objektum) a `kerest_vegrehajto` függvény végrehajtásakor küldünk el. Tegyük fel, hogy hiba nem fordulhat elő, azaz egyenlőre koncentráljunk a válasz siker ágának  implementálására. Egy ilyen válasz objektum többek között áll egy fej és egy törzs részből. A fej részében definiálhatjuk a válaszunk természetét (hibakód, formátum, stb...). A törzs szekcióban pedig a tényleges választ deklarálhatjuk. Amennyiben készen állunk a válasz definiálásával, az end() metódust meghívva elküldhetjük azt. Legyen az üzenet jellege szöveges és maga az üzenet legyen az, hogy `Válasz a szervertől`. A http objektum createServer metódusát hívjuk meg és az argumentumába adjuk át a kerest_vegrehajto függvényt. Állítsuk be azt, hogy a `3000`-es porton fusson a szerver. Visszatérve a parancssorhoz, futtassuk le a `node server.js` parancs segítségével a szerverünket. Nyissük meg egy böngészőt és írjuk a keresőbe azt, hogy ˙http://localhost:8080˙ és várjunk az eredményre. Leállítani a `ctrl + c` billentyűkombinációval tehetjük meg.

```js
//  server.js

var http = require("http");

const port = 3000

function kerest_vegrehajto(request, response) {
  response.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" })
  response.write("Válasz a szervertől")
  response.end()
}

http.createServer(kerest_vegrehajto).listen(port)
```

<br>
<br>

<Codesandbox2></Codesandbox2>

### Modulok

A `modulok` az egyik legnagyszerűbb és leghasználhatóbb dolgok egyike, mely az `ES6` bevezetésével válhatott elérhetővé minden JavaScript programozó számára, hogy a kódunkat hosszútávon átláthatóbbá és karbantarthatóbbá tehessük. A modulok célja az, hogy az egyes különálló futattható fájlokban ne kelljen ugyanazon kívánt funkciók eléréséhez újra deklarálni ugyanazt az utasítás sorozatot, hanem megegyezés szerint egy fájlban deklaráljuk az adott funkciót és mégis hozzáférhetőek legyenek más fájlok számára pusztán a megfelelő kulcsszavak (`export` és/vagy `import`) használatával. Ez megadja azt a lehetőséget, hogy a teljes kódunkat különálló fájlokba csoportosítsuk, hogy a későbbiekben az esetleges változtatásokat könnyebben implementálhassuk. A koncepció megértéséhez vizsgáljuk meg a lenti példát! Definiálva van egy `Felhasznalo` osztály az `innenexportalunk.js` fájlban, `nev` és `eletkor` tulajdonságokkal Ezen felül a `nevkiir` és az `eletkorkiir` függvények. A célunk az, hogy exportáljuk a `felhasznalo` osztályt az `innenimportalunk.js` fájlba. Ezt kétféleképpen tehetjük meg: `export default` vagy `export`. Szintaxisa szerint az első megvalósítási lehetőség úgy néz ki, hogy használjuk a felhasznalo osztály deklarációja elé az export default kulcsszót (alapértelmezetten csak egy dolgot lehet exportálni egy fájlból, legyen ez az osztály), a függvények deklarációja elé pedig az export kulcsszót. Egy másik megközelítése a dolgok exportálásánal a `module.exports` kulcsszó használatán alapszik. Objektumot deklaráljunk literálként `uzenet` névvel, hozzunk létre neki tulajdonságot `szoveg` névvel és adjuk át neki a `"Az exportálás sikeresen megtörtént!"` stringet. Ezt az objektumot úgy exportálhatjuk, hogy értékül adjuk a module.exports-nak. Az innenimportalunk.js fájlban úgy tehetjük elérhetővé az előzőleg alapértelmezetten kiexportált osztályt, hogy az `import` kulcsszó után írjuk az osztály elnevezését (Felhasznalo), azt követően a `from` kulcsszót és végül az importálás (relatív) útvonalát `''`-be foglalva. Végezetül lepéldányosítjuk az osztályt (mint `mint felhasznalo nevezetű objektum`) `Péter` névvel és `19` életkorral. Az exportált és importált osztálynévnek nem kell feltétlenül megegyeznie, viszont egy fájlon belül konvenció szerint azonos legyen az importálási név. Ez vonatkozik a példányosításra is. A nem alapértelmezetten exportált dolgok importálásához `{}`-ba foglalva meghívhatjuk őket a nevüket beleírva. Ha más néven szeretnénk meghívni, mellé írjuk az `as` `alias` kulcsszavakat, ahol az alias a tetszés szerinti elnevezés. A module.exports-szerint exportált objektumot a `require()` kulcsszó használatával tehetjük meg. Az argumentumába írjuk a fájl relatív útvonalát `''` közé végül az importált értéket (mint objektum) az `eztkapjuk` nevű változóba.  

```js
//  innenexportalunk.js

export default class Felhasznalo {
	constructor(nev, eletkor){
		this.nev = nev
		this.eletkor = ev
	}
}

export function nevkiir(felhasznalo){
	console.log(`A felhasználó neve: ${felhasznalo.nev}`)
}

export function eletkorkiir(felhasznalo){
	console.log(`A felhasználó életkora: ${felhasznalo.eletkor}`)
}

let uzenet = {}

uzenet.szoveg = "Az exportálás sikeresen megtörtént!"

module.exports = uzenet

//  innenimportalunk.js

import Felhasznalo, {nevkiir, eletkorkiir} from './innenexportalunk.js'

const eztkapjuk = require('./innenexportalunk.js')

function uzenetkiir() {
  console.log(eztkapjuk.uzenet)
}

uzenetkiir()  //  Az exportálás sikeresen megtörtént!

const felhasznalo = new Felhasznalo('Péter', 19)

console.log(felhasznalo)
nevkiir(felhasznalo)  //  A felhasználó neve: Péter
eletkorkiir(felhasznalo)  //  A felhasználó életkora: 19   
```           

### NPM

Az `NPM` a `N`ode `P`ackage `M`anager szavak rövidítése, ami elsősorban egy online platformot takar (https://npmjs.com), másrészt egy parancssoron elérhető szolgáltatást. Az elsőt arra lehet használni, hogy JavaScript nyelven írt eszközödet/könyváradat megoszthasd teljesen ingyen másokkal. A kereső feltületén keresztül a megfelelő kulcsszavakat megadva kidob egy a keresés feltételeinek megfelelő találati listát azokból a könyvtárakból, amiket mások, vagy te magad már feltöltöttél. Mivel JavaScriptben íródtak, nagy a valószínűsége, hogy mind szerveren, a parancssoron, vagy akár a böngészőn le tudnak futni. Az NPM parancssori változata egyfajta kiegészítője az online grafikus felületnek. Telepítésének előfeltétele a NodeJs (valamelyik verziója). Magát a telepítést az `npm install npm` paranccsal tehető meg. Többek között arra használják, hogy telepíthessünk vagy törölhessünk könyvárakat. A telepítés során megszabhatjuk, hogy melyik verziót szeretnénk telepíteni, ha el szeretnénk kerülni a későbbiekben az inkompatibilitást. A telepített könyvtárak neveit és vcerziójukat nyilván tarthatjuk az úgynevezett `package.json` fájlban, amit mi magunk is létrehozhatunk, vagy egy template projekt közben automatikusan legenerálódik. Az `npm install` paranccsal a package.JSON által nyilván tartott összes könyvtár feltelepül a `node_modules` könyvtárban. Egy könyvár gyakran sok más könyvtár előfeltétele viszont emiatt nem kell aggódni, az NPM elvégzi a számunkra a piszkos munkát azzal, hogy megkeresi és telepíti az összes szükséges könyvtárat.   

### Nodemon

Amikor az éppen futó kódunkon végzünk el változtatásokat, a mentést követően nem lépnek érvénybe ezen változtatások. Minden egyes alkalommal újra kell indítani a teljes programot. Komplexebb applikációk esetén már egy csomó időt elvesz a fejlesztőktől. A probléma megoldására alkották meg a `Nodemon` könyvtárat. Visszatérve a projekt_neve mappához, egészítsük ki a fejlesztői környezetünket a könyvtár feltelepítésével az `npm install -g nodemon` paranccsal. A telepítés ezúttal globális lesz ami azt jelenti, hogy minden egyes projektnél elérhető lesz ez a funkció akár telepítve volt előtte lokálisan, akár nem. A telepítés után indítsuk újra a szervert ezúttal a `nodemon server.js` paranccsal. Eszközöljünk rajta némi változtatést a szerveren, mentsük el és nézzük meg mi történik! 

<Telepites3></Telepites3>

### FS

A `FileSystem`, röviden FS a NodeJs olyan beépített modulja, melynek segítségével különböző fájlműveletek hajthatóak végre. A modul minden egyes metódusának deklarálva van a szinkron és aszinkron változata. Az aszinkron változat egy függvény paraméterrel többet vár, aminek van a hiba és a teljesített ága. Az aszinkron verzió implementálást gyakrabban használják, ugyanis addig nem tartóztatja fel a többi utasítás lefutását (`non-blocking`), szemben a szinkron verzióval. A két leggyakrabban használt fájlművelet az írás (`write`) és olvasás (`read`). A fájl beolvasásnál opcionálisan beállíthatjuk a karakter kódolást. A magyar ékezetek értelmezéséhez `utf8`-at állítsunk be. A két fájlművelet használalát bemutatjuk példákon keresztül, mind szinkron, mind aszinkron formájában.

```
Ezt a szöveget kell beolvasni!
```  

```js
var fs = require('fs')

// fájlból olvasás szinkron megvalósítása

var beolvasott_szoveg = fs.readFileSync('szoveg.txt','utf8')
console.log(beolvasott szoveg);  //  Ezt a szöveget kell beolvasni.

// fájlba írás szinkron megvalósítása

fs.writeFileSync("masikszoveg.txt", "Ezt a másik szoveget kell másik fájlba kiírni!")

//  fájlból olvasás aszinkron megvalósítás

fs.readFile('szoveg.txt', ,'utf8', function (error, data) {
  if (error){
	console.log(error)
  } else {
	console.log(data)  //  Ezt a szöveget kell beolvasni.
  }
});

//  fájlba írás aszinkron megvalósítás

fs.writeFile('masikszoveg.txt', "Ezt a másik szoveget kell másik fájlba kiírni!", function(error) {
  if (err){
	console.log(error)
  } else {
	console.log("A fájlba írás sikeresen megtörtént")
  }
});
```

## Express.js

### Webszerverek és típusaik

A `webszerverek` tulajdonképpen számítógépek, melyeket összekötve `adatközpontot` képeznek, melyeket szolgáltató cégek üzemeltetnek. Ezen számítógépek egyik célja a weboldalak (mint fájlok) tárolása és szolgáltatása akár több ezer végfelhasználók részére. Az, hogy egyszerre hány kérést tud kielégíteni, szoftveres beállítások és hardver konfiguráció (processzor, memória, router, stb) függvénye. A végfelhasználói oldalon a böngészők (például Google Chrome, Opera, Firefox) kapcsolatot tartanak fenn a szerverek között, a kettő oldal között pedig adatcsere zajlik. Ezeket a weboldalakat a böngészők dolgozzák fel és jelenítik meg. Egy átlagos webszerveren az alábbi operációs rendszerek közül az egyiket futtatják: Linux vagy Windows. Arányaiban véve Több webszerveren futattnak Linuxot, mint Windows-t. Csak hogy teljesen összezavarjuk a kedves olvasókat, ezen számítógépeken futó szoftverek összeségét is szervereknek hívjuk. Nem lenne jó, ha bárki hozzá tudna férni a webszervereken tárolt adatokhoz, ezért felhasználói jogosultságokat szokás definiálni, melyeknek különböző szintjei vannak. Az egyes tartalmakhoz való hozzáférést jelszavas védelemmel is szokták korlátozni. Ezen számítógépekre feltelepített és a háttérben futtatott szoftverek határozzák meg a funkcionalitásukat. Eszerint megkülönböztetünk:

- `HTTP szerver`- weboldalakat szolgáltat (HTTP protokoll segítségével)

- `FTP szerver` - fájlokat tölthetünk fel és le (FTP protokoll segítségével)

- `Email szerver` - továbbítja és tárolja az email üzeneteket

- `Adatbázis szerver` - az adott weboldallal kapcsolatban (például webshop) egy előre meghatározott struktúrában tárolja és szolgáltatja az adatokat (például felhasználói profil és vásárolt termékek)

Ha az adott tartalom időben nem változik, akkor statikus tartalomról beszélünk, viszont ha a tartalom egy bejövő kérés következtében jön létre / változik meg, akkor pedig dinamikus tartalomról beszélhetünk. A dinamikus tartalom generálás nemcsak a felhasználói oldalon történhet, hanem a szerver oldalon is. A koncepció megvalósításához és fenntartásához az alábbi programozási környezeteket szokták használni: `Node.js`, `PHP`, `Python`. A funkcionalitások hatékony implementálására találták ki a keretrendszereket. A keretrendszereket használva (például `Express.js`, `Laravel`. `Django`) egyrészt nem kell mindent magadtól kitalálni (koncentrálni lehet az üzleti logikára), másrészt a használatával jóval kisebb támadási felületet adhatunk a programunknak.

Egy példa keretén belül létrehozunk és futattunk egy egyszerű szervert NodeJs használatával. Első lépésként a https://nodejs.org weboldalról töltsük le a számunkra megfelelő verziót és telepítsük a számítógépünkre. Egy parancssort megnyitva a node -v parancsot lefuttatva lekérdezhetjük a NodeJs aktuálisan telepített verzióját. Egy tetszőleges útvonalon (projekt_neve mappa) futtassuk le a parancssoron az npm init parancsot és kövessük végig a projekt létrehozásának menetét:

<Telepites2></Telepites2>

A következő lépésként importáljuk be a `http modult` és adjuk értékül a `http változónak`. Hozzuk létre a `kerest_vegrehajto` függvényt, melynek argumentuma két paramétert várjon: `request` és `response`. Tulajdonképpen egy kérést (request, mint objektum) kezelnénk le, ami a böngészőtől várnánk. A választ (response, mint objektum) a `kerest_vegrehajto` függvény végrehajtásakor küldünk el. Tegyük fel, hogy hiba nem fordulhat elő, azaz egyenlőre koncentráljunk a válasz siker ágának  implementálására. Egy ilyen válasz objektum többek között áll egy fej és egy törzs részből. A fej részében definiálhatjuk a válaszunk természetét (hibakód, formátum, stb...). A törzs szekcióban pedig a tényleges választ deklarálhatjuk. Amennyiben készen állunk a válasz definiálásával, az end() metódust meghívva elküldhetjük azt. Legyen az üzenet jellege szöveges és maga az üzenet legyen az, hogy `Válasz a szervertől`. A http objektum createServer metódusát hívjuk meg és az argumentumába adjuk át a kerest_vegrehajto függvényt. Állítsuk be azt, hogy a `3000`-es porton fusson a szerver. Visszatérve a parancssorhoz, futtassuk le a `node server.js` parancs segítségével a szerverünket. Nyissük meg egy böngészőt és írjuk a keresőbe azt, hogy ˙http://localhost:8080˙ és várjunk az eredményre. Leállítani a `ctrl + c` billentyűkombinációval tehetjük meg.

```js
//  server.js

var http = require("http")

const port = 3000

function kerest_vegrehajto(request, response) {
  response.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" })
  response.write("Válasz a szervertől")
  response.end()
}

http.createServer(kerest_vegrehajto).listen(port)
```

<br>
<br>
<Codesandbox10></Codesandbox10>

### Express.js alapok

Tisztán NodeJs-t használva mindent magunknak kell megoldanunk. Ez nem csak hogy idegesítő, hanem potenciális hibaforrás, továbbá bizonyos szempontból biztonsági kockázatot is jelent. Az ismétlődő feladatok helyett inkább az üzleti logikára kellene fókuszálni amennyiben a hatékony munkavégzés a célunk. Ahogy a projektünk növekszik, egyre komplexebbé, nehezen kezelhetővé válik. Ebből az okból kifolyólag használunk olyan keretrendszereket, mint az `Express`. Az Express alapvetően NodeJs-re épül és számos eszközzel eszközzel lát el minket, melyek jelentősen lerövidíthetik a fejlesztési időt.     

```js
//  server.js
const express = require('express')
const app = express()
const port = 3000
app.get('/', (req, res) => res.send('Ez az üzenet a szervertől érkezett!'))
app.listen(port, () => console.log(`A szerverünk a ${port} porton fut.`))
```

<Telepites7></Telepites7>

<br>
<br>
<Codesandbox3></Codesandbox3>

### Forever

Egészen eddig ha a szerver futása közben bezárjuk a parancssort, maga a szerver is leáll. Sokkal praktikusabb lenne úgymond `háttérben futtatni` a szerverünket, mint a legtöbb folyamatot. Erre találták ki a `forever` könyvtárat. Amint valamilyen nem várt hiba következik be, a foreverrel indított szerver automatikusan újraindul a háttérben. Telepítsük fel a könyvtárat és indítsuk el a szerverünket a `forever start server.js` paranccsal. Leállítani (az összes foreverrel indított folyamatot) pedig a `forever stopall` paranccsal tehetjük meg.

<Telepites4></Telepites4> 

### MVC

Az `MVC` a `M`odel `V`iew `C`ontroller szavakból összetevődő kifejezés egy rendkívül népszerű szoftvertervezési mintára. Egy webfejlesztő szemszögéből nézve az eltérő nyelvek esetén nincs két egyforma megvalósítási forma, sok programozó szerint igazi MVC nem is értelmezhető a webfejlesztésben. Az általános koncepciója az, hogy elválasszuk egymástól a funkcionalitást, a vezérlést, a felhasználói felületet, stb. az alkalmazásunkban. Ez megadja a lehetőséget, hogy fejlesztőket csoportosítsunk egyetlen problémára. Az egyetlen hátránya az adatok megfelelő struktúrájának tervezésének és implementálásának időigényességéből adódik. A `Model` az adatok manipulásásáért felel, alapvetően az alkalmazásunk agyaként funkcionál (az üzleti logikát megvalósító réteg). A Model feladata az, hogy és leírjuk és definiáljuk azokat a szabályokat, melyek alapján elérhetjük azokat. Általában kapcsolatban áll valamilyen típusú adatbázissal (NoSQL vagy SQL) és intézi a lekérdezéseket. Továbbá kapcsolatot tart fent a Controller-el azon keresztül, hogy az is lekérhet adatokat a Model-en keresztül, hogy frissítse a View-t. Az MVC `View` része az alkalmazásunk kinézetéért / felhasználói felületéért felel. A View definíció szerint HTML, CSS a Controller-től származó dinamikusan változó adatok összessége. Elhatárolódik egymástól a megjelenítés az adatszerkezetektől. Az adatokat kizárólag a Model osztályainak példányain keresztül (az objektum-orientált programozási környezetben) érhetjük el. Az összes View irányítását egy Modellel is meg lehet oldani . Az éppen használt keretrendszertől függően, a template engine eltérhet, ami a dinamikus átvitelért és megjelenítésért felel. Színtiszta HTML-el dolgozva a felhasználói oldalon a megjelenítésünk jellege statikus, dinamikusan változó adatokat nem lehet megjeleníteni. Template engine használatával megoldódik ez a problémánk. Végezetül maradt a `Controller`, ami összefoglalóan a bemeneti eszközök és csatornák felügyeletéért felel, lényegében összeköti őket.  Ez azt az esetet is takarhatja, amikor egy felhasználó egy oldalt meglátogat és rákattintva egy linkre kérést indítványoz. Természetesen egy böngészőből nem indítható akármilyen kérés. Mint már tudjuk, a Controller egyfajta köztes állomásként viselkedik a Model és a View között. A Controller megkéri a Model-t arra, hogy adatot kérdezzen le az adatbázisból, ezt követően fogja az adatokat és betöltjük a View-be a template engine számára.

- Model

  * Adat vezérelt logika
  
  * Interakció az adatbázissal (SELECT, INSERT, UPDATE, DELETE)
  
  * Kommunikáció a Controller-el
  
  * Keretrendszertől függően képes frissíteni a View-t

- View

  * A felület, amivel a felhasználó találkozik
  
  * Általában HTML és CSS elemekből épül fel
  
  * Kapcsolatot tart fenn a Controller-el
  
  * A Controller-ből dinamikus adatok tölthetőek be
  
  * Template engine
 
- Controller

  * Bemenet
  
  * Bejövő kéréseket dolgoz fel (GET, POST, PUT, DELETE)
  
  * A Model-től kér le adatokat
  
  * A View számára adatokat továbbít

  
![	MVC](./jegyzet/JAVASCRIPT/MVC.jpg)
<figcaption style="text-align: center; font: italic bold 12px/30px Georgia, serif;">15. ábra, MVC</figcaption> 

### Middleware függvények, hibakezelés

A `Middleware függvények` definíció szerint olyan függvények, amik hozzáférnek a request (kérés - req) és response (válasz - res) objektumokhoz és kezelik azokat. Az egyes kérésekhez feltételeket is köthetünk, ekkor jön  aképbe a `next()` middleware függvény. Amennyiben a definiált feltétel tejjesül az egyik feltételre, átugrik a soron következő kérésre. Akkor is szokás használni, ha egy idő után nem hajlandó leállni a kérés-válasz ciklus. Továbbá rendelkezik egy harmadik argumentummal, ahova függvény vár ami meghívódik amint lefut a Middleware kódunk. Ez azt jelenti, hogy megvárja amíg mondjuk egy aszinkron művelet (adat lekérése az adatbázisból) megtörténik és csak aztán teszi meg a következő lépést. Az Express middleware-ek közül a legfontosabbakat kiemelve:

- Application level (alkalmazás szintű) middleware: `app.use`

- Router level (útvonal szintű) middleware: `router.use`

- Built-in (beépített) middleware: `express.static`

- Error-handling (hibakezelés): `app.use(err,req,res,next)`

- Third-party (külső forrásból származó) middleware: `bodyparser, cors`

![MIDDLEWARE1](./jegyzet/JAVASCRIPT/MIDDLEWARE1.jpg)
<figcaption style="text-align: center; font: italic bold 12px/30px Georgia, serif;">16. ábra, middleware függvények</figcaption>

Az Express-ben lehetőségünk van a hibakezelő middleware függvéynek implementálására. A szokásos middleware függvényekkel ellentétben nem három, hanem négy paramétert várnak az argumentumukban.

```js
app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Valamilyen hiba történt a szerverrel!')
})
```

### Statikus fájlok szolgáltatása

Ahhoz, hogy az Express keretrendszerrel közzé tehessünk bármilyen statikus tartalmat, mint képek, CSS stílusfájlok és JavaScript fájlok, az express.static beépített middleware függvény megoldást nyújthat a kérdésünkre. Az argumentumában két paramétert vár: `express.static(root, [options])`. Az első paraméterben definiálhatjuk relatív formában azon könyvtár útvonalát, melynek tartalmát közzé szeretnénk tenni. a weboldal címét kiegészítve ezen relatív útvonallal, hozzáférhetünk a közzé tett könyvtár tartalmát. Több mappa esetén annyiszor kell implementálni ezt a middleware függvényt, ahány mappáról van szó. A könyvtár elérési útvonala egzakt információt közöl a szerver könyvtár struktúrájáról, ami biztonsági kockázatot is jelenthet. Lehetőségünk van virtuális útvonalakat definiálni, így megkerülhetjük a problémát.     

```js
//  server.js
const express = require('express')
const app = express()
const port = 3000

//  egy példa a public mappa tartalmának közzé tételére
app.use(express.static('public'))

// egy példa több mappa tartalmának közzé tételére
app.use(express.static('files1'))
app.use(express.static('files2'))

//  egy példa virtuális útvonal implementálására, abszolút útvonallal
app.use('/static', express.static(path.join(__dirname, 'public')))

app.listen(port,(req,res)=>{
    console.log(`a szerverünk a  ${port} porton fut`)
})
```

<Telepites7></Telepites7>

<br>
<br>
<Codesandbox4></Codesandbox4>

### Routing (get, post, put, del, all)

Tegyük fel, hogy számos útvonallal rendelkezünk és minden egyes útvonallal valamilyen erőforrást és / vagy nézetet kívánnánk elérni. Továbbá arról is meg szeretnénk győzödni arról, hogy az egyes útvonalakhoz csakis a megfelelő személyek férjenek hozzá. Ebben az esetben egy autentikációs middleware-t kell megvalósítanunk. Amint az autentikáció feltétele teljesül, az erőforráshoz való hozzáférést biztosítsuk a next() meghívásával. Amennyiben az autentikáció sikertelen, a next() meghívása helyett hibával térjünk vissza. Valósítsuk meg az elképzelésünket és lássuk mi lesz az eredmény! 

![MIDDLEWARE2](./jegyzet/JAVASCRIPT/MIDDLEWARE2.jpg)
<figcaption style="text-align: center; font: italic bold 12px/30px Georgia, serif;">17. ábra, útvonakkezelés</figcaption>

```js
//  server.js
const express = require('express')
const app = express()
const port = 3000

const bejelentkezés = (req,res,next) =>{
    console.log(`Bejelentkezve  ${req.url}  ${req.method}`)
    next()
}

app.use(bejelentkezés);

app.get('/felhasznalok',(req,res)=>{
    res.json({
        'status':true
    })
})

app.post('/mentes',(req,res)=>{
    res.json({
        'status':true
    })
})

app.listen(port,(req,res)=>{
    console.log('a szerverünk a ${port} porton fut')
})
```

<Telepites5></Telepites5>

<br>
<br>
<Codesandbox5></Codesandbox5>

A Router-level (útvonal szintű) middleware függvények hasonlóképpen működnek, mint a application-level (alkalmazás szintű) párjaik azzal a különbséggel, hogy a express.Router() példányához kötődnek. Ezeket a middleware-ket úgy indíthatjuk el, hogy először a router.use() metódust meghívjuk, aztán pedig magát a kívánt router.metodus() metódust/függvényt. 

```js
//  server.js
const express = require('express')
const app = express()
const port = 3000;
const router = express.Router()

router.use((req,res,next)=>{
    console.log("Idő:",new Date())
    next()
})

router.get("/user/:id",(req,res,next)=>{
    console.log('URL cím:', req.originalUrl)
    next()
},(req,res,next)=>{
    console.log('Kérés típusa:', req.method)
    next()
},(req,res)=>{
    res.json({
        status:true,
        id:req.params.id
    })
})

app.use('/',router)

app.listen(port,(req,res)=>{
    console.log(`a szerverünk a ${port} porton fut`)
})
```

<Telepites6></Telepites6>

<br>
<br>
<Codesandbox6></Codesandbox6>

### Body

A `body-parsing` alatt azt a műveletet értjük, amikor a szerver szemszögéből nézve egy bejövő adatot (ami egy felhasználó által kezdeményezett kérésből érkezett) feldaraboljuk és átalakítjuk JavaScript objektummá, hogy az alkalmazásunk fel tudja dolgozni az információt. Ezt bármikor kinyerhetjük a `req.body`-ból. Az átalakítás akkor sikeres, ha a formátum támogatott (application/JSON). Egyébként üres objektummal tér vissza, vagy valamilyen hibakóddal. Alapértelmezésképpen legfeljebb 100kB-nyi adatot lehet feldolgozni, viszont ezt testre szabhatjuk. A szoftverfejlesztés során gyakori műveletnek számít, így egy body-parser middleware függvény implementálása nélkülözhetetlen. 

```js
//  server.js
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
          
app.listen(port,(req,res)=>{
    console.log(`a szerverünk a ${port} porton fut`)
})
```

<Telepites8></Telepites8>

<br>
<br>
<Codesandbox7></Codesandbox7>

### CORS

Ha már fejlesztettél korábban valamilyen alkalmazást, akkor biztosan találkozhattál már a `cors` hibával, amikor a szerver és a kliens oldalt kötötted össze: `No access controll allow original header is present on the requested resource`. A `Cors` alatt a `C`ross `O`rigin `R`esource `S`haring szóösszetételből álló kifejezést értjük. A mögötte álló koncepció biztonsági megfontolásokon nyugszik. Amennyiben az alkalmazásunknak van kliens és szerver oldala és a kliens oldalt amaga a szerver szolgáltatja. Tegyük fel, hogy a kliens oldalról valamilyen kérést intézünk a szerver felé, az pedig visszaküldi a megfelelő adatot. A két oldal közti információ meg van engedve de csak azért, mert a klients a szerver szolgáltatja, az erőforrások megegyeznek (ugyanazon a porton keresztül történik az adatcsere). Ha a kliens oldalt másik szerver szolgáltatná, alapértelmezésképpen a böngészők letiltják ezen kommunikációs kísérletetek. Kivételeket lehet deklarálni,az API-k készítésénél ezek nélkülözhetetlenek.

```js
//  server.js
const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000
app.use(cors())

app.get('/', (req, res) => res.send('Ez az üzenet a szervertől jött!'))

app.listen(port, () => console.log(`a szerverünk a ${port} porton fut`))
```

<Telepites7></Telepites7>

<br>
<br>
<Codesandbox8></Codesandbox8>

### Template engines, server-side rendering, EJS

A `template engine` (sablon motor) egy olyan eszköz a HTML-el foglalkozó frontend/full stack fejlesztők részére, amivel még a HTML tényleges betöltődése előtt a sajátos szintaxisát használva dinamikusan változó adatokat és funkcionalitásokat szúrhatunk be a View-be. Számos sablon rendszer közül válogathatunk, személy szerint az `EJS` használatát javaslom az egyszerű használhatóságából kiindulva. Az `EJS` a `E`mbedded `J`ava`s`cript (beépített JavaScript) szavak rövidítéséből összeálló kifejezés. A szintaxisa tulajdonképpen egy egszererűsített leíró nyelvként funkcionál amely lehetővé teszi a fejlesztők számára, hogy HTML sablont generáljon pusztán némi sornyi JavaScript kód deklarálásával. Az EJS előnye leginkább akkor mutatkozik meg, amikor a HTML-hez alapból sok-sok funkcionalitást kell implementálni JavaScriptben továbbá még akkor, amikor valós időben változó adatokat kell megjelenítetünk a felhasználói felületen. A JavaScripten keretrendszereken kívül CSS keretrendszereket ie könnyedén integrálhatunk vele (BootStrap), A fájlokat egymásba ágyazhatjuk ezáltal a különböző nézeteket (View) akár egyetlen lapra is össze tudjuk sűríteni. Az első használat előtt telepítsük az npm segítségével az általunk kiválasztott helyre.

<Telepites9></Telepites9>

Az Express alapártelmezésképpen a `Jade` template engine-t használja, ezért nekünk még külön be kell állítani, hogy az EJS-t használhassuk (`app.set("view engine","ejs");`). Az `.ejs` kiterjesztésű fájlokhoz hozzunk létre egy `views` elnevezésű könyvtárat (ahol a projektünk elhelyezkedik), ahova a sablonokat fogjuk elhelyezni. Amennyiben más elnevezésű mappában szeretnénk az .ejs kiterjesztésű fájlokat, akkor az alábbi sort kell hozzáadnunk a kódunkhoz: `app.set("views","./ide_mentjük_az_ejs_fajlokat");`. Amint egyre több .ejs kiterjesztésű fájl gyűlik össze, egyre körülményesebb lesz a kívánt elemeket megkeresni. Az EJS megadja azt a lehetőséget, hogy mappákba csoportosítsuk az egybetartozónak vélt fájlokat. A lenti példában megmutatjuk, hogy miképp tudjuk beimportálni ezen fájlokat.

```
server.js
package.json
package-lock.json
> node_modules
> views
      |_ valami.ejs
```

```
server.js
package.json
package-lock.json
> node_modules
> views
      |_ valami.ejs
				    |_ Csoport
							  |_ fejlec.ejs
							  |_ lablec.ejs 
```

```
//  valami.ejs

  //  lablec.ejs importálása
<%include Csoport/fejlec%>
  //  lablec.ejs importálása
<%include Csoport/lablec%>
``` 

Szintaxisa szerint `<%attributum kod %>` tag-be foglaljuk a JavaScript kódunkat. Az `attributum paraméterrel határozzuk meg, hogy mit szeretnénk definiálni, a `kod` paraméter pedig a tényleges kódnak a deklarációját várja. Ha egy kód több sorból áll, akkor minden egyes sort <%attributum kod %>-ba kell deklarálni, ahol a kod értelemszerűen a teljes kódunk egyik sora. Néhány példán keresztül bemutatjuk a legfontosabb `<>`-eket, amivel dinamikusan változó adatokat szúrhatunk be HTML fájlokba az EJS szintaktikájával.

- <% %>: Ebbe beleírhatunk olyan JavaScript kódokat, melyek visszatérnek valamiyen értékekkel. Ez a kód lehet bármilyen vezérlési szerkezet, feltétel, importálás, stb. (kivéve a változó deklarációt). A lenti példában egy for ciklust deklaráltunk, ami 5x kiírja azt, hogy `Ezzel a példával ötször kiírjuk ezt a szöveget!`.

```
<ul>
	<%= for(var i=0; i<5; i++){%>
		<li>Ezzel a példával ötször kiírjuk ezt a szöveget!</li>
	<% } %>
</ul>
```

- <%= %>: Ebbe definiálhatjuk a változó deklarációkat, melyek visszatérnek valamilyen értékkel.

```
<%= cim%>
```

- <%# %>: Ezzel jegyezhetünk le magunknak kommenteket

```
<%# ez egy komment lenne%>
```

### Példa alkalmazás

Az eddig tanultakat felhasználva Írjunk egy egyszerű szerver által szolgáltatott alkalmazást Express segítségével. A feladat az lenne, hogy nyilván tartsunk néhány hallgató nevét és az általuk felvett tárgyait. Az egyszerűség kedvéért az adatok nyilván tartását reprezentáljuk egy objektummal, melyek tulajdonságaihoz egy-egy objektum van rendelve. Ezek egy-egy hallgatót reprezentálnak, melyekben el van tárolva a név, illetve a felvett tárgyak listája. A feladat lényegében az lenne, hogy a böngészőnkön annyi nézet jelenítődhessen meg, ahágy hallgató van és minden egyes nézetben írjuk ki a hallgató nevét, azonosítóját, illetve a felvett tárgyait.

```js
//  server.js
const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.set('view engine', 'ejs');
app.set("views", __dirname + "/views")

var hallgatok = {
	1: {
		nev: 'Gábor Tibor',
		felvett_targyak: ['c++', 'java', 'python']
	   },
	2: {
		nev: 'Lajkó Dénes',
		felvett_targyak: ['c', 'javascript', 'python']
	   },
	3: {
		nev: 'Nagy János',
		felvett_targyak: ['mysql', 'java', 'mongodb']
	   },
}

app.get('/hallgatok/:id', function(req, res) {	res.render('hallgatok', {nev: hallgatok[Number(req.params.id)].nev, id: req.params.id, felvett_targyak: hallgatok[Number(req.params.id)].felvett_targyak})})

app.listen(port, function() { console.log(`a szerverünk a ${port} porton fut`)})
```

```
server.js
package.json
package-lock.json
> node_modules
> views
      |_ hallgatok.ejs
```

```
//  hallgatok.ejs

<!DOCTYPE html>
<html lang="hu">
	<head>
		<meta charset="utf-8">
		<title>Hallgatók listája</title>
		<style>
		</style>
	</head>
	<body>
		<p>Hallgató neve: <%= nev %></p>
		<p>Azonosito: <%= id %></p>
		<p>Felvett tárgyak:</p>
		<ul>
			<% felvett_targyak.forEach(function(targy){ %>
				<li> <%= targy %></li>
			<%});%>
		</ul>
	</body>
<html>
```
<Codesandbox9></Codesandbox9>

::: tip Irodalomjegyzék
<div style="text-indent: -4%; font-family: Garamond; font-size: 20px; font-style: normal; font-variant: normal;">
	<ol>
		<li>
			<a id="1"></a>
			&nbsp;
			&nbsp;
			&nbsp; 
			(weboldal) Keresztnév Vezetéknév: 
			<i style="font-style: italic;">Weblap neve, </i>
			Weblap ÉV., 
			Elérhetőség: <a>https://www.pelda.hu</a>, 
			(Utoljára megtekintve: ÉV.HÓ.NAP)
		</li>
		<li>
			<a id="2"></a>
			&nbsp;
			&nbsp;
			&nbsp; 
			(elektronikus forrás / könyv) Keresztnév Vezetéknév: 
			<i style="font-style: italic;">Cím, </i>
			Kiadó, 
			Kiadás helye, 
			Évszám
		</li>
	</ol>
</div>
:::

![etap](./etap.jpg)