## javascript - robozzle

ROBOZZLE 논리력 사고 구하기 

> http://www.robozzle.com/beta/index.html
>
> id : baekCode

- Tutorial / Campaign 
- Campaign 1~2 clear 



정해진 규칙을 먼저 파악하고, 그규칙에 따른 함수, 조건, 스택 구현



##### algorithm, programer / baekjoon 을 시작하다.

baekjoon은 node 환경에서 테스트 중,

programers는 완주하지못한 선수 풀어봄



**algorithm 풀면서 실수 한점......**

- arrow function 에서 return값을 빼는것을 if 문도 착각함..

```javascript
//예시
const foo = () => console.log('FOO');

//programers 예시 : 배열 arr,arr2 비교하여 없는것을 반환
for(let i in arr){
	if(arr[i] !== arr2[i]) arr[i]; 
}

/*
위처럼 진행하니 arr [a,c,b] / arr2 [c,a]
b를 반환 해야하는데 bc 반환, 왜?!
return 을 안해줘서 다출력된다고!!!
*/
for(let i in arr){
  if(arr[i] !== arr2[i]) return arr[i]; 
}
```

