const { sum, sumOf } = require('./sum');

describe('sum', () => {
    test('1 + 2 = 3', () => {
        expect(sum(1,2)).toBe(3);
    });
    test('2 + 2 = 4', () => {
        expect(sum(2,2)).toBe(4);
    });
    test('배열 더하기', () => {
        const array = [1,2,3,4,5];
        expect(sumOf(array)).toBe(15);
    });
});
