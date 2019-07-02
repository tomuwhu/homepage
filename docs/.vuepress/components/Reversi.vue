<template>
    <div id="app">
    <div id=content>
        <table>
            <tr :key=i v-for="(sor,i) in tabla">
            <td :key=j v-for="(elem,j) in sor" 
                :class=elem
                @click=katt(i,j)> {{elem}}
            </td>
            </tr>
        </table>
    </div>
    <span>
            <table>
                <td>{{ fsz.X }}</td>
                <td class="X">X</td>
                <td> <-> </td>
                <td class="O">O</td>
                <td>{{ fsz.O }}</td>
            </table>
    </span>
    <span v-if="nyert!='-'">
        <h2>Nyert: {{ nyert }}</h2><br>
    </span>
    <br>
    <div class=ujj @click=ujj()>Új játék</div>
    <hr>
    <a href="/~tnemeth/examples/webexamples/Reversi_forras.html">
        Forráskód
    </a>
    </div>
</template>

<script>
let next = "X", xp, yp, maxh, size=10, szin, szt, masik, ba = n =>
    Array(n) .fill(0) .map( () => Array(n).fill(" ") )
export default {
    name: 'amoba',
    data: () => ({ nyert: "-", tabla: ba(size), fsz: { X: 0, O: 0 } }),
    methods: {
        ujj() { this.tabla = ba(size), this.nyert = "-", this.fsz.X=0, this.fsz.O=0 },
        katt(x, y) {
            masik = next
            if (this.tabla[x][y] === " " && this.nyert === "-") {
                this.$set(
                    this.tabla[x],
                    y,
                    next === "X" ? next = "O" : next = "X"
                ),
                [
                    [1,1],[1,0],[0,1],[-1,1],
                    [-1,-1],[-1,0],[0,-1],[1,-1]
                ].forEach( v => {
                    xp=x, yp=y, szt=[]
                    do {
                        xp+=v[0]
                        yp+=v[1]
                        if (this.tabla[xp] && this.tabla[xp][yp]===masik) szt.push({xp,yp})
                    } while ( 
                        xp>=0 && yp>=0 && xp<size && yp<size && 
                        this.tabla[xp][yp]!==next && this.tabla[xp][yp]!==' '
                    )
                    if ( this.tabla[xp] && szt.length && this.tabla[xp][yp]===next ) {
                        szt.forEach( v=> {
                            this.$set( this.tabla[v.xp], v.yp, next)
                            this.fsz[next]++
                            this.fsz[masik]--
                        })
                    }
                })
                this.fsz[next=="X"?"X":"O"]++
            }
            if (this.fsz.O+this.fsz.X===size**2) 
                this.nyert = this.fsz.O===this.fsz.X ? 'Döntetlen' :
                             this.fsz.O > this.fsz.X ? 'O' : 'X'
        }
    }
}
</script>

<style lang=scss scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto+Slab&display=swap');
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
table {
    border-collapse: inherit;
    display: table;
    margin:0px auto;
    border-spacing: 4px;
    td {
        text-align: center;
        width: 23px;
        height: 23px;
        background-color: #e6f3ef;
        border-radius: 4px;
        box-shadow: 1px 1px 3px rgb(99, 97, 97);
        cursor: pointer;
        border: solid 1px rgb(29, 43, 75);
        color:rgb(52, 43, 43);
        padding:3px;
        text-shadow: 0 0 2px 
    }
    td.O {
        color:snow;
        background-color: #437264;
    }
    td.X {
        color:snow;
        background-color: #af5489;
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
</style>
