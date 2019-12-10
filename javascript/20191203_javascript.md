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



#### **로또번호 생성기 구현**

- 객체형태로 구현
- 핵심 로직 그리기, 그린 로직 구현하기

> lotto 객체와 세팅값을 선언

```javascript
const lotto = {};
lotto.SETTING = {
    NUMBER: [],
    AMOUNT: 6
};
```

> 초기화 및 실행 

```javascript
lotto.setNumber = function() {
    for (let i = 1; i <= 45; i++) {
        this.SETTING.NUMBER.push(i);
    }
};
lotto.init = function() {
    this.setNumber();
};
lotto.run = function() {
    this.init();
};
lotto.run();
```

> 랜덤 생성 번호 구현

```javascript
lotto.getNumber = function() {
    let num = [];
    for (let i = 0; i < this.SETTING.AMOUNT; i++) {
        let random = Math.floor(Math.random() * this.SETTING.NUMBER.length);
        let a = this.SETTING.NUMBER.splice(random,1)[0];
        num.push(a);
    }
    return num;
};
```

> 리셋 구현

```javascript
lotto.reset = function(){
    this.SETTING.NUMBER = [];
    this.init();
}
```

**전체 소스는 practice에서 확인**