<template>
  <div id="appdd">
    <draggable
        class="cont"
        v-model="t"
        @change="log"
        animation="150">
      <div 
        class="a"
        v-for="element in t"
        :key="element.id">
          {{element.name}}
      </div>
    </draggable>
    <hr>
    <span v-for="(e,i) in l"
          :key="i">
      ({{ e.from }}⇒{{ e.to }})
    </span>
    <hr>
      {{ t.map( v => v.name).join(", ") }}
  </div>
</template>

<script>
import draggable from "vuedraggable";
export default {
  components: { draggable },
  data() {
    return {
      t: [
        { id: 1, name: "alma" }, { id: 7, name: "egres" },
        { id: 2, name: "narancs" }, { id: 8, name: "cseresznye" },
        { id: 3, name: "banán" }, { id: 9, name: "ananász" },
        { id: 4, name: "körte" }, { id: 10, name: "mandarin" },
        { id: 5, name: "meggy" }, { id: 11, name: "füge" },
        { id: 6, name: "szilva" }, { id: 12, name: "őszibarack" },
      ],
      l: []
    };
  },
  methods: {
    log(e) {
      this.l.push({
           from: e.moved.oldIndex+1,
           to: e.moved.newIndex+1
      })
    }
  }
};
</script>

<style>
.cont {
  width: 200px;
  text-align: center;
  margin: 10px auto;
  padding: 10px;
  box-shadow: 1px 1px 3px black;
  background-color: rgb(218, 218, 201);
  border-radius: 10px;
}
div#appdd {
    text-align: center;
}
div.a {
  user-select: none;
  border-radius: 6px;
  box-shadow: 1px 1px 3px black;
  display: block;
  cursor: grab;
  margin: 6px;
  padding: 7px;
  background-color: rgb(200, 225, 216);
  text-shadow: 1px 1px 3px rgb(85, 85, 85);
  color: rgb(48, 36, 28);
}
</style>
