<template>
    <div>
        <input @keyup="f">
    </div>
</template>

<script>
const szt = [
    'Binomiális',
    'Fibonacci',
    ''
]
export default {

    methods: {
        f(e) {
            console.log(e.key);
        }
    }
}
</script>

<style lang="scss" scoped>

</style>