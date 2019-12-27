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

#### 배열

**forEach / Map / filter** / some / every 유용한 메서드

다른 함수를 받아서 처리하는 higher order function 



**forEach**

```javascript
const data = [
    { title: 'hello', content: '아저씨', price: 1000 },
    { title: 'baekCo', content: '올드보이', price: 3000 },
    { title: 'codesquad', content: '신세계', price: 2000 }
];
// forEach
data.forEach(function(v) {
    console.log(v.title, v.price);
});

```

**Map**

> 새로운 배열을 반환 해준다.

```javascript
const data = [
    { title: 'hello', content: '아저씨', price: 1000 },
    { title: 'baekCo', content: '올드보이', price: 3000 },
    { title: 'codesquad', content: '신세계', price: 2000 }
];
const priceData = [100, 200, 300];

// map : 새로운 데이를 반환 해준다.
const newData = data.map(function(v) {
    return v.price * 1.1;
});
console.log(newData);
const newPriceData = priceData.map(function(v) {
    return v * 10;
});
console.log(newPriceData);
const newPriceData2 = priceData.map(function(v) {
    let obj = { name: v.name, content: v.content, price: v * 10 };
    return obj;
});
console.log(newPriceData2);
```

**filter**

> 조건에 맞는 배열을 반환

```javascript
const data = [
    { title: 'hello', content: '아저씨', price: 1000 },
    { title: 'baekCo', content: '올드보이', price: 3000 },
    { title: 'codesquad', content: '신세계', price: 2000 }
];

//filter 
const newFilter = data.filter(function(v) {
    return v.price > 1500;
});
console.log(newFilter);

// filter + map 응용
const newFilter2 = data.filter(function(v) {
    return v.price > 1500;
}).map(function(v){
    let obj = { name: v.title, content: v.content, price: v.price+'' };
    return obj;
});
console.log(newFilter2);
```

