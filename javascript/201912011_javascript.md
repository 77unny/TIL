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

#### 함수의 호출

**함수호출방식**

자바스크립트 함수 호출은 아래와 같이 호출된다.

```javascript
const printName = (firstname) => {
  const myname = 'jisu';
  return myname + ' ,' + firstname;
}
const run = (firstname) => {
  const firstName = firstname || 'Youn';
  const result = printName(firstName);
  console.log(result);
}
run()
```



**함수호출과 stack**

```javascript
function foo(b){ // 3번
  var a = 5;
  return a + b;
}
function bar(x){ // 2번
  var y = 3;
  return foo(x + y);
}
console.log(bar(5)); // 1번
```

1. console.log(bar(5)) 실행 - 콜스택 쌓임
2. bar(5) 실행 - 콜스택 쌓임
3. foo(8) 실행 - 콜스택 쌓임
4. foo함수가 a+b, 즉, 13을 리턴 - 쌓인 콜스택 제거
5. bar함수 리턴 - 쌓인 콜스택 제거
6. console.log(bar(5)) 콜스택 제거



call stack은 함수를 연속적으로 계속 호출하면 call stack이 꽉차버리면서 더이상 실행 되지 못하고 오류가 발생하게 된다.

브라우저에서는 대부분 지정된 횟수만큼만 call satack을 쌓게 미리 설정해둔 경우가 많다고 한다.

따라서 <u>개발중에 Maximum call stack size exceeded</u> 오류를 발견해도 너무 놀라지 말고 대처 할 것



