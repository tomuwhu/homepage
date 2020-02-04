<template>
    <div>
        <canvas ref="cc"></canvas>
        <button id="katt" @click="cd()">Módosít</button>
    </div>
</template>
<script>
import Chart from 'chart.js'
var gs = { }
var config = {
    type: 'line',
    data: {
        labels: [1,2,3,4,6,7,8],
        datasets: [{
            label: 'Módosított',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            data: [0, 10, 5, 2, 20, 30, 45]
        },
        {
            label: 'Eredeti',
            backgroundColor: 'rgba(39, 135, 152, 0.2)',
            borderColor: 'rgba(39, 135, 152, 1)',
            data: [0, 10, 5, 2, 20, 30, 45]
        }]
    },
    options: {}
}
export default {
    name: 'Diagram',
    mounted() {
        gs.cc = new Chart(
            this.$refs.cc.getContext('2d'),
            config
        )
    },
    methods: {
        cd() {
            Array(20).fill(0).map( () =>
                config.data.datasets[0].data[
                    Math.round( Math.random() * 7 )
                ] += 5 - Math.random() * 10
            )
            gs.cc.update(config)
        }
    }
}
</script>
<style scoped>
div {
    text-align: center;
}
button#katt {
    box-shadow: 1px 1px 3px black;
    user-select: none;
    cursor: pointer;
    border-radius: 4px;
}
</style>