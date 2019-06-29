# Malom forrás

```js
<template>
    <div id="base">
        <h4>Malom játék - nem teljes, házi feladat: befejezni!</h4>
        <table style="margin: 0 auto;">
            <tr :key="y" v-for="(row,y) in table">
                <td :key="x" v-for="(cell,x) in row" :class="'d'+cell">
                    <span v-if="!remm">
                        <div class="Empty" v-if="cell=='0'" />
                        <div class="O R" v-if="cell=='R' || szin(x,y,'R')" />
                        <div class="O B" v-if="cell=='B' || szin(x,y,'B')" />
                        <div class="O K"
                             v-if="count<18 && szin(x,y,'0')"
                             @click="katt(x,y)" />
                    </span>
                    <span v-if="remm=='R'">
                        <div class="Empty" v-if="cell=='0'" />
                        <div class="O R" v-if="cell=='R' || szin(x,y,'R')" />
                        <div class="O B K" v-if="cell=='B' || szin(x,y,'B')"
                             @click="del(x,y,'B')" />
                        <div class="O" v-if="count<18 && szin(x,y,'0')" />
                    </span>
                    <span v-if="remm=='B'">
                        <div class="Empty" v-if="cell=='0'" />
                        <div class="O R K" v-if="cell=='R' || szin(x,y,'R')"
                             @click="del(x,y,'R')"/>
                        <div class="O B" v-if="cell=='B' || szin(x,y,'B')" />
                        <div class="O" v-if="count<18 && szin(x,y,'0')" />
                    </span>

                    <span v-if="cell=='2'">
                        |
                    </span>
                    <span v-if="cell=='3'">
                        -
                    </span>
                </td>
            </tr>
        </table>
        <br>
        <button @click="uj()">Új játék</button>
        <br>
        <hr>
        <a href="/~tnemeth/examples/webexamples/Malom_forras.html">Forráskód</a>
    </div>
</template>

<script>
export default {
    data: () => ({
        table: [
                [1,3,3,3,3,3,1,3,3,3,3,3,1],
                [2,0,0,0,0,0,2,0,0,0,0,0,2],
                [2,0,1,3,3,3,1,3,3,3,1,0,2],
                [2,0,2,0,0,0,2,0,0,0,2,0,2],
                [2,0,2,0,1,3,1,3,1,0,2,0,2],
                [2,0,2,0,2,0,0,0,2,0,2,0,2],
                [1,3,1,3,1,0,0,0,1,3,1,3,1],
                [2,0,2,0,2,0,0,0,2,0,2,0,2],
                [2,0,2,0,1,3,1,3,1,0,2,0,2],
                [2,0,2,0,0,0,2,0,0,0,2,0,2],
                [2,0,1,3,3,3,1,3,3,3,1,0,2],
                [2,0,0,0,0,0,2,0,0,0,0,0,2],
                [1,3,3,3,3,3,1,3,3,3,3,3,1],
                [0,0,0,0,0,0,0,0,0,0,0,0,0],
                ['R','R','R','R','R','R','R','R','R',0,0,0,0],
                [0,0,0,0,'B','B','B','B','B','B','B','B','B'],
        ],
        Rf: null, Bf: null, next: null, count: null,
        BRC: null, BCC: null, RRC: null, RCC: null, remm: false
    }),
    methods: {
        szin(x,y,szin) {
            if (szin=='0' && this.Rf && this.Bf) {
                return  !this.Rf.has(`${x}-${y}`) &&
                        !this.Bf.has(`${x}-${y}`) &&
                         this.table[x][y]===1
            } else {
                let check
                if (szin=='R') check=this.Rf
                if (szin=='B') check=this.Bf
                return check?check.has(`${x}-${y}`):false
            }
        },
        katt(x,y) {
            let toadd, nx=x, ny=y
            if (nx==6 && ny>6) nx++
            if (nx>6 && ny==6) ny++
            if (this.next=='R') {
                toadd=this.Rf
                if (++this.RRC[ny] === 3) this.remm=this.next
                if (++this.RCC[nx] === 3) this.remm=this.next
            } else {
                toadd=this.Bf
                if (++this.BRC[ny] === 3) this.remm=this.next
                if (++this.BCC[nx] === 3) this.remm=this.next
            }
            toadd.add(`${x}-${y}`)
            if (this.next=='B')
                this.$set(this.table[15],12-Math.round(this.count++/2-0.5),0)
            else this.$set(this.table[14],Math.round(this.count++/2),0)
            this.next=this.next=='R'?'B':'R'
        },
        del(x,y,szin) {
            let toadd, nx=x, ny=y
            if (nx==6 && ny>6) nx++
            if (nx>6 && ny==6) ny++
            if (szin=='R') {
                toadd=this.Rf
                --this.RRC[ny]
                --this.RCC[nx]
            } else {
                toadd=this.Bf
                --this.BRC[ny]
                --this.BCC[nx]
            }
            toadd.delete(`${x}-${y}`)
            if (szin=='B')
                this.$set(this.table[15],12-Math.round(this.count--/2-0.5),szin)
            else
                this.$set(this.table[14],Math.round(this.count--/2),szin)
            //this.next=this.next=='R'?'B':'R'
            this.remm=false
            if (this.count>=18) this.remm='m'+this.next
        },
        uj() {
            this.table[14] = ['R','R','R','R','R','R','R','R','R',0,0,0,0]
            this.table[15] = [0,0,0,0,'B','B','B','B','B','B','B','B','B']
            this.BRC = Array(14).fill(0),
            this.BCC = Array(14).fill(0),
            this.RRC = Array(14).fill(0),
            this.RCC = Array(14).fill(0),
            this.count=0
            this.Rf=new Set
            this.Bf=new Set
            this.remm = false
            this.next='R'
        }
    },
    beforeMount() {
        this.uj()
    }
}
</script>

<style lang=scss scoped>
    #base {
        text-align: center;
    }
    table {
        width: 360px;
        border-collapse: inherit;
    }
    td {
        font-size: 1px;
        text-align: center;
    }
    td.d1 {
        box-shadow: 0px 0px 3px black;
        border-color: rgb(150, 133, 111);
        border-radius: 18px;
        border: solid 2px black;
        width: 20px;
        height: 20px;
    }
    td.d2, td.d3{
        width: 20px;
        height: 20px;
        background-color: rgb(128, 128, 128);
        border-radius: 9px;
    }
    div.O {
        margin: 0px auto;
        border-radius: 20px;
        width: 16px;
        height: 15px;
    }
    div.Empty {
        width: 20px;
        height: 20px;
    }
    div.R {
        background-color: rgb(194, 28, 28);
        box-shadow: 0px 0px 5px black;
    }
    div.B {
        background-color: rgb(69, 28, 194);
        box-shadow: 0px 0px 5px black;
    }
    div.K {
        width: 16px;
        height: 15px;
        cursor: pointer;
    }
    div.K:hover {
        background-color: rgb(247, 247, 247);
        box-shadow: 0px 0px 3px black;
    }
    button {
        cursor: pointer;
    }
</style>
```

[Összes példa](/examples/webexamples/)
