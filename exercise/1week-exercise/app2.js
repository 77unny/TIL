//함수 호출시 1씩 증가 하여 반환하는 함수 만들기

//전역변수가 있는 경우
let number = 0;
const increment1 = () => {
    number++
    return number;
};

increment1()
increment1()

console.log(increment1());

//동적 바인딩 사용
const increment2 = (num) => {
    if (num !== undefined) {
        increment2.aaa = num;
    } else {
        increment2.aaa++;
    }
    return increment2.aaa;
};
increment2(2)
increment2()

console.log(increment2());

//클로저 사용
const increment3 = () => {

}