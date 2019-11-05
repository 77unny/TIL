## javascript object, arrow function issue

### 기본으로 복습 하고 시작

- 구구단 만들기
- array 배열 pop push unshift shift splice
- 터미널 cd ls mkdir rmdir touch

```javascript
let num = 2;

for(let i = 1; i<10; i++){
  return num * i;
}

```

```
pop() : 맨뒤에 제거
push() : 맨뒤에서 추가
unshift() : 맨앞에서 제거
shift() : 맨앞에서 추가
splice(a,b,c) : a번째에서 b만큼제거 또는 b대신 c를 추가 

```

```
cd : 경로이동
cd ../ : 상위 이동
cd ./ : 현 디렉토리에서 이동
cd : 최상위로 이동

ls 디렉토리 구성
touch 파일 생성

mkdir 디렉토리 생성
rmdir 디렉토리 제거
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
numbers = []

numbers.addAll = function(max_num){
  for(let i = 2; i<max_num; i++){
      numbers.all.push(i);
  }
}

numbers.addAll(1000);

console.log(numbers);
```

**배열에 담은것이 소수인지 확인 해보는 함수**

```javascript
numbers.isPrime = function(numbers){
  
}

```

**소수가 맞으면 소수 배열에 담기**

```javascript
numbers.addPrime = function(numbers){
	numbers.prime.push()
}
```













