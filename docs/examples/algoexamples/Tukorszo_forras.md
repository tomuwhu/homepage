# Tükörszó probléma megoldása

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">

<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>

$f(i,j)=$

- ha $i>=j$, akkor: &nbsp; $0$
- egyébként
  - ha $s[i]=s[j]$, akkor $f(i+1,j-1)$
  - egyébként: $min( f(i+1,j),f(i,j-1) )+1$

## Megoldás dinamikus programozás módszerével

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
    <div id=app>
        <h2>Tükörszósító</h2>
        <input v-model="s" @keyup="szamol()" placeholder="Szó / Szöveg"/>
        <hr>
        <div v-if="mi">Törlendő karakterek száma {{ mi }}.</div>
        <div v-else>Ez tükörszó</div>
        <br>
        <div v-if="mi">A tükörszó a törölt karakterek helyével: <span v-html=mo /></div>
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
        mo: ""
    }),
    methods: {
        szamol() {
            if (this.s.length) {
                o.t = Array(this.s.length).fill().map(v=>Array(this.s.length).fill(0))
                o.s=this.s
                this.mi=o.mi()-1
                this.mo=this.mi?o.mo():o.s
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
            width: 300px;
            font-size: 30px;
            padding: 5px;
            border-radius: 5px;
        }
    }
</style>
```
