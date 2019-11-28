// Element
let text = document.querySelector('.text');
let view = document.querySelector('.view');
let checkText = document.querySelector('.check');

// 단어 정의
const word = 'apple,function,object,naming,console,javascript'.split(',');
let randomWord = Math.floor(Math.random() * word.length);

// 퍼즐 게임 객체
const puzzle = {};
puzzle.word = word[randomWord];
puzzle.wordArray = [];

puzzle.run = function() {
    console.log('퍼즐이 실행됩니다.');
    this.init();
};

puzzle.init = function() {
    text.innerHTML = this.word;
    puzzle.wordArray = this.word.split('');
    
    for (let i = 0; i < this.word.length; i++) {
        let btn = document.createElement('button');
        btn.innerHTML = this.word[i];
        view.appendChild(btn);
    }
    this.wordRandom();
};
puzzle.wordRandom = function() {
    let random = Math.floor(Math.random() * 2);
    if(random === 0){
        this.flip();
    }

};

puzzle.flip = function() {
    console.log('FLIP');

    let flipArray = [];

    // while (this.wordArray.length != 0) {
    //     let aa = this.wordArray.pop();
    //     flipArray.push(aa);
    // }

    let newWord = this.wordArray;
    let newWordLength = newWord.length;
    for (let i = 0; i < newWordLength; i++) {
        let bb = newWord.pop();
        flipArray.push(bb);
    }

    this.wordArray = flipArray;
    this.funcShift();
    this.funcCheck();
};
puzzle.rShift = function() {
    console.log('R SHIFT');
    let end = this.wordArray.pop();
    this.wordArray.unshift(end);
    this.funcShift();
    this.funcCheck();
};
puzzle.lShift = function() {
    console.log('L SHIFT');
    let end = this.wordArray.shift();
    this.wordArray.push(end);
    this.funcShift();
    this.funcCheck();
};

puzzle.funcShift = function() {
    for (let i = 0; i < this.wordArray.length; i++) {
        view.children[i].innerHTML = this.wordArray[i];
    }
};

puzzle.funcCheck = function() {
    if (this.word !== this.wordArray.join('')) {
        checkText.innerHTML = '불일치 합니다.';
    } else {
        checkText.innerHTML = '일치 합니다.';
    }
};

puzzle.run();
