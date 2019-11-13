## javascript 

### 기본으로 복습 하고 시작

- 구구단 만들기
- array 배열 pop push unshift shift splice
- 터미널 cd ls mkdir rmdir touch

```javascript

```

```
pop() : 맨뒤 제거
push() : 맨뒤 추가
unshift() : 맨앞 추가
shift() : 맨앞 제거

concat() : 기존 배열에는 변하지않으며, 맨뒤에 추가
arr = [1,2,3]
arr.concat(4) // [1,2,3,4]
arrr // [1,2,3,] 변하지 않음
사용법 : 변수 생성하여 사용
let arr2 = arr.concat(4) // [1,2,3,4]
s = 'Hello'
s2 = s.concat(' world'); // Hello world
```
```
cd : 경로 이동
ls : 디렉토리 구조
mkdir : 디렉토리 생성
rmdir : 디렉토리 제거
touch : 파일 생성
```

원본 배열을 바꾸지 않는 메소드 더알아보기

`concat()` : 문자열, 배열을 더해준다.
`join()` : 배열을 문자열로 만들어준다.
`split()` : 문자열을 배열로 만들어준다.
`indexOf()` : 해당 배열을 찾아 준다.
`slice(a,b)` : a번째 부터 b의 앞까지 짤라낸다.

```javascript
let strings = 'Hello';
let a = strings.split(''); // [H,e,l,l,o] 배열
let a2 = a.join(''); // 'Hello' 문자열

a.indexOf('e'); // 몇번째 원소인지 알려준다. 중복일때는 맨앞을 찾는다.
```

`parseFloat()` : 문자열을 실수로 바꿔주는 역활

- 수로 시작할 때 그 수를 실수로 바꿉니다.
- 띄어 쓰기로 여러 개의 수가 있으면 첫번째 수만 바꿉니다.
- 공백으로 시작하면 공백은 무시합니다.
- 수가 아닌 문자로 시작하면 NaN을 반환합니다.

`parseInt()` : 문자열을 정수로 바꿔주는 역활

- string을 n진법일 때의 값으로 바꿉니다. n은 옵션으로 2부터 36까지 입력할 수 있습니다. 입력하지 않으면 10으로 처리합니다.
- string의 처리는 parseFloat()와 거의 같습니다.
- 소수 부분은 버립니다.
- 0x로 시작하면 16진법으로 처리합니다.



2week algorithm N의 숫자를 받아서 각 더하기인데,

```javascript
//예)1234 라는 수가있으면,
//Number(1234/10)이 아닌 parseInt(1234/10)하는 이유?

Number(1234/10) //123.4
parseInt(1234/10) // 123

let num = 12345;
console.log(parseInt(num % 10)); // 5
console.log(parseInt(num / 10)); // 1234
//소수점을 버리기 위해 사용
```

 