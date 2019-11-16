let Foo = function (name,pow,att) {
    this.name = name;
    this.hp = 100;
    this.pow = pow;
    this.att = function (target) {
        target.hp -= this.pow;
    }
}


// prototype
// let Foo = function (name,pow) {
//     this.name = name;
//     this.hp = 100;
//     this.pow = pow;
// }
// Foo.prototype.att = function (target) {
//     target.hp -= this.pow
// };

let a = new Foo('홍길동',20);
let b = new Foo('김철수',10);
let c = new Foo('나비야',10);

a.att(b);
console.log(b);