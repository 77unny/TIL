## javascript 소수 구하기

### 기본으로 복습 하고 시작

- 구구단 만들기
- array 배열 pop push unshift shift splice
- 터미널 cd ls mkdir rmdir touch

```javascript
for(let i = 2; i < 10; i++){
    for(let j = 1; j < 10; i++){
        i * j; 
    }
}
```

```
array 
pop() : 맨뒤에서 제거
push() : 맨뒤에서 추가
unshift() : 맨앞에서 추가
shift() : 맨앞에서 제거
splice(a,b,c) : a번째 에서 b칸만큼 제거/수정, c가 있을경우 c로 변경 
```

```
cd : 경로 이동 (default : 최상위)
cd ../ : 상위경로 이동
cd ./ : 현재 경로 

ls : 디렉토리 구조

touch : 파일 생성 (default : 최상위)
touch ../ : 상위경로 파일 생성
touch ./ : 현재경로 파일 생성

mkdir : 디렉토리 생성 (default : 최상위)
mkdir ../ 상위경로 디렉토리 생성
mkdir ./ 현재경로 디렉토리 생성

rmdir : 디렉토리 제거 (default : 최상위)
rmdir ./ 현재경로 디렉토리 제거

```

 

### 자바스크립트 1~1000사이 소수 구하기

**내생각이 담긴 풀이 방법**

1. 소수인지 확인하는 함수가 필요
2. 확인하기전 1에서부터 1000까지 배열에 담기
3. 배열에 담은것을 소수인지 확인 하는 함수
4. 소수가 맞다면 소수끼리 묶는 배열에 담기
5. 소수 배열을 출력하기

**느낀점**
- 소수를 구하는 로직 구현이 생각보다 어려웠다. 소수를 구하는 방법을 몰라 더욱더 힘듬
- innerHTML를 for문으로 돌릴경우, 계속 겹치게 되서 innerHTML 쓸경우 풀어서 작성해야함을 느낌
- 부족한점 : for문 이해도, innerHTML 이해도, 왜 새롭게 배열에 담아야하는부분, 로직 구현