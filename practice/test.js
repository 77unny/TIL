const f = (x, y, z) => {
    x = x !== undefined ? x : 4;
    y = y || 5;
    if (!z) {
        z = 6;
    }
    console.log(x, y, z);
};

f(1, 2);
f(0, null);
f(false, null, undefined);

const f2 = (x = 1, y = 2) => {
    console.log(x, y);
};
f2();
f2(null, false);

const foo = (x = 1, y = 2, z = 3) => {
    // let x;
    // let y;
    // let z;
    console.log(x, y, z);
};
foo(0, 1);

const foo2 = (x = 1, y = z + 1, z = 3) => {
    console.log(x, y, z);
};
foo2(1, 2);

const noValid = () => {
    console.log('notValid Called');
    return 10;
};
const foo3 = (x = 1, y = noValid()) => {
    console.log(x, y);
};
foo3(1);

const foo4 = (a, ...z) => {
    console.log(z);
};
foo4(1, 2, 3, 4, 5, 6, false);

const getCircle = a => {
    const result = Math.PI * a;
    console.log(result);
    return result;
};
const getRect = (a, b) => {
    const result = a * b;
    console.log(result);
    return result;
};

const getTrapezoid = (a, b, h) => {
    const result = (a + b) * h * 0.5;
    console.log(result);
    return result;
};

const getArea = (type, ...prmt) => {
    const arryPrmt = [...prmt];
    // arryPrmt.push(...prmt); push를 안해도 배열로 들어가짐
    const shape = type;
    switch (shape) {
        case 'circle':
            console.log('circle');
            getCircle(arryPrmt[0]);
            break;
        case 'rect':
            console.log('rect');
            getRect(arryPrmt[0], arryPrmt[1]);
            break;
        case 'trapezoid':
            console.log('trapezoid');
            getTrapezoid(arryPrmt[0], arryPrmt[1], arryPrmt[2]);
            break;
        default:
            console.log('해당 도형이 없습니다.');
    }
};

getArea('circle', 10, 10);
getArea('rect', 10, 15);
getArea('trapezoid', 10, 15, 12);
