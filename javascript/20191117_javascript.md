## javascript 

 ### 기본으로 복습 하고 시작

 - 구구단 만들기
 - array 배열 pop push unshift shift splice
 - array 배열 concat join split slice indexOf
 - 터미널 cd ls mkdir rmdir touch
 - new 생성자 객체 만들기

 ```javascript
 
 ```

 ```
concat() : 배열, 문자열을 이어서 새로운 문자열을 반환
join() : 배열을 하나로 이어서 새로운 문자열로 반환
split() : 문자열을 각각 나눠서 새로운 배열로 반환
slice(a,b) : 배열에 a번째와 0에서 b번째 갯수까지 새롭게 반환
indexOf() : 인덱스 값을 반환

pop() : 맨끝에서 제거
push() : 맨끝에서 추가
shift() : 맨앞에서 제거
unshift() : 맨앞에서 추가
splice(a,b,c) : a번째에서, b갯수반큼을 제거 또는 c로 대체
 ```
 ```
cd : 경로이동
ls : 디렉토리 구조 확인
mkdir : 디렉토리 생성
rmdir : 디렉토리 제거
touch : 파일 생성
 ```

```javascript
let Person = function(name,age){
	this.name = name;
  this.age = age;
}
Person.prototype.talk = function(target,say){
  //console.log(`${target.name}에게 ${this.say}라고 말했어요.`)
	console.log(`${target.name}에게 ${say}라고 말했어요.`)
}

let a = new Person('홍길동',30);
let b = new Person('김철수',28);
let c = new Person('이나미',24);

a.talk(c,'안녕하세요~');
```

**prototype 에서 사용된 this는 Person 메소드, 없는 경우는 undefined 출력**

