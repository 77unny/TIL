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

**재귀를 이용하여 피보나치 수열 구현하기**

\- 한쌍의 토끼가 무인도에 있을 때 몇개월이 지나야

  어른토끼가 몇쌍이 있는가 계산하는 식

fibo(0) = 0
fibo(1) = 1
fibo(2) = 1 (새끼토끼가 어른토끼가 되어 한쌍)
fibo(3) = 2 (어른토끼가 2쌍이됨)

```javascript
const fibo = n => {
    if (n == 0) {
        return 0;
    }
    if (n == 1) {
        return 1;
    }
    return fibo(n - 1) + fibo(n - 2);
};

console.log(fibo(0));
console.log(fibo(1));
console.log(fibo(2));
console.log(fibo(3));
console.log(fibo(4));
```

- 위처럼 할경우 얼마 안되는 수일경우는 빠르지만, 많은 수가 들어가게되면 사용 기기 성능에 따라 계산하는 시간이 길어진다.
- 위방법보단, 다이나믹프로그래밍으로 처리 하면 좀더 빠른 프로그래밍이 된다.

```javascript
let arr = [0, 1];
const fiboD = n => {
    if (arr[n] == undefined) {
        arr[n] = fiboD(n - 1) + fiboD(n - 2);
    }
    return arr[n];
};
```

기존에 작성 한코드와 위 코드와 비교하면 속도차이가 엄청나게 차이난다.