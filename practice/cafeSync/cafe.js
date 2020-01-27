const { Barista } = require('./barista');
class Cafe {
    constructor() {
        this.orderList = [];
        this.Barista = new Barista();
    }
    takeOrder(order) {
        this.orderList.push(...order);
        this.print();
    }
    checkOrder() {
        const CHECK_TIME = 1000;
        setInterval(() => {
            if (this.isEmptyOrder()) {
                this.pullOrder();
            }
        }, CHECK_TIME);
    }
    isEmptyOrder() {
        return this.orderList.length !== 0; // 0이면 false, 0이 아니면 true ;
    }
    pullOrder() {
        if (this.Barista.isAcceptable()) {
            const order = this.orderList.shift();
            this.Barista.addMakeList(order);
        }
    }
    run(takeOrder) {
        this.takeOrder(takeOrder);
        console.log(this.pullOrder());
    }
    print() {
        console.log(this.orderList);
    }
}
module.exports = { Cafe };
