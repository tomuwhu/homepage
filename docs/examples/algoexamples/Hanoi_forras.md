# Hanoi probléma megoldása

h(n,a,b)=

- ha n=1 , akkor: a &#10137; b,
- egyébként: h(n-1, a, 6-a-b), a &#10137; b, h(n-1, 6-a-b, b)

```javascript
const h = ( a, b, n ) => (
    n < 2
        ? `${ a } -> ${ b }`
        : `${ h( a, 6-a-b, n-1 ) },
           ${ a } -> ${ b },
           ${ h( 6-a-b, b, n-1 ) }`
)
```
