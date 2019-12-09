const inputEl = document.querySelector('#text');
const resultEl = document.querySelector('#btn-result');
let word = '공부의정석';
let word2;

const view = document.createElement('p');
document.body.append(view);
view.innerHTML = word;

const ending = () => {
    if(word[word.length - 1] === inputEl.value[0]){
        console.log('일치합니다.');
        word = inputEl.value;
        view.innerHTML = word;
        return word;
    } 
    return console.log('일치하지않습니다.')
}

resultEl.onclick = ending;

console.log(word[word.length - 1]);


