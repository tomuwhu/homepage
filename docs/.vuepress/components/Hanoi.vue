<template>
    <div class="main">
        <div class=i>
            <input @keyup="hanoi()" v-model.number=a label="a" />
            <input @keyup="hanoi()" v-model.number=b label="b" />
            <input @keyup="hanoi()"v-model.number=n label="n" />
        </div>
        <br>
        <hr>
        <div class="co" :id="windowWidth>600?'so':(windowWidth>300?'ko':'mo')" v-html=mo />
    </div>
</template>
<script>
import { vueWindowSizeMixin } from 'vue-window-size'
const sty = `   white-space: nowrap;
                background-color: rgb(182, 191, 199);
                padding: 4px;
                margin: 4px;
                box-shadow: 1px 1px 3px black;
                border-radius: 5px; ` 
const h = ( a, b, n ) => (
    n < 2
        ? `<div style="${sty}">${ a } -> ${ b }</div> `
        : `${ h( a, 6-a-b, n-1 ) } <div style="${sty}">${ a } -> ${ b }</div> ${ h( 6-a-b, b, n-1 ) }`
)
export default {
    mixins: [vueWindowSizeMixin],
    data: () => ({
        a:1, b:2, n:3, mo: 0
    }),
    methods: {
        hanoi() {
            if (this.a>3) this.a=3
            if (this.a<1) this.a=1
            if (this.b>3) this.b=3
            if (this.b<1) this.b=1
            if (this.a===this.b) this.a=this.a===3?2:3
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
    }
</style>