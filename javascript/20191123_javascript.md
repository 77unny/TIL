## javascript

### 기본으로 복습 하고 시작

- **array 배열 pop push unshift shift splice**
- **array 배열 concat join split slice indexOf**
- 터미널 cd ls mkdir rmdir touch
- new 생성자 객체 만들기
- 사칙 연산 계산기 만들기

```javascript
let arr = [1, 2, 3, 4, 5];
let arr1 = [1, 2, 3, 4, 5];
let arr2 = ["홍길동", "김철수", "김나미"];
let str1 = "Hello";
let str2 = "world";

//기존 데이터가 변하지 않는 배열 concat,join,split,slice
let arrConcat = arr1.concat(arr2);
let strConcat = str1.concat(str2);
console.log(arrConcat);
console.log(strConcat);

let arrJoin = arr1.join("");
let strJoin = arr2.joing("-");
console.log(arrJoin);
console.log(strJoin);

let strSplit = str1.split("");
console.log(strSplit);

let arrSlice = arr1.slice(0, 2);
let strSlice = str1.split("").slice(0.2);
console.log(arrSlice);
console.log(strSlice);

//기존 데이터가 변하는 배열 pop,push,unshift,shift,splice
let arrPop = arr.pop();
console.log(arrPop);

let arrPush = arr.push(6);
console.log(arrPush);

let arrUnshift = arr.unshift(0);
console.log(arrUnshift);

let arrShift = arr.shift();
console.log(arrShift);

//기타 indexOf
```

```
cd : 경로이동
ls : 디렉토리 구조 확인
mkdir : 디렉토리 생성
rmdir : 디렉토리 제거
touch : 파일 생성
```

`const` `let`
const

- 한번 선언한 변수는 수정, 재선언할 수 없다.
- const 는 읽기 전용

let

- 한버 선연한 변수는 재선언 할 수 없다.
- 읽기 쓰기 전용
- 블록 스코프

변수 선언은 무조건 const로 시작 하고 쓸경우 let 으로 바꾸는 습관을 들이자

`호이스팅`
호이스팅은 var 변수를 사용할때 주로 일어나는 현상
```javascript
console.log(b);//b가 정의 되지 않았다고 뜰것이다.
console.log(a);//a가 정의 되지 않았다고 뜰것이다.
const a = 10;
console.log(a);
```
```javascript
console.log(a);//undefined
var a = 10;
console.log(a);
```