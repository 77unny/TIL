/*
자바스크립트의 코딩의 기술 - 조 모건

PART1, 변수 할당으로 의도를 표현하기
1. `const`로 변하지 않는 값을 표현
2. `let `과 `const ` 유효범위 충돌을 줄이기
3. 블록 유효 범위 변수로 정보를 격리하기
4. 템플릿 리터럴로 변수를 읽을 수 있는 문자열로 변환하기
*/

// 1. const로 변하지 않는 값을 표현
const tax = 0.1; // 세금
const shipping = 3000; // 배송료
const item = 10000; // 물건값
let total = item * tax + shipping;

return `총 결제 금액은 ${total}원 입니다.`;

// const는 값을 재할당할 수 없지만, 값을 수정할 수 있다.
const ARRAY = [];

for(let i = 0; i<10; i++){
  ARRAY.push(i);
};

console.log(ARRAY);

ARRAY.pop();

console.log(ARRAY);

