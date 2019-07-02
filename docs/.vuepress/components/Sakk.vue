<template>
    <div    id="app"
            class="text-center">
    <table  class="main">
      <tr   v-for="(row,j) in table">
        <td v-for="(cell,i) in row"
            v-html="cell"
            :class="`f${ f }${ cell } x${ (i+j)%2 } ${ ac.x===i && ac.y===j ? 'a' + ( (i+j)%2) : '' }`"
            @click="click(i,j)"></td>
      </tr>
    </table>
    <hr>
    <div class="link">
        <a href="./Sakk_forras.html">Forráskód</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      katt:   '',
      ac:     {},
      f:      '',
      mf:     '',
      next:   true,
      debug : '',
      table:  [
        ['&#9820;','&#9822;','&#9821;','&#9818;','&#9819;','&#9821;','&#9822;','&#9820;'],
        ['&#9823;','&#9823;','&#9823;','&#9823;','&#9823;','&#9823;','&#9823;','&#9823;'],
        [' ',' ',' ',' ',' ',' ',' ',' '],
        [' ',' ',' ',' ',' ',' ',' ',' '],
        [' ',' ',' ',' ',' ',' ',' ',' '],
        [' ',' ',' ',' ',' ',' ',' ',' '],
        ['&#9817;','&#9817;','&#9817;','&#9817;','&#9817;','&#9817;','&#9817;','&#9817;'],
        ['&#9814;','&#9816;','&#9815;','&#9812;','&#9813;','&#9815;','&#9816;','&#9814;']
      ],
      black: ['&#9820;','&#9822;','&#9821;','&#9818;','&#9819;','&#9823;'],
      white: ['&#9817;','&#9814;','&#9816;','&#9815;','&#9812;','&#9813;']
    }
  },
  methods: {
    jolepes(x,y,f,xm,ym) {
      let ret = false
      if (f==='&#9823;') {
        if (this.table[ym][xm]===' ') {
          if (x===xm && y===ym-1) ret = true
          if (x===xm && y===1 && ym===3) ret = true
        } else {
          if ( (x===xm+1 || x===xm-1) && y===ym-1) ret = true
        }
      }
      else if (f==='&#9817;') {
        if (this.table[ym][xm]===' ') {
          if (x===xm && y===ym+1) ret = true
          if (x===xm && y===6 && ym===4) ret = true
        } else {
          if ( (x===xm+1 || x===xm-1) && y===ym+1) ret = true
        }
      }
      else if (f==='&#9816;' || f==='&#9822;') {
          if ( Math.abs(x-xm)+Math.abs(y-ym) === 3 && x!==xm && y!==ym ) ret = true
      }
      else if (f==='&#9819;' || f==='&#9813;') {
          if ( Math.abs(x-xm)===Math.abs(y-ym) || x===xm || y===ym ) ret = true
          let xir = Math.sign(xm-x), yir = Math.sign(ym-y), vpx, vpy
          if (ret)
            for(vpx=x+xir,vpy=y+yir;vpx!==xm || vpy!==ym;vpx+=xir,vpy+=yir)
              if (this.table[vpy][vpx]!==' ') ret = false
      }
      else if (f==='&#9821;' || f==='&#9815;') {
          if ( Math.abs(x-xm)===Math.abs(y-ym) ) ret = true
          let xir = Math.sign(xm-x), yir = Math.sign(ym-y), vpx, vpy
          if (ret)
            for(vpx=x+xir,vpy=y+yir;vpx!==xm || vpy!==ym;vpx+=xir,vpy+=yir)
              if (this.table[vpy][vpx]!==' ') ret = false
      }
      else if (f==='&#9820;' || f==='&#9814;') {
          if ( x===xm || y===ym ) ret = true
          let xir = Math.sign(xm-x), yir = Math.sign(ym-y), vpx, vpy
          if (ret)
            for(vpx=x+xir,vpy=y+yir;vpx!==xm || vpy!==ym;vpx+=xir,vpy+=yir)
              if (this.table[vpy][vpx]!==' ') ret = false
      }
      else if (f==='&#9818;' || f=='&#9812;') {
        if ( Math.abs(x-xm)<2 && Math.abs(y-ym)<2) ret = true
        this.debug = xm + ' - ' + x
        if (f==='&#9812;' && xm===1 && x===3 && ym===7 && y===7)  {
          ret = true
          this.table[7][0]=' '
          this.table[7][2]='&#9814;'
        }
        if (f==='&#9812;' && xm===5 && x===3 && ym===7 && y===7)  {
          ret = true
          this.table[7][7]=' '
          this.table[7][4]='&#9814;'
        }
        if (f==='&#9818;' && xm===1 && x===3 && ym===0 && y===0)  {
          ret = true
          this.table[0][0]=' '
          this.table[0][2]='&#9820;'
        }
        if (f==='&#9818;' && xm===5 && x===3 && ym===0 && y===0)  {
          ret = true
          this.table[0][7]=' '
          this.table[0][4]='&#9820;'
        }
      }
      if (
        ( this.next && this.black.includes(this.table[ym][xm]) ) ||
        (!this.next && this.white.includes(this.table[ym][xm]) )
      ) ret = false
      return ret
    },
    click(x,y) {
      if (x===this.ac.x && y===this.ac.y) {
        this.ac={}
        this.katt=``
        this.f=''
        this.next = !this.next
      }
      else if (this.f==='x') {
        if (this.jolepes(this.ac.x,this.ac.y,this.mf,x,y)) {
          this.table[y][x]=this.mf
          this.table[this.ac.y][this.ac.x]=' '
          this.ac={}
          this.katt=``
          this.f=''
        }
      }
      else if (this.table[y][x]!=' ') {
        if (
          ( !this.next && this.black.includes(this.table[y][x]) ) ||
          (  this.next && this.white.includes(this.table[y][x]) )
        ) {
          this.next = !this.next
          this.ac={x,y}
          this.mf=this.table[y][x]
          this.katt=`(${String.fromCharCode(65+x)}${8-y}) ${this.mf} &#8658; `
          this.f='x'
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Courgette|Metamorphous|Pacifico');
#app {
  margin: 0 auto;
  padding: 0;
  font-family: 'Pacifico', cursive;
  font-size: 25px;
}
td {
  padding: 0;
  margin:           2px;
  border-radius:    3px 3px;
  border:           solid 1px;
  width:            50px;
  height:           50px;
  vertical-align:   top;
  text-align:       center;
  cursor:           pointer;
  box-shadow:       1px 1px 3px black;
  text-shadow:      0 0 3px rgb(34, 83, 84);
}
td.f {
  cursor:           default;
}
td.x1 {
  background-color: rgb(205, 205, 205);
}
td.x0 {
  background-color: rgb(255, 255, 255);
}
td.a0 {
  background-color: rgb(162, 138, 138);
}
td.a1 {
  background-color: rgb(157, 120, 120);
}
div.ed {
  font-family:      'Courgette', cursive;
}
div.link {
    text-align:center;
}
table.main {
  display: table;
  margin:           0 auto;
  border-collapse:  separate;
  border-spacing:   1px;
}
</style>