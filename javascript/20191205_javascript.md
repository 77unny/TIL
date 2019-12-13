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



#### Proxy 패턴, 

> 일종의 가로채기 패턴

```javascript
const aa = () => {
	get(){
	return 'hello'
	}
}

aa.get();
```

```javascript
const proxy = (value) => {
	const _get = value.get;
	value.get(){
		return _get + ' world';
	}
}

const aa = () => {
	proxy(
		get(){
    	return 'hello'
    }
	)
}

aa.get();
```

