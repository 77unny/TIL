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

#### Default Parameter

매개변수, 인자값

매개변수, 인자값을 기본값으로 정의

```javascript
const foo = (x,y) => {
  x = x ? x : 1;
  y = y || 2;
  console.log(x,y)
} 
foo(0,1)
foo()
foo(null, false)
```
```javascript
const foo = (x = 1, y = 2) => {
	console.log(x,y)
}
foo(0,1)
foo()
foo(null, false)
```

