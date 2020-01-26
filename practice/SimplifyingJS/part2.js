/*
자바스크립트의 코딩의 기술 - 조 모건

Part2, 배열로 데이터 컬렉션을 관리하라
1. 배열로 유연한 컬렉션을 생성하라
2. includes()로 존재 여부를 확인하라
3. 펼침연산자로 배열을 본떠라
4. push() 메서드 대신 펼침 연산자로 원본 변경을 피하라
5. 펼침연산자로 정렬에 의한 혼란을 피하라
*/

// 0) intro : ... 펼침 연산자
const TEAM = ['DD', 'BB', 'CC', 'AA'];
const alphabetizeTeam = team => {
    return [...team].sort();
};
console.log(alphabetizeTeam(TEAM));

// 0) intro : 배열 메소드 filter()
const staff = [
    { name: 'Wesley', position: 'musician' },
    { name: 'Davis', position: 'engineer' }
];
function getMusician(staff) {
    return staff.filter(v => {
        return v.position === 'musician';
    });
}
console.log(getMusician(staff));

// 1) includes()존재여부 확인 : 데이터 확인 indexOf() : includeds()
const sections = ['contact', 'shipping'];
function displayShipping(sections) {
    if (sections.indexOf('shipping')) {
        return true;
    }
    return false;
}
function displayShipping2(sections) {
    return sections.indexOf('shipping') > -1;
}
function displayShipping3(sections) {
    return sections.includes('shipping');
}
console.log(displayShipping(sections));
console.log(displayShipping2(sections));
console.log(displayShipping3(sections));
console.log('includes =>', 'abcde'.includes('de'));

// 2) 펼침연산자 배열 복사, 배열자체를 복사 하는것이 아니고 배열의 데이터 들을 그대로 복사 한다. [1,2,3] => 1,2,3 내용만 복사
const books = ['javascript', 'moby dick', 'the dark tower'];
function removeItem(array, item) {
    // 일반적인 코드
    const result = [];
    for (const iterator of array) {
        if (iterator !== item) {
            result.push(iterator);
        }
    }
    return result;
}
function removeItem2(array, item) {
    //splice를 이용한 코드, 기존배열을 그대로 사용할 경우  기존배열이 변형이됨 그래서 result로 복사
    const result = [...array];
    const index = array.indexOf(item);
    result.splice(index, 1);
    return result;
}
function removeItem3(array, item) {
    //slice를 이용한 원본 배열을 변경하지 않고 새로운 배열 생성
    const index = array.indexOf(item);
    return array.slice(0, index).concat(array.slice(index + 1));
}
function removeItem4(array, item) {
    //slice를 이용한 원본 배열을 변경하지 않고 새로운 배열 생성
    const index = array.indexOf(item);
    return [...array.slice(0,index), ...array.slice(index + 1)];
}
console.log(removeItem(books, 'javascript'));
console.log(books); //기존 배열 유지
console.log(removeItem2(books, 'javascript'));
console.log(books); //기존 배열 유지
console.log(removeItem3(books, 'javascript'));
console.log(books); //기존 배열 유지
console.log(removeItem4(books, 'javascript'));
console.log(books); //기존 배열 유지
// 2) 펼침연산자 응용
const book = ['제목:자바스크립트코딩의기술','저자명:조모건',2000];
function formatBook(title,writer,price){
    return `${title}, by${writer}, 가격은${price}`;
}
console.log(formatBook(book[0],book[1],book[2]));
console.log(formatBook(...book));

// 3) push(), 펼침연산자로 사용 하라
const titles = ['자바스크립트코딩의 기술','그림으로 배우는 HTTP'];
const moreTitles = [...titles,'자바스크립트 알고리즘'];
console.log(titles);
console.log(moreTitles);