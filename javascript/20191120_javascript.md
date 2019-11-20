## javascript 

 ### 기본으로 복습 하고 시작

 - **array 배열 pop push unshift shift splice**
 - **array 배열 concat join split slice indexOf**
 - 터미널 cd ls mkdir rmdir touch
 - new 생성자 객체 만들기
 - 사칙 연산 계산기 만들기

 ```javascript
let arr = [1,2,3,4,5]
let arr1 = [1,2,3,4,5]
let arr2 = ['홍길동','김철수','김나미']
let str1 = 'Hello'
let str2 = 'world'

//기존 데이터가 변하지 않는 배열 concat,join,split,slice
let arrConcat = arr1.concat(arr2);
let strConcat = str1.concat(str2);
console.log(arrConcat)
console.log(strConcat)

let arrJoin = arr2.join('');
let strJoin = str1.split('').join('');
console.log(arrJoin)
console.log(strJoin)

let strSplit = str1.split('');
console.log(strSplit)

let arrSlice = arr1.slice(0,3);
let strSlice = str1.split('').slice(0,3);
console.log(arrSlice)
console.log(strSlice)

//기존 데이터가 변하는 배열 pop,push,unshift,shift,splice
let arrPop = arr.pop();
console.log(arrPop)

let arrPush = arr.push(6);
console.log(arrPush)

let arrUnshift = arr.unshift(0);
console.log(arrUnshift)

let arrShift = arr.shift();
console.log(arrShift)

//기타 indexOf
console.log(arr)
console.log(arr.indexOf(5));
 ```

 ```
cd : 경로이동
ls : 디렉토리 구조 확인
mkdir : 디렉토리 생성
rmdir : 디렉토리 제거
touch : 파일 생성
 ```
 ```javascript
/*
  생성자객체를 생성하여, 음식을 먹을때,운동을 할때 뭄무게 변화 하는걸 만들어보자.
*/
practice 참고
 ```

```javascript

```

**function hoisting / prototype hoisting ?**

> var 의 단점인 호이스팅 되는 현상을 let, const 로 사용된다.

prototype을 공부 하는 중에 궁금 사항이 생겼다.

```javascript
func();
const func = () => {
	console.log('a')
};
```

func() 를 찾을 수없다는 에러가 뜰것이다.

```javascript
//생성자 객체가 있다 가정하고
생성자.prototype.fun = function(){
	func();
}
const func = () => {
	console.log('a')
};

뉴생성자.fun();
```

실행이 잘된다. 하지만, 마찬가지로 호이스팅은 일어날수있다,

```javascript
//생성자 객체가 있다 가정하고
생성자.prototype.fun = function(){
	func();
}
뉴생성자.fun();
const func = () => {
	console.log('a')
};
```

생성자 내부에 있더라도 선언한 함수 위에 있을경우 마찬가지로 func()를 찾을 수 없다고 에러 메세지가 뜬다.