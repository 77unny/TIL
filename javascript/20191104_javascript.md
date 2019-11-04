## javascript object, arrow function issue

### 기본으로 복습 하고 시작

- 구구단 만들기
- array 배열 pop push unshift shift splice
- 터미널 cd ls mkdir rmdir touch

```javascript
let num = 2 //임의 숫자 또는 prompt()

for(let i = 1; i < 10; i++){
   console.log(num * i);
}
```

```
pop() : 맨뒤에서 하나 제거
push() : 맨뒤에 추가 
unshift() : 맨앞에 추가
shift() : 맨앞에 제거
splice(a,b,c) : a번째 배열에서 b개를 제거,
b가 0 일때는 a번째 위치에서 c를 추가

const arr = [1,2,3,4]
arr.splice(2,1) //arr배열의 2번요소(3)를 제거
arr.splice(2,0,5) //arr배열의 2번째요소위치에서 5배열 추가
```

```
//cd : 경로 이동
cd .. : 상위로 이동
cd ./abc : 현재 폴더내에 abc폴더로 이동
cd : 최상위로 이동

ls : 현재 위치의 디렉토리 구성

//mkdir : 디렉토리 생성
mkdir abc : 최상위에서 abc폴더 생성
mkdir ./abc : 현재위치에서 abc폴더 생성

rmdir abc : 최상위에서 abc폴더 제거
rmdir ./abc : 현재위치에서 abc폴더 제거

//touch : 파일 생성
touch abc.html : 최상위에서 abc.html 생성
touch ./abc.html : 현재위치에서 abc.html 생성

```

 

### 자바스크립트 객체 javascript object 

객체를 이용하여 게임 만들기 도중의 이슈

```javascript
const m1 = {
	hp:100,
	power:20,
	attact:(target)=>{
		target.hp -= this.power;
	}
}
//테스트 자기자신을 공격 해보기
m1.attact(m1)
```

무엇이 문제인것처럼 보이는가??

- 실행하게되면 변경이 되지않을것이다. 왜?
- const로 변수 선언을 잘못함 => let 으로 변경

```javascript
let m1 = {
	hp:100,
	power:20,
	attact:(target)=>{
		target.hp -= this.power;
	}
}
//테스트 자기자신을 공격 해보기
m1.attact(m1)
```

또 무엇이 문제인것처럼 보이는가?

- 실행을 하게되면 hp는 NaN 이 출력이 될것이다. 왜?
- attact에서의 arrow function 을 사용 할경우 전역객첵가 바인딩 되기 때문이다. (this 는 window)

```javascript
let m1 = {
	hp:100,
	power:20,
	attact: function(target){
		target.hp -= this.power;
	}
}
//테스트 자기자신을 공격 해보기
m1.attact(m1)


let m2 = {
	hp:100,
	power:20,
	attact(target){
		target.hp -= this.power;
	}
}
//테스트 자기자신을 공격 해보기
m2.attact(m2)
```

##### *arrow function을 사용 하면 안되는 경우

- 객체의 메소드를 정의할 때는 사용하면 안된다.
- prototype
- 생성자 함수로 사용할 수 없다.
- addEventListener 함수의 콜백 함수

https://poiemaweb.com/es6-arrow-function  참고