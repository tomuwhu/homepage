# Tükörszó probléma megoldása

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">

<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>

$f(i,j)=$

- ha $i>=j$, akkor: &nbsp; $0$
- egyébként
  - ha $s[i]=s[j]$, akkor $f(i+1,j-1)$
  - egyébként: $min( f(i+1,j),f(i,j-1) )+1$

## Megoldás rekurzió-memorizálás módszerével

```javascript
let o = {
    mi(i=0,j=this.s.length-1) {
      !this.t   ? this.t = Array(this.s.length)
                           .fill()
                           .map(v=>Array(this.s.length)
                           .fill(0))
                : null
      return this.t[i][j] ? this.t[i][j] : i>=j ? this.t[i][j] = 1 :
             this.s[i]===this.s[j] ? this.t[i][j] = this.mi(i+1,j-1) :
             this.t[i][j] = Math.min(this.mi(i+1,j),this.mi(i,j-1))+1
    },
    mo(i=0,j=this.s.length-1) {
      let s=this.s.split('')
      do this.t[i][j-1]+1===this.t[i][j] ? s[j--]='.' :
         this.t[i+1][j]+1===this.t[i][j] ? s[i++]='.' : ( i++, j-- )
      while (this.t[i][j]-1)
      return s.join('')
    }
}
o.s = 'pelda'
console.log(`
    ${ o.x = o.mi()-1 } karakter törlésével a tükörszó:
    ${ o.x?o.mo():o.s }
`)
```

## VueComponent forrás

```javascript
<template>
    <div id=app name=tukorszo>
        <h2>Tükörszósító</h2>
        <input v-model="s"
               @keyup="szamol()"
               placeholder="Szó / Szöveg"/>
        <hr>
        <table v-if="mi">
            <td class="szoveg">Törlendő karakterek száma:</td>
            <td class="eredm">{{ mi }}</td>
        </table>
        <div v-else>Ez tükörszó</div>
        <br>
        <table v-if="mi">
            <tr>
                <td class="szoveg">
                    A tükörszó a törölt karakterek helyével:
                </td>
            </tr>
            <tr>
                <td>
                    <table>
                        <td :class="el=='.'?'z':'x'"
                            v-html="el==='.'?'&#x2727;':el"
                            v-for="el in mo"/>
                    </table>
                </td>
            </tr>
        </table>
        <hr>
        <table>
            <tr v-for="(row,j) in t">
                <td :class="cell?'x':'o'"
                    :key="`${i}-${j}`"
                    v-for="(cell,i) in row">
                    {{ cell?cell-1:'' }}
                </td>
            </tr>
        </table>
        <br>
        <a href="/~tnemeth/examples/algoexamples/Tukorszo_forras.html">
            Rekurzív képlet és Forráskód megjelenítése
        </a>
    </div>
</template>

<script>
let o = {
    mi(i=0,j=this.s.length-1) {
      return this.t[i][j] ? this.t[i][j] : i>=j ? this.t[i][j] = 1 :
             this.s[i]===this.s[j] ? this.t[i][j] = this.mi(i+1,j-1) :
             this.t[i][j] = Math.min(this.mi(i+1,j),this.mi(i,j-1))+1
    },
    mo(i=0,j=this.s.length-1) {
      let s=this.s.split('')
      do this.t[i][j-1]+1===this.t[i][j] ? s[j--]='.' :
         this.t[i+1][j]+1===this.t[i][j] ? s[i++]='.' : ( i++, j-- )
      while (this.t[i][j]-1)
      return s.join('')
    }
}
export default {
    data: () => ({
        s: "",
        mi: 0,
        mo: "",
        t: []
    }),
    methods: {
        szamol() {
            if (this.s.length) {
                o.t = Array(this.s.length)
                        .fill()
                        .map(v=>Array(this.s.length).fill(0))
                o.s=this.s
                this.mi=o.mi()-1
                this.mo=this.mi?o.mo():o.s
                this.t=o.t
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    div#app {
        font-size: 20px;
        margin: 40px;
        input {
            background-color: rgb(196, 232, 238);
            width: 300px;
            font-size: 20px;
            padding: 5px;
            border-radius: 5px;
        }
    }
    table {
        padding: 0px;
        margin: 0px;
        border-collapse: separate;
        border-spacing: 3px;
        td {
            text-align: center;
            font-size: 15px;
            padding: 2px;
            width:  17px;
            height: 17px;
            box-shadow: 1px 1px 2px gray;
            border-radius: 6px;
        }
        td.z {
            background-color: rgb(235, 88, 98);
            font-weight: bold;
            color:snow;
        }
        td.x {
            background-color: rgb(217, 252, 233);
            font-weight: bold;
        }
        td.szoveg {
            font-size: 18px;
            width: 320px;
            text-align: left;
            padding: 4px;
            padding-left: 8px;
        }
        td.eredm {
            font-weight: bold;
            font-size: 18px;
            padding: 4px;
            background-color: rgb(169, 241, 249);
        }
    }
</style>
```
