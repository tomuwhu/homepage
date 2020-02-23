## Verem adatszerkezet JS Objektum

```javascript
let ml = {
    push( k ) {
        this.begin = { key: k, next: this.begin }
    },
    pop() {
        if ( this.pv = this.begin ) {
            this.begin = this.begin.next
            return this.pv.key
        }
    },
    forEach( f ) {
        let e = this.begin, i = 0
        while (e) f( e.key, i++, e ), e = e.next
    }
}

ml.push(1); ml.push(2); ml.push(3); ml.pop()
console.log( ml )
ml.forEach( v => console.log(v) )
```

## Verem adatszerkezet JS Osztály

```javascript
class ML {
    push( k ) {
        this.begin = { key: k, next: this.begin }
    }
    pop() {
        if ( this.pv = this.begin) {
            this.begin = this.begin.next
            return this.pv.key
        }
    }
    forEach( f ) {
        let e = this.begin, i = 0
        while (e) f( e.key, i++, e ), e = e.next
    }
}
const ml = new ML
ml.push(1); ml.push(2); ml.push(3); ml.pop()
console.log( ml )
ml.forEach( v => console.log(v) )
```