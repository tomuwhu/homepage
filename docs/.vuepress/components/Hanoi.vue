<template>
    <div class="main">
        <div class=i>
            <input @keyup="hanoi()" v-model.number=a label="a" />
            <input @keyup="hanoi()" v-model.number=b label="b" />
            <input @keyup="hanoi()" v-model.number=n label="n" />
        </div>
        <br>
        <hr>
        <div class="co" :id="windowWidth>600?'so':(windowWidth>300?'ko':'mo')">
                <div :id="i" @click="rak(elem,i)" :key=i v-for="(elem,i) in mo.split(',')">{{ elem }}</div>
        </div>
        <hr>
        <div class=i>
            <table>
                <td v-for="oszlop in t" :style="`height: ${n*27}px; width:20px;`" >
                    <div  v-for="korong in oszlop">{{korong}}</div>
                </td>
            </table>
        </div>
    </div>
</template>
<script>
import { vueWindowSizeMixin } from 'vue-window-size'
const h = ( a, b, n ) => (
    n < 2
        ? `${ a } -> ${ b }`
        : `${ h( a, 6-a-b, n-1 ) },${ a } -> ${ b },${ h( 6-a-b, b, n-1 ) }`
)
export default {
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
            if (this.a>3) this.a=3
            if (this.a<1) this.a=1
            if (this.b>3) this.b=3
            if (this.b<1) this.b=1
            if (this.a===this.b) this.a=this.a===3?2:3
            this.t[this.a-1]=Array(this.n).fill(0).map((v,i) => this.n-i+2)
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

<style lang=scss scoped>
    div.main {
        div.i {
            text-align: center;
        }
        margin: 50px;
        input {
            width: 30px;
            font-size: 16px;
            text-align: center;
            margin: 3px;
            border-radius: 9px;
            border: none;
            box-shadow: 0px 0px 3px black;
        }
        div.co {
            text-align: center;
            width: 100%;
            display: grid;
            grid-column-gap: 10px;
            grid-row-gap: 10px;
            div {
                white-space: nowrap;
                background-color: rgb(182, 191, 199);
                padding: 4px;
                margin: 4px;
                cursor:pointer;
                user-select: none;
                box-shadow: 1px 1px 3px black;
                border-radius: 5px;
            }
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
            border-collapse: separate;
            margin: 0 auto;
            width:200px;
            border-spacing: 10px;
        }
        td {
            text-align:center ;
            vertical-align: top;
            box-shadow: 1px 1px 3px black;
            border-radius: 5px;
            div {
                box-shadow: 1px 1px 3px black;
                border-radius: 5px;
                padding :4px;
                background-color: rgb(111, 220, 218);
                color: rgb(77, 19, 23);
                text-shadow: 1px 1px 2px black;
            }
        }
    }
</style>