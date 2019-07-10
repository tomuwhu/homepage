# Hanoi probléma megoldása

## Pédaprogram

[Futtatás](/examples/algoexamples/Hanoi.html)

## A megoldás matematikai modellje

![képlet](/~tnemeth/hanoi.png)

<!--
$h(n,a,b)=$

- ha $n=1$, akkor:  &nbsp; $a$ &#10137; $b$,
- egyébként: $h(n-1, a, 6-a-b)$,  &nbsp; $a$ &#10137; $b$, &nbsp; $h(n-1, 6-a-b, b)$
-->

## A problémát megoldó JS függvény

```js
const h = ( a, b, n ) => (
    n < 2
        ? `${ a } -> ${ b }`
        : `${ h( a, 6-a-b, n-1 ) },
           ${ a } -> ${ b },
           ${ h( 6-a-b, b, n-1 ) }`
);
```

## A futtatható példa forrása

<<< @/docs/.vuepress/components/Hanoi.vue
