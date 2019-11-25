/*
피보나치 수열 구연하기, 일명 무인도 토끼 문제
- 한쌍의 토끼가 무인도에 있을 때 몇개월이 지나야
  어른토끼가 몇쌍이 있는가 계산하는 식
fibo(0) = 0
fibo(1) = 1
fibo(2) = 1 (새끼토끼가 어른토끼가 되어 한쌍)
fibo(3) = 2 (어른토끼가 2쌍이됨)
*/

const fibo = n => {
    if (n == 0) {
        return 0;
    }
    if (n == 1) {
        return 1;
    }
    return fibo(n - 1) + fibo(n - 2);
};

let arr = [0,1];
const fiboD = (n)=>{
    if(arr[n]== undefined){
        arr[n] = fiboD(n-1) + fiboD(n-2);
    }
    return arr[n];
}
