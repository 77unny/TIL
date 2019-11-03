## javascript function 반복만들기

반복 되는 함수를 만들다가, 실수를 함..

```javascript
let repeat = (txt, num) {
	for(let i = 0; i<num; i++){
		console.log(txt + num);
	}
}
reopeat('hello', 10)
```

```javascript
let repeat = (txt, num) {
	for(let i = 0; i<num; i++){
		console.log(txt + i);
	}
}
repeat('hello', 10)
```

결과는 hello1, hello2...... 순서대로 출력을 원했으나,

생각 없이 처음에 짠 코드는 num 을 넣어버림.. 당연히 그럼 10이 10번 동일하게 출력되지.....어휴...



## 터미널 cd ls touch mkdir rmdir 

cd : 경로 이동

ls : 현재 경로의 구성

touch : 파일을 생성

mkdir  :  디렉토리 생성

rmdir : 디렉토리 삭제

```
cd  // cd만, 최상위로 이동
cd ..      // 상위로 이동
cd /경로/경로    // 정의한 경로로 이동

mkdir 디렉토리명 // mkdir만, 최상위에서 생성
mkdir ./디렉토리명 // 현재위치에서 성생
```

 