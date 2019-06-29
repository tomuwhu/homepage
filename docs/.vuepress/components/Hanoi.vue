<template>
    <div>
        <input @keyup="hanoi()" v-model.number=a label="a" />
        <input @keyup="hanoil()" v-model.number=b label="b" />
        <input @keyup="hanoi()"v-model.number=n label="n" />
        <div v-html=mo />
    </div>
</template>
<script>
const h = ( a, b, n ) => (
    n < 2
        ? `${ a } -> ${ b }`
        : `${ h( a, 6-a-b, n-1 ) },
           ${ a } -> ${ b },
           ${ h( 6-a-b, b, n-1 ) }`
)
export default {
    data: () => ({
        a:1, b:2, n:3, mo: 0
    }),
    methods: {
        hanoi() {
            this.mo = this.n<14?h(this.a, this.b, this.n):'túl nagy az n'
        }  
    },
    mounted() {
       this.hanoi()
    }
}
</script>
<style lang=scss scoped>
    div {
        margin: 50px;
        input {
            width: 50px;
            font-size: 16px;
        }
        button {
            font-size: 16px;
        }
    }
</style>