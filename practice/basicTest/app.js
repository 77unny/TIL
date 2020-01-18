/**
 * 커피메이커
 * 재료 : 물, 우유..
 * 재료에 따라 커피 종류가 달라짐
 * Default : 에스프레소
 * Default + 물 : 아메리카노
 * Default + 우유 : 라떼
 *
 * 설계
 * - 재료를 받아온다.
 * - 재료를 탐색,
 *   - 물이 있으면 return '아메리카노'
 *   - 우유가 있으면 return '라뗴'
 */

const coffee = (...arg) => {
    const elements = [...arg];
    let coffee = '에스프레소';

    for (const iterator of elements) {
        if (iterator === '물') return (coffee = '아메리카노');
        if (iterator === '우유') return (coffee = '라떼');
    }

    return coffee;
};

exports.내보낼이름 = coffee;
