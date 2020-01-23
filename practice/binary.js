/**
 * 2진수, 8진수, 16진수를 10진수로 변환
 * Javascript의 parseInt()를 사용
 * 숫자형태의 문자열을 숫자로 변환 시켜주기도 한다.
 * 2진수, 8진수, 16진수를 10진수 형태의 숫자로 변환시켜준다.
 */

 const stringNumber = '10';
 console.log('숫자형태의 문자열 =>', parseInt(stringNumber));

 const bin2 = 1010; // 2진수, 10진수로 변환시 10
 console.log('2진수 1010을 10진수 변환=>',parseInt(bin2,2)); // 2진수의 1010을 10진수로 변환

 const bin16 = 'ff'; // 16진수, 10진수로 변환시 255
 console.log('2진수 1010을 10진수 변환=>',parseInt(bin16,16)); // 2진수의 1010을 10진수로 변환
