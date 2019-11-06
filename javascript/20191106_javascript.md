## javascript 소수 구하기

### 기본으로 복습 하고 시작

- 구구단 만들기
- array 배열 pop push unshift shift splice
- 터미널 cd ls mkdir rmdir touch

```javascript
for(let i = 2; i<10; i++){
  for(let j = 1; j<10; i++){
    i * j;
  }
}
```

```
array 
pop() : 맨뒤배열 제거
push() : 맨뒤에서 추가
unshift() : 맨앞에서 제거
shift() : 맨앞에서 추가
splice(a,b,c) : a번째에서 b갯수만큼 제거 및 변환
```

```
cd : 경로 이동
cd ../ 상위 경로
cd ./ 현재 경로
cd 최상위 경로

ls : 디렉토리 구조

touch : 파일 생성 (기본 최상위에서

mkdir : 디렉토리 생성 (기본 최상위에서 생성)
mkdir ./현재위치에서 디렉토리 생성
mkdir ../한칸위에서 디렉토리 생성

rmdir : 디렉토리 제거
rmdir -rm 
```

 

### 자바스크립트 1~1000사이 소수 구하기

> 소수란, 1을 제외한 자기자신으로만 나누어 떨어지는 수

- 1 - 1000 사이의 소수를 화면에 출력
- 객체와 메소드를 사용해 볼 것
- **아래 조건을 보고 어떤 구상을 하여 풀것인지 생각해보기...**
  문제 출제는 항상 조건이 있는데 그조건과 힌트를 조합하여 어떤 구상으로 생각하여 풀어보는게 가장어렵게 느껴진다..

```javascript
numbers = {}
numbers.all = []
numbers.prime = []
numbers.isPrime = function(numbers);
numbers.addPrime = function(numbers);
numbers.getAllPrimes = function();
numbers.addAll = function(max_num);
```

**내생각이 담긴 풀이 방법**

1. 소수인지 확인하는 함수가 필요
2. 확인하기전 1에서부터 1000까지 배열에 담기
3. 배열에 담은것을 소수인지 확인 하는 함수
4. 소수가 맞다면 소수끼리 묶는 배열에 담기
5. 소수 배열을 출력하기



**1~1000 배열 담기**

```javascript
let number = {};
number.all = [];
number.prime = {};

// 2. 1~1000까지 배열에 담기
const maxNumber = (maxNumber) => {
    for(let i = 1; i <= maxNumber; i++) {
        number.all.push(i);
    }
};
```

**소수를 어떻게 구할것인지??**

```javascript
/* 직접 하나 하나 적으면서 규칙을 찾아봄..
2 % 2 = 2
3 % 2,3 = 3
4 % 2,3,4 = 2,4
5 % 2,3,4,5 = 5
6 % 2,3,4,5,6 = 2,3,6
7 % 2,3,4,5,6,7 = 7
8 % 2,3,4,5,6,7,8 = 2,4,8
9 % 2,3,4,5,6,7,8,9 = 3,9

위 내용을 작성 하다보니 규칙이 보인다.
1. for문으로 돌리면될것같은 구조
2. 2중 루프를 돌리면 될꺼같은 구조
3. 자기자신으로만 떨어질때 그수가 소수이다.
4. 1~1000, 1은 소수가 아니라서 제외 2~1000일때, 처음 for문은 2~1000까지 루프를 돌린다.
5. 두번째 for문은 자기 자신을 제외 하고 나누어 떨어지면 false

*/

for(let i = 2; i <= 1000; i++){
	//isPrime 변수 선언
  let isPrime = true;
  for(let j = 2; j < i; i++){
    // false처리
    if(i % j === 0) isPrime = false;
  }
  //isPrime 참일때 소수, 소수배열에 담기
  if(isPrime) number.prime.push(i)
}


```


