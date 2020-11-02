const CLASS_ELEMENT = {
    PROGRESS: '.progress',
    TEXT: '.text',
    VIEW: '.view',
    CHECK: '.check',
    SEC: '.sec'
}
const WORD = {
    PUZZLE: 'PUZZLE',
    PLAY: 'PLAY',
    GAME: 'GAME',
    STUDY: 'STUDY',
    PROGRAMING: 'PROGRAMING',
    JAVASCRIPT: 'JAVASCRIPT'
}
const DOC = document
const INIT = {
    COUNT: 0,
    MAX_COUNT: 3
}
const qs = target => {
    return document.querySelector(target)
}

// element
const progressEl = qs(CLASS_ELEMENT.PROGRESS)
const textEl = qs(CLASS_ELEMENT.TEXT)
const viewEl = qs(CLASS_ELEMENT.VIEW)
const checkEl = qs(CLASS_ELEMENT.CHECK)
const secEl = qs(CLASS_ELEMENT.SEC)

// word
const word = Object.keys(WORD)

// puzzle object, setting
const puzzle = {}
puzzle.word = word[Math.floor(Math.random() * word.length)]
puzzle.wordSplit = puzzle.word.split('')
puzzle.count = INIT.COUNT
puzzle.maxCount = INIT.MAX_COUNT
puzzle.startTime = Date.now()

// 실행 및 초기화
puzzle.run = function() {
    console.log('퍼즐이 시작 되었습니다.')
    textEl.innerHTML = this.word

    const charList = this.word.split('').map(char => char)
    const flag = DOC.createDocumentFragment()

    charList.forEach(char => {
        const btnEl = DOC.createElement('button')
        btnEl.innerText = char
        flag.appendChild(btnEl)
    })
    viewEl.appendChild(flag)

    this.funcShuffle()
}

// 기능 구현 : 뒤집기
puzzle.flip = function() {
    console.log('FLIP')
    const charList = this.word.split('').map(char => char)
    let flipArray = []

    charList.forEach(char => {
        let s = this.wordSplit.pop()
        flipArray.push(s)
    })
    this.wordSplit = flipArray

    this.funcShift()
}

// 기능 구현 : 오른쪽 밀어내기
puzzle.rShift = function() {
    console.log('R SHIFT')
    let s = this.wordSplit.pop()
    this.wordSplit.unshift(s)
    this.funcShift()
}

// 기능 구현 : 왼쪽 밀어내기
puzzle.lShift = function() {
    console.log('L SHIRT')
    let s = this.wordSplit.shift()
    this.wordSplit.push(s)
    this.funcShift()
}

// 기능 구현 : 공통 밀어내기
puzzle.funcShift = function() {
    for (let i = 0; i < this.wordSplit.length; i++) {
        viewEl.children[i].innerHTML = this.wordSplit[i]
    }
    this.check()
}

// 기능 구현 : 랜덤 셔플
puzzle.funcShuffle = function() {
    let randomN = Math.floor(Math.random() * (this.wordSplit.length - 1))
    let randomHalf = Math.floor(Math.random() * 2)
    if (randomHalf) {
        this.flip()
    }
    for (let i = 0; i < randomN; i++) {
        this.rShift()
    }
    // for (let i = 0; i < randomN * randomN; i++) {
    //     this.lShift();
    // }
}

// 진행 상태
puzzle.progress = function() {
    // count 증가
    this.count++
    let str = ''
    for (let i = 0; i < this.count; i++) {
        str += 'O'
    }
    progressEl.innerHTML = str

    for (let i = 0; i < this.wordSplit.length; i++) {
        viewEl.removeChild(document.querySelector('.view button'))
    }

    this.word = word[Math.floor(Math.random() * word.length)]
    textEl.innerHTML = this.word
    this.wordSplit = this.word.split('')
    for (let i = 0; i < this.word.length; i++) {
        let btnEl = document.createElement('button')
        btnEl.innerHTML = this.word[i]
        viewEl.appendChild(btnEl)
    }
    this.funcShuffle()
    this.finish()
}

// 결과값 체크
puzzle.check = function() {
    if (this.word === this.wordSplit.join('')) {
        checkEl.innerHTML = '일치합니다.'
        this.progress()
    } else {
        checkEl.innerHTML = '일치하지 않습니다.'
    }
}

// 종료
puzzle.finish = function() {
    if (this.maxCount === this.count) {
        checkEl.innerHTML = '퍼즐이 종료 되었습니다.'
        clearInterval(intervalTimer)
    }
}

// 퍼즐 실행
puzzle.run()

// 타이머
const timer = () => {
    let now = Date.now() - puzzle.startTime
    secEl.innerHTML = now / 1000 + ' 초'
}
const intervalTimer = setInterval(timer, 50)

const flip = () => {
    puzzle.flip()
}
const rShift = () => {
    puzzle.rShift()
}
const lShift = () => {
    puzzle.lShift()
}
