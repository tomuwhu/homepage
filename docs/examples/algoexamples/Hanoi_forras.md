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

<<< @/docs/.vuepress/components/Hanoi.vue
