<template>
  <div id="app">
    <select v-model="enc" @change="f()">
      <option>UTF-8</option>
      <option>ISO-8859-2</option>
    </select>
    <input ref="mf" @change="f()" type="file">
    <pre><code>{{ x }}</code></pre>
  </div>
</template>

<script>
export default {
  data() {
    return {
      x: "", enc: "ISO-8859-2"
    };
  },
  methods: {
    f() {
      var reader = new FileReader();
      reader.onload = e => {
        this.x = e.target.result;
      }
      reader.readAsText(
        this.$refs.mf.files[0], 
        this.enc
      );
    }
  }
};
</script>