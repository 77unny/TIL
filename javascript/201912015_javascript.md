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

#### 객체 object

- object는 key, value 구조의 자료구조
- object는 {}로 자료를 표현하며, 서보와 클라이언트간 데이터는 Object형태와 비슷한 방법으로 JSON이라는 데이터 포맷으로 데이터를 교환한다.

**객체 선언**

```javascript
const obj = {name: "baekCo", age : 30}
```



**객체에 데이터 추가 / 삭제**

```javascript
const myFriend = {key : "value"};

//value 출력 
console.log(myFriend["key"]);
console.log(myFriend.key);

//추가
myFriend.age = 34;

//추가한 정보 출력
console.log(myFriend.age);
```



```javascript
const myFriend = {key : "value"};

//value 출력 
console.log(myFriend["key"]);
console.log(myFriend.key);

//추가
myFriend.age = 34;

//추가한 정보 출력
console.log(myFriend.age);
```



**객체 탐색**

- for - in 을 사용한 방법.
- Object.keys(), Object.values(), entries() 메서드
- Object.keys()와 배열메서드(forEach)로 순회