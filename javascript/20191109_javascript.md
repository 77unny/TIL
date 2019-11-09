## javascript 

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

 

프로그래머스 알고리즘을 풀다가 오직 for / if  두가지를 사용한 반복 조건문만 생각했었는데... 

**서울에서 김서방 찾기**   

- for 문을 돌려 i번째가 Kim 이면 반환 하는 풀이
- 다른 사람 풀이 중 가장 생각 나는부분 `indexOf()` 

`indexOf()` 메서드는 배열에서 지정된 요소를 찾을 수있는 첫 번째 인덱스를 반환하고 존재하지 않으면 -1을 반환합니다.

> 공부 : indexOf() / for 문에서 기존 방식과 for(let i in arr) 차이 알아볼것



**완주하지 못한 선수**

- 처음에 너무 어렵게 생각했다가 문제를 다시 한번 읽고 푼 케이스
- 그냥 참가자, 완주자 비교 해서 false 나오면 답! 
  (1명만 완주를 못하였다는 조건이 있음)

**소수찾기**

- 테스트 케이스 2개정도 탈락, 다시 리팩토링 해볼것!