<template>
    <div>
        <div id="mynetwork"></div>
    </div>
</template>

<script>
import vis from 'vis'
var nodes, edges, container, data, options, network
function drawgraph(p1, p2) {
  nodes = new vis.DataSet(p1)
  edges = new vis.DataSet(p2)
  container = document.getElementById('mynetwork')
  data = { nodes, edges }
  options = {
    nodes: {
      shape: 'box',
      fixed: false,
      font: {
        color: '#343434',
        size: 11, // px
        face: 'Niramit',
        background: 'none',
        strokeWidth: 0, // px
        strokeColor: '#ffffff',
        align: 'center',
        multi: false,
        vadjust: 0
      },
      color: {
        border: '#C01C59',
        background: '#17B27C',
        highlight: {
          border: '#2B7CE9',
          background: '#D2E5FF'
        },
        hover: {
          border: '#2B7CE9',
          background: '#D2E5FF'
        }
      }
    },
    edges: {
      arrows: {
        to: {enabled: true, scaleFactor:  0.8, type:'arrow'}
      },
      arrowStrikethrough: false,
      chosen: true,
      color: {
        color:'#bd4576',
        highlight:'#ed4576',
        hover: '#848484',
        inherit: 'from',
        opacity: 1
      },
      dashes: false
    }
  }
  network = new vis.Network(container, data, options)
}
export default {
    mounted() {
        edges = [ { from: '1', to: '2' } ];
        nodes= [ { id: '1', label: 'cica' }, { id: '2', label: 'maci' } ]
        drawgraph(nodes, edges);
    }
}
</script>

<style lang="scss">
    div#mynetwork {
        height:500px;
        border: solid 1px black;
        border-radius:10px;
        box-shadow: 0 0 4px black;
    }
</style>