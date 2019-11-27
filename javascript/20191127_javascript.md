## javascript

#### 기본으로 복습 하고 시작

-   **array 배열 pop push unshift shift splice**
-   **array 배열 concat join split slice indexOf**
-   터미널 cd ls mkdir rmdir touch
-   new 생성자 객체 만들기
-   사칙 연산 계산기 만들기
-   재귀 사용
-   Math 객체 



객체 내에서 for문 사용 이슈

```javascript
let object = {}
object.word = 'abcdef'.split(''); // ["a", "b", "c", "d", "e", "f"]

object.funcArry = function(){
  let newWord = [];
  for(let i = 0; i < this.word.length; i++){
    let a = this.word.pop();
    newWord.push(a);
  }
  console.log(newWord)
};
```

**해결 방안**

> for문은 lengthㄲ가지 도는데 length를 계속 줄이니까 문제가됨
>
> - for문 사용하려면 length값이 변하지않게 해야함
> - while은 뒤에서 돌면서 length를 줄어들음

```javascript
let object = {}
object.word = 'abcdef'.split(''); // ["a", "b", "c", "d", "e", "f"]

object.funcArry = function(){
  let newWord = [];
  let wordLength = this.word.length
  for(let i = 0; i < wordLength; i++){
    let a = this.word.pop();
    newWord.push(a);
  }
  console.log(newWord)
};
```

```javascript
let object = {}
object.word = 'abcdef'.split(''); // ["a", "b", "c", "d", "e", "f"]

object.funcArry = function(){
		let newWord = [];
    while (this.word.length != 0) {
      let aa = this.word.pop();
      newWord.push(aa);
    }
    console.log(newWord)
};
```

