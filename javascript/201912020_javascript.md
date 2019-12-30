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

#### 

#### 모듈이란? 모듈 개념 정리

> 부품 개념으로 생각 할것, 별도로 만들어 재사용 가능함

- 자주 사용 되는 코드를 별도의 파일로 만들어서 필요할 때마다 재활용할 수 있다.
- 코드를 개선하면 이를 사용하고 있는 모든 애플리케이션의 동작이 개선됨
- 코드 수정 시에 필요한 로직을 빠르게 찾을 수 있다.
- 필요한 로직만을 로드해서 메모리 낭비 줄임
- 한번 다운로드된 모듈은 웹브라우저에 의해서 저장되기 때문에 동일한 로직을 로드 할 때 시간과 네트워크 트래픽을 절약 할 수 있다.



순수한 자바스크립트에서는 모듈이라는 개념이 분명하게 존재하지 않지만, nodejs, 웹브라우저(google apps script)의 **호스트 환경**에서 모듈화 방법이 제공되고 있다.



**모듈이 없다면 아래와 같은 개념**

- 별도의 js파일을 만들어 HTML에 넣어 호출한다.

```javascript
// greeting.js
const welcome = () => {
	return 'hello world'
};
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <script src="greeting.js"></script>
  	<script>console.log(welcome());</script>
</body>
</html>
```

`body` 또는 `head` 태그에 `<script src="greeting.js"></script>` 넣게 될것이다.

