## 1Week, 호출 할 때 마다 1씩 증가된 정수를 반환하는 함수 

- 전역 변수 이용

```javascript
let counter = 0;

function increment() {
  // 코드를 작성하세요.
}


increment();
increment();
increment();

console.log(increment()); // 4가 출력 되어야 함.
```



함수 속성(동적 바인딩) 사용

```javascript
function increment(startNumber) {
  // 코드를 작성하세요.
  if (startNumber !== undefined) {

  }
}

increment(1);
increment();
increment();

console.log(increment()); // 4가 출력 되어야 함.

```



클로저 사용

```javascript
const makeIncrementor = (); // 코드를 완성하세요

const increment = makeIncrementor(1);

increment();
increment();
increment();

console.log(increment()); // 4가 출력 되어야 함.
```

