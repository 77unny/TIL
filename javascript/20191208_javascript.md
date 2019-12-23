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

#### TDZ

> Temporal Dead Zone : 임시 사망지역 / 임시 사각지대

- if문, for문, while문, swich-case문 : 결과를 리턴하지 않는다.

  **문 자체가 하나의 block-scope**

- 식 expresstion. 값이 될 수 있는 경우

- 값



```javascript
if(true){
  let a = 10;
  if(true){
    console.log(a);
    const a = 20;
  }
  console.log(a);
}
console.log(a);
```

**호이스팅 개념 돌아 보기**

```javascript
if(true){
  let a = 10;
  if(true){
    console.log(a) // 2번
    const a = 20; // 1번
    console.log(a) // 3번
  }
  console.log(a);
}
/*
	1번 위치에서 a를 선언 하였지만 값은 2번 위치에서는 부를수가없다.
	왜? 2번 상태에서 1번은 const a 만 재선언되어 값이 없다.
	3번에서는 재선언된 a의 값이 정의 되어 정상 출력.
*/
```

