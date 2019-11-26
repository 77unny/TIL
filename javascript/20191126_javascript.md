## javascript

### 기본으로 복습 하고 시작

-   **array 배열 pop push unshift shift splice**
-   **array 배열 concat join split slice indexOf**
-   터미널 cd ls mkdir rmdir touch
-   new 생성자 객체 만들기
-   사칙 연산 계산기 만들기
-   재귀 사용
-   Math 객체 

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



#### Math객체 사용

```javascript
//PI값
Math.PI;

//Math Method
Math.abs()//absolutevalue 절대값반환
Math.abs(-10.2)// 10.2

Math.cos(0) // 1 
Math.ceil(10.1) // 11 올림
Math.floor(10.1) // 10 버림
Math.round(10.6) // 11 반올림

// 최소 값 찾기
Math.min(5,1,2,4,6) // 1

// 최대 값 찾기
Math.max(5,1,2,6,9) // 9

// 랜덤 값 찾기
Math.random() // 랜덤인 실수 출력, 1.123135929
```

**자주 쓰는 Math 객체**

- Math.PI : PI값 구할 때 사용
- Math.abs() : 절대값 구할 때 사용
- Math.cos() : cosine 구할 때 사용
- Math.ceil() : 올림 수
- Math.floor() : 내림 수
- Math.round() : 반올림
- Math.random() : 랜덤수,
  random() 자체로는 잘 안쓰며, 다른 Math 메소드와 같이 쓴다.

```javascript
// 랜덤 자체만으로는 잘 안쓰는 부분이고 0~4 까지 출력하는 랜덤 수
Math.floor(Math.random()*5)
// 1~5까지 정수를 출력하는 랜덤수는 
Math.floor(Math.random()*5) + 1
```

