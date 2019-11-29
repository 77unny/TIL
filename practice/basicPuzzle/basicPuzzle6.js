// element
const progressEl = document.querySelector('.progress');
const textEl = document.querySelector('.text');
const viewEl = document.querySelector('.view');
const checkEl = document.querySelector('.check');
const secEl = document.querySelector('.sec');

// word
const word = 'STABUCKS,TWOSOME,COFFEBEAN,EDIYA,ANGELINUS,HOLLYS'.split(',');

// puzzle object, setting
const puzzle = {};
puzzle.word = '';
puzzle.wordSplit = [];
puzzle.count = 0;
puzzle.maxCount = 3;
puzzle.startTime = Date.now();

puzzle.run = function() {
    console.log('퍼즐이 시작되었습니다.');
    this.init();
};
//초기화 설정
puzzle.init = function(){
    
    this.word = word[Math.floor(Math.random() * word.length)];
    textEl.innerHTML = this.word;
    this.wordSplit = this.word.split('');

    for (let i = 0; i < this.word.length; i++) {
        let btn = document.createElement('button');
        btn.innerHTML = this.word[i];
        viewEl.appendChild(btn);
    }
    this.shuffle();
}

//기능 구현
puzzle.flip = function() {
    let newWord = [];
    for (let i = 0; i < this.word.length; i++) {
        let s = this.wordSplit.pop();
        newWord.push(s);
    }
    this.wordSplit = newWord;
    this.fucnShift();
};
puzzle.rShift = function() {
    let s = this.wordSplit.pop();
    this.wordSplit.unshift(s);
    this.fucnShift();
};
puzzle.lShift = function() {
    let s = this.wordSplit.shift();
    this.wordSplit.push(s);
    this.fucnShift();
};
puzzle.shuffle = function() {
    let n = Math.floor(Math.random() * this.word.length - 2);

    if (Math.floor(Math.random() * 2)) {
        this.flip();
    }
    for (let i = 0; i < n; i++) {
        this.rShift();
        this.flip();
    }
    for (let i = 0; i < n * n; i++) {
        this.lShift();
    }
};
puzzle.fucnShift = function() {
    for (let i = 0; i < this.word.length; i++) {
        viewEl.children[i].innerHTML = this.wordSplit[i];
    }
};
//검사
puzzle.check = function() {
    if (this.word === this.wordSplit.join('')) {
        checkEl.innerHTML = '일치합니다.';
        this.progress();

        //초기화 설정
        this.remove();
        this.init();
    } else {
        checkEl.innerHTML = '불일치합니다.';
    }
};
puzzle.progress = function() {
    this.count++;
    let str = '';
    for(let i = 0; i<this.count; i++){
        str += 'O';
    }
    progressEl.innerHTML = str;
    
    if (this.count === this.maxCount) {
        console.log('퍼즐 종료');
        checkEl.innerHTML = `퍼즐이 종료되었습니다.`
        clearInterval(intervalTimer);
    }
};

puzzle.remove = function(){
    for (let i = 0; i < this.word.length; i++) {
        let aa = viewEl.children[0]
        viewEl.removeChild(aa);
    }
}

//타이머
const timer = () => {
   let now = Date.now() - puzzle.startTime;
   return secEl.innerHTML = (now / 1000).toFixed(2);
}
const intervalTimer = setInterval(timer, 64);

puzzle.run();

const rShift = () => {
    puzzle.rShift();
    puzzle.check();
};
const lShift = () => {
    puzzle.lShift();
    puzzle.check();
};
const flip = () => {
    puzzle.flip();
     puzzle.check();
};
