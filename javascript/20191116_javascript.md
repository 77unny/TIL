## javascript 

 ### 기본으로 복습 하고 시작

 - 구구단 만들기
 - array 배열 pop push unshift shift splice
 - array 배열 concat join split slice indexOf
 - 터미널 cd ls mkdir rmdir touch

 ```javascript
 
 ```

 ```
pop() : 맨뒤에 제거
push() : 맨뒤에 추가
unshift() : 맨앞 추가
shift() :  맨앞 제거
splice(a,b) : a의번째에서 b갯수만큼 제거/변환

concat() : 문자열/배열을 붙여 새로운 문자열 반환
join('') : 배열의 모든요소를 연결해 하나의 새로운 문자열로 반환
slpit('') : 문자열을 새로운 배열로 반환
slice(a,b) : a번째에서, 0에서 b번째 이전까지 새로운 배열로 반환
indexOf() : 몇번째 인덱스 값인지 알려준다.
 ```
 ```
 cd : 경로이동
 ls : 디렉토리 구조 
 mkdir : 디렉토리 생성
 rmdir : 디렉토리 제거
 touch : 파일 생성
 ```

#### Prototype

> 생성자로 만든 객체는 프로토타입이라는 속성을 가진다.

**내가 이해 한 부분,** 

- 생성자 함수 내에서 사용하게되면 모든 객체들이 따로따로 가지게 됨으로 비효율적이다. 
- 그래서 생성자 함수를 만들고, 생성자함수명.prototype.메소드명 으로 만들어주게되면 공통으로 하나에서 처리가 가능하다.
- 정리, 생성자함수내에 메소드 넣어두면 생성할 떄 마다 모든 객체에 다들어있기때문에 비효율적이니, 공통으로 하나를 생성해서 관리하는 개념
- 메모리를 절약하고, 효율적으로 메소드 생성 가능하다. 

```javascript
const Foo = (name, people) => {
	this.name= name;
	this.people = funciton(people){
		console.log(people + '에게 인사 했습니다.');
	}
}

const a = new Foo('홍길동');
const b = new Foo('김철수');


// 아래와 같이 바꿀 수 있다.
const Foo2 = (name) => {
	this.name = name;
}
Foo2.prototype.people = function(people){
	console.log(people + '에게 인사 했습니다.');
}

const aa = new Foo2('빽코');
const bb = new Foo2('백코');
```

**위에 코드는 안될것이다....이유가 무엇일까?**

`arrow function` !!! 화살표 함수는 new 연산자로 사용할수 없단다...

[MDN 공식 문서 참고](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/%EC%95%A0%EB%A1%9C%EC%9A%B0_%ED%8E%91%EC%85%98#new_%EC%97%B0%EC%82%B0%EC%9E%90_%EC%82%AC%EC%9A%A9)

이래서... 화살표 함수를 안쓰는 회사도 있는구나....

```javascript
function Foo(name, people) {
	this.name= name;
	this.people = funciton(people){
		console.log(people + '에게 인사 했습니다.');
	}
}

const a = new Foo('홍길동');
const b = new Foo('김철수');


// 아래와 같이 바꿀 수 있다.
function Foo2(name){
	this.name = name;
}
Foo2.prototype.people = function(people){
	console.log(people + '에게 인사 했습니다.');
}

const aa = new Foo2('빽코');
const bb = new Foo2('백코');
```

한번 해보면 이해 된다. 왜 prototype을 써서 해야하는지...

생성자 함수내에 설정하게되면, new 로 생성한 객체들은 내부에 효율성이 떨어지는 메모리만, 차지하는 부분이 있으며, **이부분을 prototype 으로 따로 빼두어 사용하면 효율성과 메모리 절약을 할 수 있다는 점이다!**

```javascript
// let Foo = function (name,pow,att) {
//     this.name = name;
//     this.hp = 100;
//     this.pow = pow;
//     this.att = function (target) {
//         target.hp -= this.pow;
//     }
// }


// prototype 
let Foo = function (name,pow) {
    this.name = name;
    this.hp = 100;
    this.pow = pow;
}
Foo.prototype.att = function (target) {
    target.hp -= this.pow
};

let a = new Foo('홍길동',10);
let b = new Foo('김철수',10);
let c = new Foo('나비야',10);

a.att(b);
console.log(b);
```



#### DOM / HTML

window.document === document // true

`createElement('태그')` 태그 생성

`innerHTML = ''` 태그안에 넣을 내용

`appendChild()` 자식 생성



**input에 작성한 것을 버튼을 눌렀을때console로 출력해보기**