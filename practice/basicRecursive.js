// 재귀 함수 연습

var foo = function(n) {
    console.log(n);
    if (n == 0) return;
    foo(n - 1);
};

const poo = function(n) {
    console.log(n);
    if (n === 0) return;
    poo(n - 1);
};

console.log(poo(10));

const rsum = (a, b) => {
    if (a > b) {
        return NaN;
    } else if (a == b) {
        return a;
    }
    return b + rsum(a, b - 1);
};

//test code
console.log(rsum(1, 1) === 1);
console.log(rsum(0, 0) === 0);
console.log(rsum(1, 2) === 3);
console.log(rsum(2, 10) === 54);
