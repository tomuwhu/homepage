# Tükörszó probléma megoldása

## Pédaprogram

[Futtatás](/examples/algoexamples/Tukorszo.html)

## A megoldás matematikai modellje

![képlet](/~tnemeth/tukorszo.png)

<!--

$f(i,j)=$

- ha $i>=j$, akkor: &nbsp; $0$
- egyébként
  - ha $s[i]=s[j]$, akkor $f(i+1,j-1)$
  - egyébként: $min( f(i+1,j),f(i,j-1) )+1$
-->

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

<<< @/docs/.vuepress/components/Tukorszo.vue
