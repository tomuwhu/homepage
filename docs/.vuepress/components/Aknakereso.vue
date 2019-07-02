<template>
  <div id="app">
    <table class="t1" @click.right.stop.prevent>
      <tr v-for = "(row,y) in table">
        <td v-for = "(cell,x) in row"
            @click.exact = "lclick(x,y)"
            @click.alt.exact = "rclick(x,y)"
            @click.ctrl.exact= "rclick(x,y)"
            @click.right.stop.prevent= "rclick(x,y)"
            v-html="cell==='O'?'&#x1F4A3;':cell==='B'?'&#9873;':cell"
            :class="'p'+cell"></td>
      </tr>
      <tr v-if="!nyert">
        <td colspan=2 class="text">Mód:</td>
        <td class="pB" v-if="!bmode" @click="bmode=true">&#9873;</td>
        <td v-if="bmode" @click="bmode=false"> </td>
        <td colspan="7" class="text">
          <span v-if="!bmode"> &larr; vedd fel a bombajelölőt! </span>
          <span v-else> tedd le a bombajelölőt! </span>
        </td>
      </tr>
    </table>
    <span v-if="nyert===1">
      <br>
      <div class="nyert">Nyertél!</div>
    </span>
    <span v-if="nyert===-1">
      <br>
      <div class="vesztett">Vesztettél!</div>
    </span>
    <div class="btc">
      <br>
      <div v-if="nyert"
          @click="createtable()"
          class="btn">Új játszma</div>
    </div>
    <hr>
    <a href="/~tnemeth/examples/webexamples/Aknakereso_forras.html">
        Forráskód
    </a>
  </div>
</template>

<script>
let masz, tilt, xp, yp, hba
export default {
  name: 'aknak',
  data() {
    return {
      n:10, m:10, asz: 14, nyert: 0, bmode: false,
      table: [],
      aknak: 0
    }
  },
  mounted() {
    this.createtable()
  },
  methods: {
    createtable() {
      hba = new Set()
      this.aknak = new Set()
      this.nyert=0
      masz=0
      tilt=0
      let x, y
      this.table=[]
      for (let i=0;i<this.n;i++) {
          let sor = []
          for (let j=0;j<this.m;j++) sor.push(' ')
          this.table.push(sor)
      }
      for (let i=0;i<this.asz;i++) {
          do {
            x = Math.trunc(Math.random()*this.n)
            y = Math.trunc(Math.random()*this.m)
          } while ( this.aknak.has(`${y}-${x}`) )
          this.aknak.add(`${y}-${x}`)
      }
    },
    lclick(x,y) {
      if (this.bmode) {
        this.rclick(x,y)
        this.bmode=false
      }
      else if ( !this.nyert && this.table[y][x]===" " ) {
        if (this.aknak.has(`${x}-${y}`) ) {
          this.nyert=-1
          Array.from(this.aknak).forEach( v => {
              [xp, yp]=v.split('-')
              this.$set(this.table[yp], xp, 'O')
          })
          Array.from(hba).forEach( v => {
              [xp, yp]=v.split('-')
              this.$set(this.table[yp], xp, 'H')
          })
          this.$set(this.table[y], x, 'O')
          this.aknak.clear()
          return false
        }
        let vsz=[-1,0,1], fl=vsz, count=0
        vsz.forEach( v =>
          fl.forEach( f => {
            if (this.aknak.has(`${x+v}-${y+f}`)) count++
          } )
        )
        this.$set(this.table[y], x, count)
        if (count==0) {
          vsz.forEach( v =>
            fl.forEach( f => {
              if (
                  typeof this.table[y+f] !== 'undefined' &&
                  this.table[y+f][x+v]===" "
              ) this.lclick(x+v,y+f)
            } )
          )
        }
      }
    },
    rclick(x,y) {
      if ( !this.nyert && this.table[y][x]===" " ) {
        this.$set(this.table[y], x, "B")
        if ( this.aknak.has(`${x}-${y}`) ) masz++
        else tilt++, hba.add(`${x}-${y}`)
        if ( masz === this.asz && tilt===0 ) this.nyert=1
      }
      else if ( !this.nyert && this.table[y][x]==="B" ) {
        if ( this.aknak.has(`${x}-${y}`) ) masz--
        else tilt--, hba.delete(`${x}-${y}`)
        this.$set(this.table[y], x, " ")
        masz--
      }
    }
  }
}
</script>

<style lang=scss scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto+Slab&display=swap');
.btc {
  text-align: center;
}
.btn {
  margin: 0 auto;
  padding: 6px;
  cursor:pointer;
  background-color: #3a435c;
  color:snow;
  width:90px;
  border-radius: 7px;
  box-shadow: 0 0 5px black ;
}
.btn:hover {
  cursor:pointer;
  background-color: #273048;
  color:snow;
    box-shadow: 0 0 2px black ;
}
.cx {
  margin-left:10px;
  margin-right: 20px;
}
#app {
    font-family: 'Roboto Slab', serif;
    user-select: none;
    text-align: center;
    color: #095d6c;
    h2 {
        text-shadow: 0px 0px 2px #19334d;
    }
    div#content {
        text-align: center;
    }
}
div.ujj {
    margin:0px auto;
    width: 90px;
    cursor:pointer;
    border-radius: 4px;
    box-shadow: 1px 1px 3px rgb(99, 97, 97);
}
div.ujj:hover {
    background-color: #cfded9;
    box-shadow: 1px 1px 3px rgb(34, 33, 33);
}
div.nyert {
  font-size: 25px;
  color:rgb(58, 147, 157) ;
  font-weight: bold;
  text-shadow: 0 0 2px rgb(138, 29, 29);
}
div.vesztett {
  font-size: 25px;
  color:rgb(213, 37, 34) ;
  font-weight: bold;
  text-shadow: 0 0 2px rgb(138, 29, 29);
}
table {
    border-collapse: inherit;
    display: table;
    margin:0px auto;
    border-spacing: 1px;
    td {
        text-align: center;
        width: 28px;
        height: 28px;
        background-color: #e6f3ef;
        border-radius: 4px;
        box-shadow: 1px 1px 3px rgb(99, 97, 97);
        cursor: pointer;
        border: solid 1px rgb(29, 43, 75);
        color:rgb(55, 6, 6);
        padding:3px;
    }
    td.p0 { background-color: #afe9d8; }
    td.p1 { background-color: #e9cbaf; }
    td.p2 { background-color: #e9b3af; }
    td.p3 { background-color: #ff9f9f; }
    td.p4 { background-color: #fa8383; }
    td.p5 { background-color: #f94343; color:white;}
    td.pB {
        background-color: #3a435c;
        color:snow;
        font-weight: bold;
    }
    td.pH {
        background-color: #9f0707;
        color:snow;
        font-weight: bold;
    }
    td.pO {
        background-color: #a7a7a7;
        color:rgb(240, 203, 203);
        font-weight: bold;
    }
    td.text {
        background-color: #cecece;
        color:rgb(19, 90, 106);
        font-weight: bold;
    }
}

</style>