

let arrNum = [1, 2, 3, 4, 5];

let arrPop = [1, 2, 3, 4, 5];
let arrPush = [1, 2, 3, 4, 5];
let arrShift = [1, 2, 3, 4, 5];
let arrUnshift = [1, 2, 3, 4, 5];
let arrSplice = [1, 2, 3, 4, 5];

let arrConcat = 'Hello';
let arrString = 'SplitMethod';
let arrSlice = [1,2,3,4,5]

/*
* 배열 매소드
* 원본을 변하게 하는 메소드 pop / push / shift / unshift / splice
* 원본을 변하게 하지 않는 메소드 concat / split / join / slice
* */

let popMethod = arrPop.pop();
let pushMethod = arrPush.push(6);
let shiftMethod = arrShift.shift();
let unshiftMethod = arrUnshift.unshift(0);
let spliceMethod = arrSplice.splice(1,2);

let concatMethod = arrConcat.concat(' World');
let splitMethod = arrString.split('');
let joinMethod = splitMethod.join('');
let sliceMethod = arrSlice.slice(2,4);
console.log(`===========================`);
console.log(`원본을 변형하는 배열 메소드 출력`);
console.log(`===========================`);
console.log(`pop() 메소드 : ${popMethod} / 원본 : ${arrPop} / 설명 : 원본 배열에서 맨뒤 제거하고 그요소 반환`);
console.log(`push() 메소드 : ${pushMethod} / 원본 : ${arrPush} / 설명 : 원본 배열에서 맨뒤 추가하고 그 요소 반환`);
console.log(`shift() 메소드 : ${shiftMethod} / 원본 : ${arrShift} / 설명 : 원본 배열에서 맨앞 제거하고 그 요소 반환`);
console.log(`unshift() 메소드 : ${unshiftMethod} / 원본 : ${arrUnshift} / 설명 : 원본 배열에서 맨앞 추가하고 총 길이 반`);
console.log(`splice() 메소드 : ${spliceMethod} / 원본 : ${arrSplice} / 설명 : a번째에서 a기준 b번째 만큼 제거 하고 그요소 반환`);
console.log(`===========================`);
console.log(`원본을 유지하는 배열 메소드 출력`);
console.log(`===========================`);
console.log(`concat() 메소드 : ${concatMethod} / 원본 : ${arrConcat} / 설명 : 원본을 유지하고 붙여서 새롭게 반환`);
console.log(`split() 메소드 : ${splitMethod} / 원본 : ${arrString} / 설명 : 원본을 유지하고 문자열을 배열로 새롭게 반환`);
console.log(`join() 메소드 : ${joinMethod} / 원본 : ${splitMethod} / 설명 : 원본을 유지하고 배열을 문자열로 새롭게 반환`);
console.log(`slice() 메소드 : ${sliceMethod} / 원본 : ${arrSlice} / 설명 : 원본을 유지하고 a번째부터 b번째의 바로 앞을 새롭게 반환`);


