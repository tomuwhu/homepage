<template>
  <div class="center">
    <table id="main">
      <tr class="a" v-for="(row,i) in x" :key="i">
        <td
          v-for="(cell,j) in row"
          :key="j"
          @click="katt(i,j)"
          class="a"
          :id="cell?'x':'y'"
          >{{ cell ? cell : '' }}</td>
      </tr>
    </table>
    <h2 v-if="x.map( v => v.join('')).join('') === alap" >
        Sikeres!
    </h2>
  </div>
</template>
 
<script>
var n = 3,
    np = { x: 0, y: 0 }
export default {
  data() {
    return {
      x: Array(n)
            .fill(0)
            .map((v, i) =>
                Array(n)
                    .fill(0)
                    .map((u, j) => n * i + j)
            ),
      n
    };
  },
  methods: {
    katt(i, j) {
      if (Math.abs(i - np.y) + Math.abs(j - np.x) === 1) {
        this.x[np.y][np.x] = this.x[i][j];
        this.x[i][j] = 0;
        this.$forceUpdate();
        np.y = i;
        np.x = j;
      }
    },
    kever() {
      var i;
      for (i = 1; i < 10 * n ** 2; i++) {
        var ir = Math.round(Math.random() * 4);
        if (ir === 0) {
          if (this.x[np.y][np.x + 1]) {
            let csv = this.x[np.y][np.x + 1];
            this.x[np.y][np.x + 1] = this.x[np.y][np.x];
            this.x[np.y][np.x] = csv;
            np.x++;
          }
        }
        if (ir === 1) {
          if (this.x[np.y][np.x - 1]) {
            let csv = this.x[np.y][np.x - 1];
            this.x[np.y][np.x - 1] = this.x[np.y][np.x];
            this.x[np.y][np.x] = csv;
            np.x--;
          }
        }
        if (ir === 2) {
          if (this.x[np.y + 1]) {
            let csv = this.x[np.y + 1][np.x];
            this.x[np.y + 1][np.x] = this.x[np.y][np.x];
            this.x[np.y][np.x] = csv;
            np.y++;
          }
        }
        if (ir === 3) {
          if (this.x[np.y - 1]) {
            let csv = this.x[np.y - 1][np.x];
            this.x[np.y - 1][np.x] = this.x[np.y][np.x];
            this.x[np.y][np.x] = csv;
            np.y--;
          }
        }
      }
      this.$forceUpdate();
    }
  },
  computed: {
      alap() {
          return Array( n**2 ).fill( 0 ).map( (v,i) => i ).join('')
      }
  },
  mounted() {
    this.kever();
  }
};
</script>

<style>
div.center {
    text-align: center;
}
tr.a {
  background: transparent;
}
td.a {
  border: none;
  padding: 2px;
  font-size: 26px;
  width: 50px;
  height: 50px;
  text-align: center;
  user-select: none;
}
td#x {
  color: rgb(243, 245, 218);
  text-shadow: 0px 0px 5px rgb(0, 0, 0);
  background-color: rgb(101, 148, 148);
  cursor: pointer;
  border-radius: 16px;
  box-shadow: 1px 1px 2px black;
}
table#main {
    margin-left: 37%;
    border-collapse: separate;
    border-spacing: 6px;
}
</style>