## javascript Array 배열 / function 함수

## Array 배열의 method

##### push() / pop() / unshift() / shift()

- `push()` : 배열의 맨뒤에 붙인다.
- `pop()` :  배열의 맨뒤에를 꺼낸다.
- push 와 pop 을 `스택` 이라고 부른다.
- `unshift()` : 배열의 맨앞에 넣는다. 
- `shift` : 배열의 맨앞에를 꺼낸다.

```javascript
let arr1 = [1,2,3,4,5]
let arr2 = [1,2,3,4,5]
let arr3 = [1,2,3,4,5]
let arr4 = [1,2,3,4,5]

arr1.push(6); // 결과값 : 1,2,3,4,5,6
arr2.pop(); // 결과값 : 1,2,3,4
arr3.unshift(0) // 결과값 : 0,1,2,3,4,5
arr4.shift() // 결과값 : 2,3,4,5

```

## function 함수

const 변수명 = function(매개변수){}
const 변수명 = (매개변수) => {} 
호출 할때는 변수명()

```javascript
const foo = () => {
	return console.log('hello')
}
// 축약형
const foo = () => console.log('hello')

```

