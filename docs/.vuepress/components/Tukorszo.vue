<template>
    <div id=app>
        <h2>Tükörszósító</h2>
        <input v-model="s" @keyup="szamol()" placeholder="Szó / Szöveg"/>
        <hr>
        <div v-if="mi">Törlendő karakterek száma {{ mi }}.</div>
        <div v-else>Ez tükörszó</div>
        <br>
        <div v-if="mi">A tükörszó a törölt karakterek helyével: <span v-html=mo /></div>
        <hr>
        <br>
        <a href="/~tnemeth/examples/algoexamples/Tukorszo_forras.html">Rekurzív képlet és Forráskód megjelenítése</a>
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
      do this.t[i][j-1]+1===this.t[i][j] ? s[j--]='&#8226;' :
         this.t[i+1][j]+1===this.t[i][j] ? s[i++]='&#8226;' : ( i++, j-- )
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
            background-color: rgb(196, 232, 238);
            width: 300px;
            font-size: 20px;
            padding: 5px;
            border-radius: 5px;
        }
    }
</style>