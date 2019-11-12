## javascript 

### 기본으로 복습 하고 시작

- 구구단 만들기
- array 배열 pop push unshift shift splice
- 터미널 cd ls mkdir rmdir touch

```javascript
const gugudanPrint = (n) => {
    document.write(`${n}단 출력`)
    for(let i = 0; i<9; i++){
        document.write(`${n} x ${i + 1} = ${n*i} <br>`);
    }
}
const main = () => {
    console.log('구구단이 실행 되었습니다.');
    for(let i = 2; i<9; i++){
        gugudanPrint(i)
    }
}   
main();
```

```
pop() : 맨뒤 제거
shift() : 맨앞 제거
unshift() : 맨앞 추가
push() : 맨뒤 추가
```
```
cd : 경로이동
ls : 디렉토리 구조
touch : 파일 생성
mrdir : 디렉토리 생성
mkdir : 디렉토리 제거
```

javacript 함수로 구구단, calcGugudan 함수에 배열로 결과 값을 왜 담는 것일까?
연습 하는 도중에서 궁금해서 참고
함수의 이름은 결과를 출력한다는 건데 자체적으로 계산까지 하고 있으니 이름과 의도가 다르죠. 
계산은 gugudan(n) 에서 하고 (사실 정확하게는 CalculateNDan(n) 이렇게 이름을 짓는 게 더 좋았을 것 같습니다.)
출력은 print 함수에서 하고, 실행은 main() 

함수는 
1) 한 번에 한 가지 일(역할)을 해 줄 것
2)전역변수를 사용하지 말 것 
3)입력은 매개변수로 받고 
4) 결과는 리턴 또는 화면에 출력해 주는 것이 좋습니다.