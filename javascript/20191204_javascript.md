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



#### **숫자 야구 구현**

- 객체형태로 구현
- 핵심 로직 그리기, 그린 로직 구현하기

```
0. 세팅 (총 턴수, 랜점숫자갯수, HTML구현)
1. (1~9까지)랜덤 숫자 3개 
2. 사용자가 3개의 숫자를 작성
3. 랜덤숫자, 사용자 숫자 비교
3-1. 정답이면 '홈런' 출력, 종료
3-2. 같은자리수 까지 맞으면 스트라이크 추가
3-3. 숫자는 있지만 자리수가 같지 않으면 볼 추가
3-4. 아무것도없으면 한턴 넘김
4. 세팅시 정해진 턴수까지 진행
```

**전체 소스는 practice에서 확인**



##### 객체 구현중 this 관한 이슈

```
const game = {};
game.test = function(){
	console.log(this)
	//1번, 현재의 this?
}

game.user = {}
game.user.test = function(){
	console.log(this)
	//2번, 현재의 this?
}
```

- 1번의 this 는 game 
- 2번의 this 는 game.user 

> 객체 안에 하위 객체에서 this는 하위 객체가 this로 바인딩 된다.