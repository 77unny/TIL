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

#### node 환경에서의 모듈

> 부품 개념으로 생각 할것, 별도로 만들어 재사용 가능함

- 별도의 파일에서 `module.exports = 함수명`으로 내보내기
- 사용될 파일에서 `require('경로명')` 으로 호출하기

```javascript
// 별도의 welcome.js 파일
const welcome = () => {
	return 'hello world'
};
module.exports = welcome;
```

```javascript
// main.js 
const greeting = require('./welcome.js');
welcome();
```



여러 기능이 있는 환경일때

```javascript
// calc.js
function add(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

module.exports = {
  add: add,
  substract: substract,
  multiply: multiply,
  divide: divide,
};
```

```javascript
// main.js
const add = require('./calc.js').add;
const multiply = require('./calc.js').multiply;

console.log(multiply(add(1,2), add(2,3)); // 15
```



**비슷하지만 다른방법**

```javascript
exports.add = function(a, b) {
  return a + b;
};

exports.substract = function(a, b) {
  return a - b;
};

exports.multiply = function(a, b) {
  return a * b;
};

exports.divide = function(a, b) {
  return a / b;
};
```

```javascript
// main.js
const add = require('./calc.js').add;
const multiply = require('./calc.js').multiply;

console.log(multiply(add(1,2), add(2,3)); // 15
```

*출처 : 제로초님 강의*