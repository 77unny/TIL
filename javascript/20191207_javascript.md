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

위 코드 처럼 Default Parameter를 선언 한 순간 let x = 1, y = 2; 와 동일

`undefined` 일때는 기본으로 선언한 파라미터 값이 출력된다.



**다시 정의 하면 아래와 같은식이다.**

```javascript
const foo = (x = 1, y = 2, z = 3) => {
    // let x;
    // let y;
    // let z;
	console.log(x,y,z)
}
foo(0,1)
```



**참조 가능**

```javascript
const foo = (x = 1, y = x + 1, z = 3) => {
	console.log(x,y,z)
}
foo(0,1)


// 아래의 참조로 쓸 경우 레퍼런스 에러  
const foo2 = (x = 1, y = z + 1, z = 3) => {
	console.log(x,y,z)
}
foo2()
```

아래의 경우 래퍼런스 오류가 뜨는 이유는

```javascript
let x = 1;
let y = z + 1;
let z = 3;

// 이런 형태로 선언 순서대로 진행 되기 떄문에
```



**값으로 처리가능하니 식으로도 처리가능**

```javascript
const noValid = () => {
    console.log('notValid Called');
    return 10;
}
const foo3 = (x = 1, y = noValid()) => {
    console.log(x,y)
};
foo3(1)
```

