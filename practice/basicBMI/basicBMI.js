const weightEl = document.querySelector('.weight');
const heightEl = document.querySelector('.height');
const resultEl = document.querySelector('.result');
const calcEl = document.querySelector('.calc');

const funcBmi = () => {
    let weight = Number(weightEl.value);
    let height = Number(heightEl.value) / 100;
    let bmi = 0;
    let bmit = '';
    bmi = weight / (height * height);

    if (18.5 > bmi) {
        bmit = '저체중';
    } else if (bmi < 23) {
        bmit = '정상';
    } else if (bmi < 25) {
        bmit = '과체중';
    } else if (bmi < 30) {
        bmit = '비만';
    } else {
        bmit = '고도비만';
    }

    return (resultEl.innerHTML = `비만도 :  <strong>${bmi.toFixed(
        1
    )}</strong> 으로 <strong>${bmit}</strong> 입니다.`);
};

calcEl.onclick = funcBmi;
