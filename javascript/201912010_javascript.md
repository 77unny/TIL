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

#### const

> const로 선언한 변수는 재선언과 재할당을 할 수 없다.

재선언/재할당 불가

```javascript
function home() {
  const homeName = 'my house';
  homeName = 'your house';
}

home() // typeerror
```

<u>**주의할점**</u> 

> **const를 사용한다고 수정할 수 없음을 의미하는 것은 아니다.**
>
> **const를 사용 하더라도 배열과 오브젝트의 값을 변경하는 것은 가능**

```javascript
function home(){
  const list = ['john','adele','hary'];
  list.push('tiger');
  return list;
}
home()
```





