## javascript

### 기본으로 복습 하고 시작

-   **array 배열 pop push unshift shift splice**
-   **array 배열 concat join split slice indexOf**
-   터미널 cd ls mkdir rmdir touch
-   new 생성자 객체 만들기
-   사칙 연산 계산기 만들기

```javascript
let arr = [1, 2, 3, 4, 5];
let arr1 = [1, 2, 3, 4, 5];
let arr2 = ['홍길동', '김철수', '김나미'];
let str1 = 'Hello';
let str2 = 'world';

//기존 데이터가 변하지 않는 배열 concat,join,split,slice
let arrConcat = arr1.concat(arr2);
let strConcat = str1.concat(str2);
console.log(arrConcat);
console.log(strConcat);

let arrJoin = arr1.join('');
let strJoin = arr2.joing('-');
console.log(arrJoin);
console.log(strJoin);

let strSplit = str1.split('');
console.log(strSplit);

let arrSlice = arr1.slice(0, 2);
let strSlice = str1.split('').slice(0.2);
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

`재귀` : 함수가 함수안에서 자신을 다시 호출하는 것
- var,const 상관없이 사용 가능하다.
- 재귀 함수는 종료 조건이 필요하다.
  (종료 조건이 없으면 무한)

```javascript
var foo = function (n) {
    console.log(n);
    if (n == 0) return; // 종료 조건
    foo(n - 1);
}

const poo = function (n) {
    console.log(n);
    if (n === 0) return; // 종료 조건
    poo(n - 1);
}

console.log(poo(10));
```
재귀를 왜 사용 하는가?
- 재귀를 사용 하게 되면 더 쉽게 풀수 있는 문제들이 많다.
- 에를 들어, 알고리즘의 리스트, 트리, 그래프, 순회 문제

일반 vs 재귀
- 일반함수가 재귀보다 높은 성능을 보인다.
- 모든 재귀 알고리즘은 일반 알고르짐으로 바꿀 수 있다.

재귀없이 구현하면, 성능이 졸아지지만 재귀를 사용 하면 프로그래머의 능력이 좋아진다.


