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

#### 재귀

> 함수가 함수 안에서 자신을 다시 호출하는것

```javascript
const foo = () => {
  foo()
};
```

**왜 재귀를 사용하나?**

재귀를 사용하면 쉽게 풀리는 문제들이 많이 존재한다.



**재귀 vs 일반**

- 일반 함수가 재귀 함수보다 좋은 성능을 보인다. 하지만 상황에 따라 다를 수 있으니 성능 비교를 통해서 최적의 상황을 얻어야 한다.
- 모든 재귀 알고리즘은 일반 알고리즘으로 바꿀 수 있다.
- 재귀 알고리즘은 코드를 더 간결하게 마들어 주기도 한다.



일반 - 카운드다운 

```javascript
const countdown = (n) => {
	for(let i = n; i>=0; i--){
		console.log(i);
	}
}
countdown(10);
```

재귀 - 카운트다운

```javascript
const countdown = (n) => {
	console.log(n);
  if( n <= 0 ){
    return;
  }
	countdown(n - 1);
}
countdown(10);
```

- 모든 재귀에는 종료조건이 필요하다
- 재귀로 구현하는 경우 종료조건을 먼저 정의하고 구현하자