## javascript 구구단 구현

------

예전에 했던 구구단 구현을 가볍게 생각 나는 데로 구현해보기로함.

```javascript
const num = prompt('단을 입력하세요.')
const dan = Number(num);

if (dan < 2) {
    console.log('2이상 입력하세요.');
} else {
    for(let i = 1; i < 10; i++) {
        console.log(dan * i);
    }
}
```

1회용 코드, 이거밖에 기억안남...

### issue, fucntion의 오해

------

`fucn()` 함수로 보이면 안된다. 

```javascript
document.querySelector('#Num').onClick = function(){
	return;
}
// 리팩토링, 아래와 같다.
const func = function(){
	return;
}
document.querySelector('#Num').onClick = func;
```

단, 고차 함수일 경우

```javascript
const func = function(){
	return fucntion(){
		console.log('aaa')
	}
}
document.querySelector('#Num').onClick = func();
```

