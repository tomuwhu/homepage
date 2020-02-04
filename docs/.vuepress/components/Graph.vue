<template>
  <div id="app">
    <button v-if="!rr" @click="add()">Cica</button>
    <br><br>
    <div class="c" ref="nw"></div>
  </div>
</template>

<script>
import vis from "vis";
var nodes = new vis.DataSet([
  { id: 1, label: "1. pont" },
  { id: 2, label: "2. pont" },
  { id: 3, label: "3. pont" },
  { id: 4, label: "4. pont" },
  { id: 5, label: "5. pont" }
]);
var edges = new vis.DataSet([
  { from: 1, to: 3 },
  { from: 1, to: 2 },
  { from: 2, to: 4 },
  { from: 2, to: 5 },
  { from: 3, to: 2 }
]);
var data = {
  nodes: nodes,
  edges: edges
};
var options = {};
export default {
  name: "App",
  data() {
    return {
      rr: false
    }
  },
  mounted() {
    new vis.Network(this.$refs.nw, data, options);
  },
  methods: {
    add() {
      nodes.add({ id: 6, label: "cica" });
      edges.add({ from: 3, to: 6 })
      edges.add({ from: 2, to: 6 })
      this.rr = true
    }
  }
};
</script>

<style scoped>
#app {
  text-align: center;
}
div.c {
  width: 720px;
  height: 400px;
}
</style>