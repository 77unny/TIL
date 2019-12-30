// const M = {
//     v: 'v',
//     f: function() {
//         console.log(this.v);
//     }
// };
const PART = require('./m.js');
console.log(PART); // { v: 'v', f: [Function: f] }
PART.f();
