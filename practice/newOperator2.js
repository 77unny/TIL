/*
  생성자객체를 생성하여, 음식을 먹을때,운동을 할때 뭄무게 변화 하는걸 만들어보자.
  칼로리가 100 = 몸무게 1kg
*/

// 음식의 종류
let food = [
    {
        name : '피자',
        calorie : 200
    },
    {
        name : '햄버거',
        calorie : 50
    },
    {
        name : '치킨',
        calorie : 100
    }
];
// 운동
let exercise = [
    {
        name : '축구',
        calorie : 100
    },
    {
        name : '농구',
        calorie : 200
    },
    {
        name : '걷기',
        calorie : 50
    }
];

// Person 객체 생성
const Person = function(name,weight){
    this.name = name;
    this.weight = weight;
};
// Person prototype eat
Person.prototype.eat = function(foodName){
    for (let i in food) {
        if (food[i].name === foodName) {
            this.weight += calc(food[i].calorie);
        }
    }
    console.log(`${this.name}이 ${foodName}를 먹어 몸무게가 ${this.weight}kg이 되었습니다.`)
};
// Person prototype exercise
Person.prototype.exercise = function(exercise){

};
// claorie calc
const calc = (calorie) => {
    weight = calorie / 100;
    return weight;
};

let a = new Person('홍길동', 50);
a.eat('피자');





/*
* 푸드의 네임을 알아야 한다.
* 푸드의 네임이 동일한것을 필터링
* 칼로리 100이 weight 1kg 계산식 구해볼것,
*
* 운동 했을때는 푸드의 반대로
* */


