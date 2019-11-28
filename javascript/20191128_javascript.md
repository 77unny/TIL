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



`setInterval(식,시간)` 보여줄 식을 '시간' 마다 실행한다.

`clearInterval()` setInterval 종료

- `setInterval()` 사용 할 때 변수로 정의 해줄것 (clearInterval)
  `const 변수명 = setInterval(식,1000)`

```javascript
let i = 0;
const foo = () => {
  i++;
  console.log(i);
}

const interval = setInterval(foo, 1000); // 1초 마다 실행
clearInterval(interval); //종료
```

