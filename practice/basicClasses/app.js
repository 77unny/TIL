const { Book } = require('./book');
const { BOOKLIST } = require('./booklist');

const addBook = (bookTitle, bookWriter) => {
    const book = new Book(bookTitle, bookWriter);
    BOOKLIST.push(book);
}

addBook('자바스크립트 자료구조와 알고리즘','마이클 맥밀런');
addBook('you dont know js','카일 심슨');

console.log(BOOKLIST);
console.log(BOOKLIST[0].title);

