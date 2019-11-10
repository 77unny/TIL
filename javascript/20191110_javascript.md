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
splice(a,b,c) : a번째 에서 b갯수 만큼 제거 및 c를 수정
```

```
cd : 경로 이동
ls : 디렉토리 구조
touch : 파일 생성
mrdir : 디렉토리 생성
rmdir : 디렉토리 제거
```

 

**exercise  하면서 느낀점**

- return 
- 동적 바인딩

------

`return` 

함수를 사용할 때, return 값이 있어야 한다.  return은 말 그대로 반환, 내보내다 라는 의미. 

return이 없는 함수는 undefined를 반환 한다.

`동적 바인딩` 

객체 생성 이후, 새로운 속성을 객체 한테 추가 하는것

함수를 생성하고 그 함수에 새로운 속성을 추가 할수있다.

```javascript
const num = () => {
	num.aaa++;
	return num.aaa;
}
```

