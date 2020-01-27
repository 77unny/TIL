const { MENU } = require('./menu');
class Barista {
    constructor() {
        this.makeCount = 0;
        this.makeList = [];
    }
    addMakeList(takeOrder) {
        this.makeList.push(takeOrder);
        this.makeCount++;
    }
    isAcceptable() {
        return this.makeCount < 2;
    }
    makeOrder() {}
}

module.exports = { Barista };-[]
