// DOM
let text = document.querySelector('.text').innerHTML;
let view = document.querySelector('.view');
let check = document.querySelector('.check');

// view 초기화
let textArry = text.split('');
for (let i = 0; i < textArry.length; i++) {
    let btn = document.createElement('button');
    btn.innerHTML = textArry[i];
    view.appendChild(btn);
}

// 결과값 체크
const resultCheck = () =>{
    let checkText = textArry.join('');
    if(text !== checkText){
        check.innerHTML = '불치합니다.'
    } else{
        check.innerHTML = '일치합니다.'
    }
}

// 밀어낸 단어 재정의
const push = ()=>{
    for (let i = 0; i < textArry.length; i++) {
        view.children[i].innerHTML = textArry[i];
    }
}

// 뒤집기
const flip = () => {
    console.log('FLIP');
    let endWord = textArry.pop();
    let endWord2 = textArry.pop();
    let startWord = textArry.shift();
    let startWord2 = textArry.shift();
    textArry.unshift(endWord);
    textArry.unshift(endWord2);
    textArry.push(startWord);
    textArry.push(startWord2);
    push();
    resultCheck();
};

// 오른쪽 밀어내기
const rPush = () => {
    console.log('R PUSH');
    let endWord = textArry.pop();
    textArry.unshift(endWord);
    push();
    resultCheck();
};

// 왼쪽 밀어내기
const lPush = () => {
    console.log('L PUSH');
    let endWord = textArry.shift();
    textArry.push(endWord);
    push();
    resultCheck();
};
