## javascript 

 ### 기본으로 복습 하고 시작

 - **array 배열 pop push unshift shift splice**
 - **array 배열 concat join split slice indexOf**
 - 터미널 cd ls mkdir rmdir touch
 - new 생성자 객체 만들기
 - 사칙 연산 계산기 만들기

 ```javascript
concat() : 배열, 문자열을 이어서 새로운 문자열 반환
join('') : 배열을 이어 붙여서 새로운 문자열 반환
split('') : 문자열을 나누어서 새로운 배열로 반환
slice(a,b) : a번째에서 0~b까지 짤라서 새롭게 반환 
indexOf() : 해당 인덱스 값을 반환

pop(): 맨뒤에서 제거
push() : 맨뒤에서 추가
unshift() : 맨앞에서 추가
shift() : 맨앞에서 제거
splice(a,b,c) : a번째에서 b갯수 만큼 제거 / c로 변환

 ```

 ```
cd : 경로이동
ls : 디렉토리 구조 확인
mkdir : 디렉토리 생성
rmdir : 디렉토리 제거
touch : 파일 생성
 ```
 ```javascript
let workPrice = 1000;
let itemA = 10;
let itemB = 50;
let itemC = 100;

const Person = function(name,age,money) {
  this.name = name;
  this.age = age;
  this.money = money;
}
Person.prototype.work = function(time){
   this.money += time * workPrice;
  console.log(`${this.name}가 ${time}시간을 일해서 ${time*workPrice}원을 벌어 잔고는 '${this.money}원' 입니다.`)
    
}
Person.prototype.buy = function(item){
  this.money -= item;
  console.log(`${this.name}이 ${item}원의 물건을 가격을 구매하여 잔고는 '${this.money}원' 입니다.`);
}

let a = new Person('홍길동', 30 , 100)
a.work(2)
a.buy(itemB);
a.buy(itemC);

 ```

```javascript

```

