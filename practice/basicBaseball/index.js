// elements
const body = document.body;
const userNumEl = document.querySelector('#user-number');
const checkTextEl = document.querySelector('#check-text');

const game = {};
game.SETTING = {
    COUNT: 0,
    MAXCOUNT: 10,
    NUMBER: [],
    MAXNUMBER: 10,
    AMOUNT: 3,
    SETNUMBER: [],
    STRIKE: 0,
    BALL: 0
};
game.setNumber = function() {
    for (let i = 0; i < this.SETTING.AMOUNT; i++) {
        let random = Math.floor(Math.random() * this.SETTING.NUMBER.length);
        let a = this.SETTING.NUMBER.splice(random, 1)[0];
        this.SETTING.SETNUMBER.push(a);
    }
    console.log(`-> setNumber실행 : ${this.SETTING.SETNUMBER}`);
    return this.SETTING.SETNUMBER;
};
game.checkNum = function() {
    let a = this.SETTING.SETNUMBER;
    let b = this.user.number;
    if (b.length === 3) {
        for (let i = 1; i < this.SETTING.MAXNUMBER; i++) {
            document.querySelector(`#num-${i}`).disabled = true;
        }
        this.check(a, b);
    }
};
game.check = function(a, b) {
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {
            if(a[i] === b[j]){
                 if(i === j) {
                     this.SETTING.STRIKE++
                 }else{
                     this.SETTING.BALL++
                 }
                 break;
            }
        }
    }
};
game.init = function() {
    for (let i = 1; i < this.SETTING.MAXNUMBER; i++) {
        this.SETTING.NUMBER.push(i);
    }
    this.setNumber();
};

game.run = function() {
    this.init();
};
game.run();

// game user
game.user = {
    number: []
};
game.user.numClick = function(value) {
    this.number.push(Number(value));
    document.querySelector(`#num-${value}`).disabled = true;
    game.view.print();
    game.checkNum();
};
game.user.reset = function() {
    this.number = [];
    for (let i = 1; i < game.SETTING.MAXNUMBER; i++) {
        document.querySelector(`#num-${i}`).disabled = false;
    }
    game.view.print();
};

// view
game.view = {};
game.view.print = function() {
    let srt = '';
    srt += game.user.number;
    userNumEl.innerHTML = srt;
};
game.view.checkPrint = function(){
    if(game.user.number.length !== 3) return alert('숫자 3개를 선택하세요.')  
    return checkTextEl.innerHTML = `${game.SETTING.STRIKE}스트라이크, ${game.SETTING.BALL}볼`
}

const numClick = value => {
    game.user.numClick(value);
};
const reset = () => {
    game.user.reset();
};
const result = () => {
    game.view.checkPrint();
}
