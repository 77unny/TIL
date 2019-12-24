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

#### 미션, 다음 처럼 동작하는 getArea 함수 만들기

```javascript
//getArea('circle', 10);
>  원의 넓이 값출력

//getArea('rect', 10,15);
>  사각형의 넓이값출력

//getArea('trapezoid', 10,15,12);
>  사다리꼴의 넓이값출력
```

- swich-case 사용 하여 구현 해봄
- 우선 인자 갯수는 무시, 구현 후 리팩토링

```javascript
const getCircle = a => {
    const result = Math.PI * a;
    console.log(result);
    return result;
};
const getRect = (a, b) => {
    const result = a * b;
    console.log(result);
    return result;
};

const getTrapezoid = (a, b, h) => {
    const result = (a + b) * h * 0.5;
    console.log(result);
    return result;
};

const getArea = (type, a, b, h) => {
    const shape = type;
    switch (shape) {
        case 'circle':
            console.log('circle');
            return getCircle(a);
        case 'rect':
            console.log('rect');
            return getRect(a, b);
        case 'trapezoid':
            console.log('trapezoid');
            return getTrapezoid(a, b, h);
        default:
            console.log('해당 도형이 없습니다.');
    }
};

getArea('circle', 10);
getArea('rect', 10, 15);
getArea('trapezoid', 10,15,12)

```

인자값이 첫번째는 도형, 나머지는 해당하는 길이 값...

첫번째를 제외하고 나머지 인자값에 대해서 구하는법을 알아볼것

**리팩토링 처음을 제외하고 나머지 인자값으로 구현**

```javascript
const getCircle = a => {
    const result = Math.PI * a;
    console.log(result);
    return result;
};
const getRect = (a, b) => {
    const result = a * b;
    console.log(result);
    return result;
};

const getTrapezoid = (a, b, h) => {
    const result = (a + b) * h * 0.5;
    console.log(result);
    return result;
};

const getArea = (type, ...prmt) => {
    const arryPrmt = [...prmt];
    //arryPrmt.push(...prmt); push를 안해도 배열로 들어가짐
    const shape = type;
    switch (shape) {
        case 'circle':
            console.log('circle');
            getCircle(arryPrmt[0]);
            break;
        case 'rect':
            console.log('rect');
            getRect(arryPrmt[0], arryPrmt[1]);
            break;
        case 'trapezoid':
            console.log('trapezoid');
            getTrapezoid(arryPrmt[0], arryPrmt[1], arryPrmt[2]);
            break;
        default:
            console.log('해당 도형이 없습니다.');
    }
};

getArea('circle', 10, 10);
getArea('rect', 10, 15);
getArea('trapezoid', 10, 15, 12);

```

