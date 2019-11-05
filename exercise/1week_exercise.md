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

**코드 작성 풀이**

> - 전역 변수 'counter' 변수를 increment 함수에서 가져와 0 = 0 + 1 이하, ++ 증가 처리함
> - 증가 처리 된 counter를 return 반환시킴
>   (반환 하지 않으면 함수내에서 증가되기만하고, 반환 시키지 않음)

```javascript
let counter = 0;

const increment = () => {
	counter++;
  return counter;
}

increment()
increment()
increment()

console.log(increment())

```



- 함수 속성(동적 바인딩) 사용

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

**코드 작성 풀이**

> - 풀이

```javascript
function increment(startNumber) {
  // 코드를 작성하세요.
  if (startNumber !== undefined) {
    num = startNumber;
  } else {
    num++;
    return num;
  }
}

increment(1);
increment();
increment();

console.log(increment()); // 4가 출력 되어야 함.
```



- 클로저 사용

```javascript
const makeIncrementor = (); // 코드를 완성하세요

const increment = makeIncrementor(1);

increment();
increment();
increment();

console.log(increment()); // 4가 출력 되어야 함.
```

**코드 작성 풀이**

> - 풀이

```

```

