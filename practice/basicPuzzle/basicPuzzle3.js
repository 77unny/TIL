//element
let text = document.querySelector('.text');
let view = document.querySelector('.view');
let check = document.querySelector('.check');

const word = 'javascript,function,array,push,unshift,shift'.split(',');
const rWord = Math.floor(Math.random() * word.length);

const puzzle = {};
puzzle.word = word[rWord];
puzzle.wordArray = [];

puzzle.run = function() {
    console.log('PUZZLE 게임이 시작되었습니다.');
    this.init();
    console.log(this.wordArray);
};

puzzle.init = function() {
    text.innerHTML = this.word;
    this.wordArray = this.word.split('');
    for (let i = 0; i < this.word.length; i++) {
        let btn = document.createElement('button');
        btn.innerHTML = this.word[i];
        view.appendChild(btn);
    }
};

puzzle.flip = function() {
    console.log('FLIP : 뒤집기');
    let a = [];
    console.log(this.wordArray);
    let wordL = this.wordArray.length;
    for (let i = 0; i < wordL; i++) {
        let b = this.wordArray.pop();
        a.push(b);
    }
    this.wordArray = a;
    this.funcShift();
    this.checkText();
};


puzzle.rShift = function() {
    console.log('R SHIFT : 오른쪽으로 밀어내기');
    let a = this.wordArray.pop();
    this.wordArray.unshift(a);
    this.funcShift();
    this.checkText();
};

puzzle.lShift = function() {
    console.log('L SHIFT : 왼쪽으로 밀어내기');
    let a = this.wordArray.shift();
    this.wordArray.push(a);
    this.funcShift();
    this.checkText();
};

puzzle.funcShift = function() {
    for (let i = 0; i < this.wordArray.length; i++) {
        view.children[i].innerHTML = this.wordArray[i];
    }
};

puzzle.checkText = function() {
    if (text.innerHTML === this.wordArray.join('')) {
        check.innerHTML = '일치합니다.';
    } else {
        check.innerHTML = '불일치 합니다.';
    }
};

puzzle.run();
