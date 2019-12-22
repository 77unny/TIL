const f = (x, y, z) => {
    x = x !== undefined ? x : 4;
    y = y || 5;
    if (!z) {
        z = 6;
    }
    console.log(x, y, z);
};

f(1,2);
f(0, null);
f(false, null, undefined);

const f2 = (x = 1, y = 2) => {
    console.log(x,y);
}
f2();
f2(null,false)

const foo = (x = 1, y = 2, z = 3) => {
    // let x;
    // let y;
    // let z;
	console.log(x,y,z)
}
foo(0,1)

const foo2 = (x = 1, y = z + 1, z = 3) => {
	console.log(x,y,z)
}
foo2(1,2)

const noValid = () => {
    console.log('notValid Called');
    return 10;
}
const foo3 = (x = 1, y = noValid()) => {
    console.log(x,y)
};
foo3(1)