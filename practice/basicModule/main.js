// const M = {
//     v: 'v',
//     f: function() {
//         console.log(this.v);
//     }
// };
const PART = require('./m.js');
console.log(PART); // { v: 'v', f: [Function: f] }
PART.f();

const {Foo} = require('./foo');
const {Poo} = require('./classStatic')
const foo = new Foo('푸');
foo.print();
Poo.print(); // class 객체에서 static 으로 선언시 new 함수 사용안하여도 사용 가능
