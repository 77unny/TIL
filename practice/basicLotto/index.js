// element
const body = document.body;
const getNumberEl = document.createElement('p');
const btnAutoEl = document.querySelector('#btn-auto');
const btnResetEl = document.querySelector('#btn-reset');


const lotto = {};
lotto.SETTING = {
    NUMBER: [],
    AMOUNT: 6
};
lotto.setNumber = function() {
    for (let i = 1; i <= 45; i++) {
        this.SETTING.NUMBER.push(i);
    }
};
lotto.getNumber = function() {
    let num = [];
    for (let i = 0; i < this.SETTING.AMOUNT; i++) {
        let random = Math.floor(Math.random() * this.SETTING.NUMBER.length);
        let a = this.SETTING.NUMBER.splice(random,1)[0];
        num.push(a);
    }
    return num;
};
lotto.reset = function(){
    this.SETTING.NUMBER = [];
    this.init();
}
lotto.init = function() {
    this.setNumber();
};
lotto.viewNumber = function(){
    this.reset();
    let num = this.getNumber();
    getNumberEl.innerHTML = num;
    body.append(getNumberEl);
}
lotto.run = function() {
    this.init();
};
lotto.run();

const lottoAuto = () => lotto.viewNumber()
const lottoReset = () => lotto.reset()

btnAutoEl.onclick = lottoAuto;
btnResetEl.onclick = lottoReset;
