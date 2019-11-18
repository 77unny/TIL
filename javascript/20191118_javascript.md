## javascript 

 ### 기본으로 복습 하고 시작

 - 구구단 만들기
 - array 배열 pop push unshift shift splice
 - array 배열 concat join split slice indexOf
 - 터미널 cd ls mkdir rmdir touch
 - new 생성자 객체 만들기
 - 사칙 연산 계산기 만들기

 ```javascript
 
 ```

 ```
concat() : 배열 문자열을 붙여서 새로운 문자열 반환
join('') : 배열을 이어 붙여서 새로운 하나의 문자열로 반환
split('a') : 문자열에 a라는 기준으로, 새로운 배열로 반환
slice(a,b) : a번째에서 0~b까지 새로운 배열로 반환
indexOf() : 몇번제 인덱스 값인지

pop() : 맨끝에서 제거
push() : 멘끝 추가
unshift() : 맨앞 추가
shift() : 멘앞 제거
splice(a,b,c) : a번째에서 b갯수만큼 제거 또는 c 로 변환

 ```
 ```
cd : 경로이동
ls : 디렉토리 구조 확인
mkdir : 디렉토리 생성
rmdir : 디렉토리 제거
touch : 파일 생성
 ```

```javascript
// new 생성자 객체 만들때는 arrow function 사용이 안됨을 기억할것
let workPrice = 1000;
const Person = function(name,age,money) {
  this.name = name;
  this.age = age;
  this.money = money;
}
Person.prototype.work = function(time){
   this.money += time * workPrice;
}

let a = new Person('홍길동', 30 , 100)
a.work(2)

console.log(a)
```

사칙 연산 계산기 만들기
- input 에서 입력된 값으로 계산기 만들기

계산기 만들면서 느낀점
- result 라는 변수에 0을 담고, input.value 값에 나온값을 result 에  다시 담는 부분이 갑자기 해깔려 다소 조금 걸렸다.

계산기 리팩토링 해볼점
- 중복된 코드가 많다.
- 더 가독성 좋게 만들어 볼것.
- 버전2로 input 하나일때 진짜 계산기처럼 "첫수 입력"-> 연산자선택 -> 두번째수 입력 일떄 처럼 만들어 볼것,
