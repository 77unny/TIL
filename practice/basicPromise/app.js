/**
 * 인프런 Javascript ES6 중급 : 정재남
 * 
 * Promise란?
 * 자바스크립트 비동기 처리에 사용 되는 객체이다.
 * 자바스크립트 비동기는 특정 코드가 실행이 완료될 떄까지
 * 기다리지 않고 먼저 수행하는 방식
 *
 * 비동기가 필요한 상황 예)
 * 데이터를 요청 했을때, 데이터를 받아오기전에 실행되어
 * 화면에 오류를 표시하게 된다. 비동기 처리는 이러한 문제를
 * 해결 하기 위한 예 이기도하다
 *
 * Promise를 호출 할때 콜발 함수의 인자로
 * resolve, reject를 받는다.
 * (resolve : 성공, reject : 실패)
 * Promise 에서 성공시 .then()메소드를 호출하게된다.
 * Promsie 에서 실패시 .catch()메소드 에러 처리.
 */

// Promise 기본 사용법
const promise = new Promise(function(성공시,실패시){
    // 동작 구현 코드 작성
})
// Promise 예제
const promiseTest = (param,delay) =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            if (param) {
                resolve('성공');
            } else {
                reject(Error('실패!!'));
            }
        }, delay);
    });

const testRun = (param,delay) =>
    promiseTest(param,delay)
        .then(text => {
            console.log(text);
        })
        .catch(error => {
            console.log(error);
        });

const a = testRun(true,1000);
const b = testRun(false,2000);
