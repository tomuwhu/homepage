class X {
    static a = 5;
    f(b) {
        return b + X.a;
    }
}
var x = new X();
x.a=3;
console.log(
    x.f(4)
);
