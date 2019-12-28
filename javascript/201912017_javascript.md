## javascript

#### 기본으로 복습 하고 시작

-   **array 배열 pop push unshift shift splice**
-   **array 배열 concat join split slice indexOf**
-   터미널 cd ls mkdir rmdir touch
-   new 생성자 객체 만들기
-   사칙 연산 계산기 만들기
-   재귀 사용
-   Math 객체 
-   setInterval / clearInterval

#### 

#### 변수 할당으로 의도를 표현하기

> 자바스크립트의 코딩의 기술 - 조 모건

1. `const`로 변하지 않는 값을 표현
2. .`let `과 `const ` 유효범위 충돌을 줄이기
3. 블록 유효 범위 변수로 정보를 격리하기
4. 템플릿 리터럴로 변수를 읽을 수 있는 문자열로 변환하기



##### 1. const로 변하지 않는 값을 표현

```javascript
const tax = 0.1; // 세금
const shipping = 3000; // 배송료
const item = 10000; // 물건값
let total = item * tax + shipping;

return `총 결제 금액은 ${total}원 입니다.`
```



위 코드를 보면서 무엇을 알 수 있는가?

`const` 변수 선언으로 변하지 않는 값이 무엇인지 알수있다.

`let` 변수 선언한 total은? 변할 수 있는 값이라는 것



**TIP**

- `const`를 기본/우선으로 쓰고 변할 값이 생기면 `let`을 쓰자.
- `const`는 값을 재할당할 수 없지만 값을 수정할 수 있다.

```javascript
const ARRAY = [];

for(let i = 0; i<10; i++){
  ARRAY.push(i);
};

console.log(ARRAY);

ARRAY.pop();

console.log(ARRAY);
```

