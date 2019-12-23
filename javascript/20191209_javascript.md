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

#### Rest Parameter

> 나머지 매개변수

`rest` : 나머지



```javascript
const foo = (x,y, ...z) => {
	console.log(z)
}

foo(1,2, true, null, undefined, 10);

//x,y를 제외한 나머지가 출력됨
// true, null, undefined, 10
```

`...인자값`  

- `...인자값` 앞에서 선언된 인자값을 제외한 나머지가 출력이 된다.
- `...인자값` 은 매개변수 선언시 맨앞에서 선언 될 수 없다.
- `...인자값` 맨뒤에 선언 되어야 한다.

```javascript
const foo = (..z, a, b, c) => console.log(z);

// Syntax Error, rest parameter
```

```javascript
const foo = (a, b, ...z, c) => console.log(z);

// Syntax Error, rest parameter
```



