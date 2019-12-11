// spread operator
const arr = '자바스크립트,함수,객체'.split(',');
const arr2 = [1, 2, 3, 4, ...arr];

let a;
a = 2 + 3 * 2 ;

//new 객체는 arrow function, this가 전역으로 선언되기 때문
const Person = function(name){
    this.name = name,
    this.hp = 100,
    this.pw = 5
}
Person.prototype.att = function(target){
    target.hp = target.hp - this.pw;
    console.log(`${this.name}이 ${target.name}을 공격하였습니다.`);
    console.log(target);
}

const aa = new Person('홍길동');
const bb = new Person('박철수');

// aa.att(bb);
// console.log(aa);





