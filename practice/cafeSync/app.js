const { Cafe } = require('./cafe');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const cafe = new Cafe();
const orderParse = order => {
    // 입력은 A,1:2,2:1 으로 들어온다.
    const result = [];
    const userOrders = order.split(',');
    const userName = userOrders.shift();
    for (const iterator of userOrders) {
        const [menu, amount] = iterator.split(':');
        for (let i = 0; i < amount; i++) {
            result.push(`${userName}${menu}`);
        }
    }
    return result;
};
const main = () => {
    console.log('주문을 입력하세요.');
    cafe.checkOrder();
    rl.on('line', function(line) {
        const parseOrder = orderParse(line);
        cafe.run(parseOrder);
    });
};
main();
