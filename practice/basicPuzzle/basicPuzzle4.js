const text = document.querySelector('.text');
const view = document.querySelector('.view');
const check = document.querySelector('.check');
const progress = document.querySelector('.progress');
const sec = document.querySelector('.sec');

const word = 'puzzle,function,document,javascript'.split(',');

const puzzle = {
    str: '',
    count: 0,
    maxCount: 3,
    startTime: Date.now()
};
puzzle.word = word;
puzzle.wordSplit = [];

// 초기화, 실행
puzzle.run = function() {
    this.init();
    console.log('퍼즐 시작');
};
puzzle.init = function() {
    this.word = word[Math.floor(Math.random() * word.length)];
    this.wordSplit = this.word.split('');
    text.innerHTML = this.word;

    for (let i = 0; i < this.word.length; i++) {
        let btn = document.createElement('button');
        btn.innerHTML = this.word[i];
        view.appendChild(btn);
    }
    this.shufle();
};

// 기능 : 뒤집기 / 밀어내기
puzzle.flip = function() {
    let flipWord = [];
    let al = this.wordSplit.length;

    for (let i = 0; i < al; i++) {
        let a = this.wordSplit.pop();
        flipWord.push(a);
    }
    this.wordSplit = flipWord;
    this.funcShift();
    this.checkText();
};
puzzle.rShift = function() {
    let a = this.wordSplit.pop();
    this.wordSplit.unshift(a);

    this.funcShift();
    this.checkText();
};
puzzle.lShift = function() {
    let a = this.wordSplit.shift();
    this.wordSplit.push(a);

    this.funcShift();
    this.checkText();
};
puzzle.funcShift = function() {
    for (let i = 0; i < this.wordSplit.length; i++) {
        view.children[i].innerHTML = this.wordSplit[i];
    }
};
puzzle.shufle = function() {
    let n = Math.floor(Math.random() * (this.wordSplit.length - 1));
    if (Math.floor(Math.random() * 2) === 1) {
        this.flip();
    }
    for (let i = 0; i < n; i++) {
        this.rShift();
    }
};

puzzle.checkText = function() {
    if (this.word === this.wordSplit.join('')) {
        check.innerHTML = '일치합니다.';
        this.progress();
        this.removeInit();
        this.init();
    } else if (this.count === this.maxCount) {
        check.innerHTML = `총 ${
            this.maxCount
        }개의 문제를 풀었으며, 걸린 시간은 ${sec.innerHTML} 입니다.`;
    } else {
        check.innerHTML = '불일치합니다.';
    }
};
puzzle.progress = function() {
    this.count++;
    this.str += 'O';
    progress.innerHTML = this.str;
    if (this.count === this.maxCount) {
        console.log('퍼즐 종료');
        clearInterval(it);
    }
};
puzzle.removeInit = function() {
    let viewChild = view.children.length;
    for (let i = 0; i < viewChild; i++) {
        view.removeChild(document.querySelector('.view button'));
    }
};

puzzle.run();
const foo = () => {
    let now = Date.now() - puzzle.startTime;
    sec.innerHTML = now / 1000 + ' ms';
};
const it = setInterval(foo, 50);
