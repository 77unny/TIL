let arr = [1,2,3,4,5]

// push() : 맨 끝 배열 추가
const arrPush = arr.push(6);
console.log(arr);
// pop() : 맨 끝 배열 제거
const arrPop = arr.pop();
console.log(arr);
// unshift() : 맨앞 배열 추가
const arrUnshift = arr.unshift(0);
console.log(arr);
// shift() : 맨앞 배열 제거
const arrShift = arr.shift()
console.log(arr);
// splice(a,b,c) : a번째에서 b갯수만큼 제거 또는 c로 변환
const arrSplice = arr.splice(1, 3);
console.log(arr);

let arr2 = [5, 4, 3, 2, 1];
let arr3 = 'Hello';

// concat() : 문자열, 배열을 이어 새로운 문자열 반환.
const arrConcat = arr3.concat(' World');
console.log(arrConcat);

// join() : 배열을 이어서 새로운 문자열 반환.
const arrJoin = arr2.join('');
console.log(arrJoin);
console.log(typeof(arrJoin));

// split() : 문자열을 나눠서 새로운 배열로 반환.
const arrSplit = arr3.split('');
console.log(arrSplit);
console.log(typeof(arrSplit));

// slice(a,b) : a번째와, 0에서부터시작하여 b갯수만큼 으로 이해하자
const arrSlice = arr2.slice(2, 4);
console.log(arrSlice);

