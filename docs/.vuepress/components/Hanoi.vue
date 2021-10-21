<template>
    <div class="main" name=hanoi>
        <div class=i>
            <select v-model.number="a" @change="hanoi()">
                <option v-for="i in 3">{{i}}</option>
            </select>
            <select v-model.number="b" @change="hanoi()">
                <option v-for="i in 3">{{i}}</option>
            </select>
            <select v-model.number="n" @change="hanoi()">
                <option v-for="i in 13">{{i}}</option>
            </select>
        </div>
        <br>
        <hr>
        <div class="co"
             :id="windowWidth>600
                    ?'so'
                    :(windowWidth>300?'ko':'mo')">
                <div class="co" v-if="elem!='! ! ! ! !'"
                     :id="i" @click="rak(elem,i)"
                     :key=i v-for="(elem,i) in mo.split(',')"
                     >{{ elem }}</div>
        </div>
        <hr>
        <div class=i>
            <table>
                <td v-for="oszlop in t"
                    :style="`height: ${n*30+10}px;`">
                    <div class="intd" v-for="korong in oszlop"
                    >{{korong}}</div>
                </td>
            </table>
        </div>
        <br>
        <hr>
        <a href="/~tnemeth/examples/algoexamples/Hanoi_forras.html"
           >Forráskód</a>
    </div>
</template>
<script>
import { vueWindowSizeMixin } from 'vue-window-size'
const h = ( a, b, n ) => (
    n < 2
        ? `${ a } -> ${ b }`
        : `${ h( a, 6-a-b, n-1 ) },
           ${ a } -> ${ b },
           ${ h( 6-a-b, b, n-1 ) }`
)
export default {
    name: 'hanoi',
    mixins: [vueWindowSizeMixin],
    data: () => ({
        a:1, b:2, n:3, mo: '',
        t: [[],[],[]]
    }),
    methods: {
        rak(x,i) {
            let jt=this.mo.split(',')
            jt[i]="! ! ! ! !"
            this.mo=jt.join(',')
            var [i,j]=x.split(' -> ')
            var le = this.t[i-1].pop()
            if ( le!==undefined ) this.t[j-1].push( le )
            this.$forceUpdate()
        },
        hanoi() {
            if (this.a==this.b) {
                this.a=1
                this.b=2
            }
            this.t[this.a-1]=Array(this.n)
                                .fill(0)
                                .map((v,i) => this.n-i)
            this.t[this.b-1]=[]
            this.t[6-this.a-this.b-1]=[]
            this.mo = this.n<14?h(this.a, this.b, this.n):'túl nagy az n'
        }  
    },
    mounted() {
       this.hanoi()
    }
}
</script>

<style scoped>
div.main {
    text-align: center;
    margin: 50px;
}
div.i {
    text-align: center;
}
select {
    width: 50px;
    font-size: 16px;
    margin: 3px;
    border-radius: 9px;
    border: none;
    box-shadow: 0px 0px 3px black;
}
div.co {
    text-align: center;
    display: grid;
    grid-column-gap: 10px;
    grid-row-gap: 10px;
}
div.co {
    white-space: nowrap;
    background-color: rgb(182, 191, 199);
    padding: 6px;
    margin: 4px;
    cursor:pointer;
    user-select: none;
    box-shadow: 1px 1px 3px black;
    border-radius: 5px;
}
div#so {
    grid-template-columns: repeat(7,auto);
}
div#ko {
    grid-template-columns: repeat(3,auto);
}
div#mo {
    grid-template-columns: repeat(2,auto);
}
table {
    text-align: center;
    border-collapse: separate;
    margin: 0 auto;
    display: table;
    border-spacing: 10px;
}
td {
    width: 50px;
    text-align:center ;
    vertical-align: top;
    box-shadow: 1px 1px 3px black;
    border-radius: 5px;
    background-color: rgb(164, 208, 207);
}
div.intd {
    box-shadow: 1px 1px 3px black;
    border-radius: 5px;
    padding :4px;
    margin: 4px;
    background-color: rgba(111, 220, 218, 90);
    color: rgb(77, 19, 23);
    text-shadow: 1px 1px 2px black;
}
</style>