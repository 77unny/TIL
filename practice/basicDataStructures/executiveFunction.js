//함수가 실행되는 것과 함수가 담긴것을 구분하자

const foo = () => {
    return console.log('foo 함수 실행');
};

const List = function(){
    this.foo = foo; // 함수가 담긴것
    // this.foo = foo() // 함수가 실행된것
}

const test = new List

console.log(test.foo) // 함수가 담긴것
console.log(test.foo()) // 함수가 실행된것