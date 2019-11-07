let number = {};
number.all = [];
number.prime = [];

// 2. 1~1000까지 배열에 담기
const maxNumber = (maxNumber) => {
    for(let i = 1; i <= maxNumber; i++) {
        number.all.push(i);
    }
};

// 3. 담긴 배열이 소수 인지 확인 하는 함수
/*
2 % 2 = 2
3 % 2,3 = 3
4 % 2,3,4 = 2,4
5 % 2,3,4,5 = 5
6 % 2,3,4,5,6 = 2,3,6
7 % 2,3,4,5,6,7 = 7
8 % 2,3,4,5,6,7,8 = 2,4,8
9 % 2,3,4,5,6,7,8,9 = 3,9



i2 j2
i3 j2,3
i4 j2,3,4
i5 j2,3,4,5
i6 j2,3,4,5,6
*/
for(let i = 2; i <= 1000; i++ ) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
        //console.log('i값' + i + ' j값'+j);
        if (i % j == 0) {
            isPrime = false;
        }
    }
    if (isPrime) number.prime.push(i);
}

// 4. 소수가 맞으면, 소수배열에 담기
// 5. 소수배열 출력
const getPrime = () => {
    innerText = '<ul>';
    for(let i = 0; i<number.prime.length; i++){
        innerText = innerText + `<li>${i}</li>`
    }
    innerText = innerText + '</ul>';


    document.body.innerHTML = innerText;
};

// 실행
maxNumber(1000);
getPrime();

