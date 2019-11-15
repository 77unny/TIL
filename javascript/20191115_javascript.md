## javascript 

 ### 기본으로 복습 하고 시작

 - 구구단 만들기
 - array 배열 pop push unshift shift splice
 - array 배열 concat join split slice indexOf
 - 터미널 cd ls mkdir rmdir touch

 ```javascript
 
 ```

 ```
 //데이터를 변형시키는 배열 메소드
 pop() : 맨뒤 제거
 unshift : 맨앞 제거
 shift : 맨앞 추가
 push() : 맨뒤 축가
 splice() : a번째에서 b갯수 만큼 반환(a포함)
 
 //데이터를 유지하는 배열 메소드
 concat() : 문자열, 배열 추가하여 더해준다.
 join() : 배열을 문자열로 이어준다.
 split() : 문자열을 배열로 만들어준다.
 slice() : a번째에서 0에서 b번째의 바로앞까지 반환
 indexOf() : 몇번쨰 배열인지 알려준다.
 ```
 ```
 cd : 경로이동
 ls : 디렉토리 구조 
 mkdir : 디렉토리 생성
 rmdir : 디렉토리 제거
 touch : 파일 생성
 ```

switch : if 와 else if 를 반복적으로 써야 하는 상황을 피해줌

객체에서 사용되는 this 는 객체 자신이다.

```javascript
const foo = (name) => this.name;
```

`생성자 함수` 

- new라는 키워드를 사용한다.

- 참조 변수 = new 생성자함수

  ```javascript
  const p1 = new 생성자함수()
  ```



**생성자 함수를 이용해서, Food(name, energy) 생성자 만들기**

- Food(name, energy)
- eat(food) 메소드를 Human() 생성자 안에 추가
- 도너츠 객체를 생성해서 휴먼 객체에 먹이기



**일반 변수 , 참조변수**

- 일반변수는 변수가 값이다. 정리, 일반변수는 일반적인 값으로 이해하자

  ```javascript
  let a = 10;
  let b = a;
  a === b; // true;
  a = 15;
  a === b // false, b는 10으로 유지,
  ```

- 참조변수는 같다. 정리, 참조 변수는 그냥 복사 개념으로 이해하자.

  ```javascript
  let arr1 = [1,2,3];
  let arr2 = arr1;
  arr1 === arr2; // true
  
  arr1.push(4);
  arr1; // [1,2,3,4]
  arr1 === arr2; // ture
  arr2; // [1,2,3,4] // 참조 변수, 동일 하게 바뀐다.
  ```

