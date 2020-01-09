const sum = (a, b) => {
    return a + b;
};

const sumOf = number => {
    let result = 0;
    number.forEach(n => {
        result += n;
    });
    return result;
};

exports.sum = sum;
exports.sumOf = sumOf;
