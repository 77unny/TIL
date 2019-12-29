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
2. `let `과 `const ` 유효범위 충돌을 줄이기
3. 블록 유효 범위 변수로 정보를 격리하기
4. 템플릿 리터럴로 변수를 읽을 수 있는 문자열로 변환하기



##### 2. let과 const 유효범위 충돌을 줄이기

`var` 사용 보다는 `let` 과 `const` 사용으로 유효범위 충돌을 줄이기



##### 3. 블록 유효 범위 변수로 정보를 격리하기

`for문`에서 `var` 사용 보다 `let` 을 사용하는 개념

`let`은 블럭유효범위를 따르므로 블록에서만 유효한것이다. 따라서 반복되어 값이 변경 되더라도 이전에 선언한 함수의 값은 변경되지 않습니다.

쉽게말해 `let`을 사용하면 `for문`이 반복될 때마다 값을 잠군다.



**TIP**



##### 4. 템플릿 리터럴 변수를 읽을 수 있는 문자열로 변환하기

```javascript
const text = '안녕' + '하세요';
const name = '홍길동';

console.log(text + name);
```

템프릴 리터럴 사용

```javascript
const name = '홍길동';

console.log(`안녕하세요 ${name}`)
```

