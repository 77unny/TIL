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



**객체에서 arrow function은 this가 전역으로 바인딩!**

`let` 과 `var` 

먼저 for 문의 `var`

```javascript
// element LIST를 클릭 했을 경우 몇번째 클릭했는지
var list = document.querySelectorAll('li');
for(var i = 0; i < list.length; i++){
	liet[i].addEventListener('click', function(){
    console.log(`${i}번째 입니다.`)
  })
}

//결과 값은 list 마지막의 값이 출력된다.
```

for문의 `let`

```javascript
// element LIST를 클릭 했을 경우 몇번째 클릭했는지
var list = document.querySelectorAll('li');
for(let i = 0; i < list.length; i++){
	liet[i].addEventListener('click', function(){
    console.log(`${i}번째 입니다.`)
  })
}

//결과는 정상적으로 출력이 된다.
```

