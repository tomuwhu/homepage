<template>
  <div id="app">
    <div id="xx">
        <textarea v-model="text"></textarea>
        <br>
        <br>
        <a  id="ax"
            v-if="text.length"
            download="ment.txt"
            :href="`data:text/plain;charset=utf-8,${ encodeURIComponent(text) }`"
            >Letöltés szövegfájlként (ment.txt)</a>
        <hr>
    </div>
  </div>
</template>

<script>
export default {
  data() { return { text: "" } }
};
</script>

<style>
div#xx {
    text-align: center;
}
a#ax {
    margin: 7px;
    padding:6px;
    box-shadow: 1px 1px 3px black;
    border-radius: 5px;
    background-color: #edface;
    font-weight: bold;
}
a#ax:hover {
    text-decoration: none;
    background-color: #b3c687;
    box-shadow: 1px 1px 1px rgb(114, 114, 114);
    color: aliceblue;
    text-shadow: 0px 0px 6px black;
}
textarea {
    width: 700px;
    height: 200px;
    font-size: 16px;
}
</style>
