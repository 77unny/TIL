// element
const progressEl = document.querySelector('.progress');
const textEl = document.querySelector('.text');
const viewEl = document.querySelector('.view');
const checkEl = document.querySelector('.check');
const secEl = document.querySelector('.sec');

// word
const word = 'STABUCKS,TWOSOME,COFFEBEAN,EDIYA,ANGELINUS,HOLLYS'.split(',');

const game = {};
game.init = {
    maxGame: 3,
    
}
game.word = word[Math.floor(Math.random() * word.length)];
game.wordSplit = game.word.split('');
game.textWord = textEl.innerHTML = game.word;
game.run = function() {
    for (let i = 0; i < game.wordSplit.length; i++) {
        let btn = document.createElement('button');
        btn.innerHTML = game.wordSplit[i];
        viewEl.append(btn);
    }
};
game.funcRshift = function() {
    let a = this.wordSplit.pop();
    this.wordSplit.unshift(a);
    for (let i = 0; i < game.wordSplit.length; i++) {
        viewEl.children[i].innerHTML = this.wordSplit[i];
    }
};
game.funcLshift = function() {
    let a = this.wordSplit.shift();
    this.wordSplit.push(a);
    for (let i = 0; i < game.wordSplit.length; i++) {
        viewEl.children[i].innerHTML = this.wordSplit[i];
    }
};
game.funcFlip = function() {
    let arry = [];
    let thisWordLength = this.wordSplit.length;
    for (let i = 0; i < thisWordLength; i++) {
        let a = this.wordSplit.pop();
        arry.push(a);
    }
    this.wordSplit = arry;
    for (let i = 0; i < game.wordSplit.length; i++) {
        viewEl.children[i].innerHTML = this.wordSplit[i];
    }
};
game.funcShuffle = function() {
    let ran = Math.floor(Math.random() * this.wordSplit.length);
    let halfRan = Math.floor(Math.random() * 2);
    if (halfRan === 0) this.funcFlip();
    for (let i = 0; i < ran; i++) {
        this.funcRshift();
    }
};
game.run();

const flip = () => game.funcFlip();
const rShift = () => game.funcRshift();
const lShift = () => game.funcLshift();
const shuffle = () => game.funcShuffle();

console.log(game.word);
console.log(game.wordSplit);
