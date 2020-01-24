class Foo {
    constructor(name) {
        this.name = name;
    }
    print(){
        console.log(`이름은 ${this.name}`);
    }
}

module.exports = {Foo};