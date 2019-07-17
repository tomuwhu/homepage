<template>
    <div id="conta">
        <select v-model="type">
            <option value="1">Verem</option>
            <option value="2">Sor</option>
            <option value="3">Prioritási sor</option>
        </select>
        <hr>
        <h3></h3>
        <input  v-model="elem"
                v-if="type==1"
                @keyup.enter="verem.put(elem),elem=''"
                placeholder="Betesz a verembe" />
        <input  v-model="elem"
                v-if="type==2"
                @keyup.enter="sor.put(elem),elem=''"
                placeholder="Betesz a sorba" />
        <input  v-model="elem"
                v-if="type==3"
                @keyup.enter="prisor.put(elem),elem='',rajz()"
                placeholder="Betesz a prioritási sorba" />
        <br>
        <button v-if="type==1 && verem.size"
                @click="kivett.push(verem.get())"
                >Kivesz a veremből</button>
        <button v-if="type==2  && sor.size"
                @click="kivett.push(sor.get())"
                >Kivesz a sorból</button>
        <button v-if="type==3  && prisor.size"
                @click="kivett.push(prisor.get()),rajz()"
                >Kivesz a prioritási sorból</button>
        <hr>
        <table class="s">
            <tr><th>Konténerek</th></tr>
            <tr v-for="(container,i) in [
                verem.container,
                sor.container,
                prisor.container,
                kivett
            ]">
                <td><b>{{ aszlist[i] }}</b></td>
                <td v-for="elem in container"
                    class="sor">{{ elem }}</td>
            </tr>
        </table>
        <span v-if="prisor.container.length>1 && 
                    prisor.container.length<100">
            <br>
            <div><b>Kupac ábrázolása:</b></div>
            <br>
            <div id="mynetwork"></div>
        </span>
        <hr>
        <a href="Adatszerk_forras.html">Forráskód</a>
    </div>
</template>

<script>
import vis from 'vis'
var nodes=[], edges=[], container, data, options, network
function drawgraph(p1, p2) {
  nodes = new vis.DataSet(p1)
  edges = new vis.DataSet(p2)
  container = document.getElementById('mynetwork')
  data = { nodes, edges }
  options = {
    layout: {
        hierarchical: {
            sortMethod: "directed"
        }
    },
    nodes: {
      shape: 'box',
      fixed: true,
      font: {
        color: '#000',
        size: 36, // px
        face: 'Niramit',
        background: 'none',
        strokeWidth: 0, // px
        strokeColor: '#ffffff',
        align: 'center',
        multi: false,
        vadjust: 0
      },
      color: {
        border: '#333333',
        background: 'rgb(190, 237, 242)',
        highlight: {
          border: '#2B7CE9',
          background: '#42B5BF'
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
        color:'#444444',
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
class Stack {
    constructor() {
        this.container = [], this.size = 0
    }
    put(x) {
        if (Array.isArray(x)) {
            x.forEach(element => {
                this.container.push(element), 
                this.size++
            })
        } else {
            this.container.push(x), this.size++
        } //O(1)
    }
    get() { // O( 1 )
        if (this.size) {
            this.size--
            return this.container.pop() // O( 1 )
        } else return null
    }
    check() {
        return this.container[0] // O( 1 )
    }
    toarray() { // O( n * get() )
            let rv = []
            while (this.size) 
                rv.push(this.get())
            return rv
        }
        [Symbol.iterator]() { // O( n * get() )
            return {
                next: () => {
                    if (this.size > 0) {
                        return {
                            value: this.get(),
                            done: false
                        }
                    } else {
                        return {
                            done: true
                        }
                    }
                }
            }
        }
}
class BadQueue extends Stack {
    constructor() {
        super()
        this.offset = 0
    }
    get() { // O( n )
        if (this.size) {
            this.size--
            return this.container.shift() // O( n )
        } else return null
    }
}
class Queue extends Stack {
    constructor() {
        super()
        this.offset = 0
    }
    get() { // O( 1 )
        if (this.size) {
            this.size--
            let elem = this.container[this.offset++]
            if (this.offset * 2 >= this.container.length) {
                this.container = this.container.slice(this.offset)
                this.offset = 0
            }
            return elem // O( 1 )
        } else return false
    }
    check() {
        return this.container[this.offset] // O( 1 )
    }
}
class PQueue extends Stack {
    put(x) { // O(1) / element
        if (Number(x)==x) x=Number(x)
        if (Array.isArray(x)) {
            x.forEach(element => {
                this.container.push(element), this.fix(this.size++)
            })
        } else {
            this.container.push(x), this.fix(this.size++)
        }
    }
    get() { // O(log n)
        if (this.size) {
            let ret = this.container[0]
            if (--this.size) {
                this.container[0] = this.container.pop()
                this.fixup(0)
            } else this.container.pop()
            return ret
        } else return null
    }
    fixup(p) { // O(log n)
        let q1 = ( p + 1 ) * 2 ,
            q2 = q1 - 1,
            q = 0
        if (q1 > this.size + 2) q1 = p
        if (q2 > this.size + 2) q2 = q1
        this.container[q1] > this.container[q2] ? q = q1 : q = q2
        console.log(this.container[q1],this.container[q2],q)

        if (p != q) {
            this.cshn(q, p), this.fixup(q)
        }
    }
    fix(p) { // O(log n)
        let q = Math.round( (p+1) / 2 - 0.4 ) - 1
        this.cshn(p, q)
        if (q > 0) this.fix(q)
    }
    cshn(a, b) { // O(1)
        if ( this.container[a] > this.container[b] )
        [ this.container[a], this.container[b] ] =
        [ this.container[b], this.container[a] ]
    }
}
export default {
    data: () => ({
        aszlist: ['verem','sor','prioritási sor','helyi konténer'],
        type: 3,
        elem: '',
        kivett: [],
        verem: new Stack,
        sor: new BadQueue,
        prisor: new PQueue,
        nodes, edges
    }),
    methods: {
        rajz() {
            nodes=[];
            edges=[];
            this.prisor.container.forEach( (v,i) => {
                nodes.push({ id: i+1, label: `${ v }` })
            } ); 
            this.kupac(1);
            if (nodes.length>2 && edges.length)
                drawgraph(nodes, edges );
            this.nodes=nodes;
            this.edges=edges;
        },
        kupac(i) {
            if (2*i<=nodes.length) {
                edges.push( { from: i, to: 2*i } );
                this.kupac(2*i)
            };
            if (2*i<nodes.length) {
                edges.push( { from: i, to: 2*i+1 } );
                this.kupac(2*i+1)
            };
        }
    }
}
</script>

<style lang="scss" scoped>
div#conta {
    input {
        font-size: 20px;
        padding: 5px;
        width: 250px;
    }
    select {
        font-size: 20px;
        width: 250px;
    }
    button {
        font-size: 20px;
        width: 250px;
    }
    table.s {
        border-collapse: separate;
        border-spacing: 10px;
        border:solid 1px #123456;
        td {
            background-color: rgb(190, 237, 242);
            border: solid 1px black;
            border-radius: 4px;
            font-size: 18px;
            padding: 5px;
        }
    }    
    div#mynetwork {
        height:500px;
        border: solid 1px black;
        border-radius:10px;
        box-shadow: 0 0 4px black;
    }
}
</style>