// 1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.

const solution = (n) => {
    let answer = 0;
    let prime = [];
    for(let i = 2; i <= n; i++ ) {
        let isPrime = true;
        for (let j = 2; j < i; j++) {
            //console.log('i값' + i + ' j값'+j);
            if (i % j == 0) {
                isPrime = false;
            }
        }
        if (isPrime) prime.push(i);
    }

    //console.log(prime.length);
    answer = prime.length;
    return answer;
};

solution(10);
