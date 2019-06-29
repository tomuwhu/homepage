<template>
    <div id="app">
    <h2>Amőba</h2>
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
    <span v-if="nyert!='-'">
        <h2>Nyert: {{ nyert }}</h2><br>
        <div class=ujj @click=ujj()>Új játék</div>
    </span>
    <br>
    <hr>
    <a href="/~tnemeth/examples/webexamples/Amoba_forras.html">
        Forráskód
    </a>
    </div>
</template>

<script>
let next = "X", xp, yp, maxh, size=10, ba = n =>
    Array(n) .fill(0) .map( () => Array(n).fill(" ") )
export default {
    data: () => ({ nyert: "-", tabla: ba(size) }),
    methods: {
        ujj() { this.tabla = ba(size), this.nyert = "-" },
        katt(x, y) {
            if (this.tabla[x][y] === " " && this.nyert === "-") {
                this.$set(
                    this.tabla[x],
                    y,
                    next === "X" ? next = "O" : next = "X"
                ),
                [[1,1],[1,0],[0,1],[-1,1]].forEach( v => {
                    xp=x, yp=y, maxh=0
                    while (this.tabla[xp] && this.tabla[xp][yp]===next) 
                        xp+=v[0], yp+=v[1], maxh++
                    xp=x, yp=y
                    while (this.tabla[xp] && this.tabla[xp][yp]===next) 
                        xp-=v[0], yp-=v[1], maxh++
                    maxh>5 ? this.nyert = next : null
                })
            }
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
        table {
            border-collapse: inherit;
            width: 356px;
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
                color:snow;
                padding:3px;
            }
            td.O {
                background-color: #437264;
            }
            td.X {
                background-color: #af5489;
            }
        }
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
