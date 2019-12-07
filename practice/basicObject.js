let obj = {}
obj.plus = function(a,b){
    return a + b;
}
obj.minus = (a,b) => a - b;
obj.name = '홍길동';
obj.funcName = () => {
    let a = this.name + ' 입니다.';
    console.log(a);
}
obj.funcName2 = function() {
    let a = this.name + ' 입니다.';
    console.log(a);
}
console.log(obj);
console.log(obj.minus(10,2));
console.log(obj.name);
console.log(obj.funcName());
console.log(obj.funcName2());

