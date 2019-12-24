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

#### Scope chain

> 변수를 찾기 위해, 지역스코프에서 전역 스코프까지 단계적으로 올라가면서 찾는 것

```javascript
const name = 'play ground';
function home() {
  const homeName = 'my house';
  function printName() {
     const nickName = 'crong house';
     console.log(nickName); 	//crong house
     console.log(homeName); 	//my house
     console.log(name); 	//play ground
  }
  printName();

}
home();
```

