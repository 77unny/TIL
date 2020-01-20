class Foo {
    constructor(name) {
        this.name = name;
    }
    greeting(){
        console.log(`나의 이름은 ${this.name} 입니다.`)
    }
}


module.exports = {Foo};