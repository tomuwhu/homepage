<template>
    <div>
        <div v-for="(szd,key) in x">
            <b>{{ szd.creators[0].name.family }} {{ szd.creators[0].name.given }}</b> ({{szd.date}})
            <i>{{ szd.specialization }}:</i><br>
            {{ szd.title }}<hr>
        </div>
    </div>
</template>

<script>
    import data from 'raw-loader!./data.txt';
    export default {
        data() {
            return {
                x: JSON.parse( data )
            }
        },
    }
</script>