<template>
  <div id="app">
    <table v-if="mode">
      <tr>
        <td>E-mail cím:</td>
        <td>
          <input placeholder="E-mail cím" v-model="o.email">
        </td>
      </tr>
      <tr>
        <td>Neve:</td>
        <td>
          <input placeholder="Név" v-model="o.name">
        </td>
      </tr>
      <tr>
        <td>Született:</td>
        <td>
          <input type="date" v-model="o.i1">
        </td>
      </tr>
      <tr>
        <td>Neme:</td>
        <td>
          <input name="x" type="radio" value="Férfi" v-model="o.i2">
          <input name="x" type="radio" value="Nő" v-model="o.i2">
        </td>
      </tr>
      <tr>
        <td>Kedvenc színe:</td>
        <td>
          <input type="color" v-model="o.ksz">
        </td>
      </tr>
      <tr>
        <td colspan="2" class="c">
          <button @click="f()" :disabled="!(o.email && o.i1 && o.name && o.i2)">Ment</button>
          <button @click="o={},mode=0">Mégse</button>
        </td>
      </tr>
    </table>
    <table v-if="!mode">
      <tr v-for="(sor,i) in Array.from(t)" :key="sor.email">
        <td>{{ i+1 }}.</td>
        <td :style="'color: '+sor[1].ksz">{{ sor[0] }}</td>
        <td :style="'background-color: '+sor[1].ksz">{{ sor[1].name }}</td>
        <td>{{ sor[1].i1 }}</td>
        <td class="c">{{ sor[1].i2 }}</td>
        <td class="katt c" @click="o=t.get(sor[0]),mode=2">&#9999;</td>
        <td class="katt c" @click="torol(sor[0])">&#10799;</td>
      </tr>
      <tr>
        <td colspan="7"
            class="c">
            <button @click="mode=1">Új elem</button>
        </td>
      </tr>
    </table>
  </div>
</template>
 
<script>
export default {
  name: "App",
  data() {
    return {
      o: {},
      t: new Map(),
      mode: 0
    };
  },
  mounted(){
    var ldb = localStorage.getItem('db')
    if (ldb) {
      this.t = new Map()
       JSON.parse( ldb ).forEach( v => {
        this.t.set(v[0],v[1])
       })
    }
  },
  methods: {
    torol(mit) {
      this.t.delete(mit)
      this.$forceUpdate()
      localStorage.setItem('db',JSON.stringify(Array.from(this.t)))
    },
    f() {
      if (this.mode===1) {
        if (this.t.has(this.o.email)) {
          alert("van már ilyen e-mail cím");
        } else {
          this.t.set(this.o.email, this.o);
          this.o = {};
          //this.$forceUpdate();
          this.mode=0
        }
      } else {
          this.t.set(this.o.email, this.o);
          this.o = {};
          this.mode=0
      }
      localStorage.setItem('db',JSON.stringify(Array.from(this.t)))
    }
  }
};
</script>
<style>
td.katt {
  cursor: pointer;
}
td.katt:hover {
  text-shadow:1px 1px 3px black;
  color:red;
}
td.c {
  text-align: center;
}
</style>