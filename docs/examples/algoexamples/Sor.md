## Sor adatszerkezet JS Osztály

```javascript
class ML {
    push( k ) {
        if (this.e) this.e.n = this.e = { k } 
        else this.b = this.e = { k }
    }
    shift() {
        if ( this.pv = this.b) {
            this.b = this.b.n
            return this.pv.k
        }
    }
    forEach( f ) {
        let e = this.b, i = 0
        while (e) f( e.k, i++, e ), e = e.n
    }
}
 
const ml = new ML()
```