let obj = {}
obj.plus = function(a,b){
    return a + b;
}
obj.minus = (a,b) => a - b;
obj.name = '홍길동';

console.log(obj);
console.log(obj.minus(10,2));
console.log(obj.name);

