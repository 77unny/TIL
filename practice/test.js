const f = (x, y, z) => {
    x = x ? x : 4;
    y = y || 5;
    if (!z) {
        z = 6;
    }
    console.log(x, y, z);
};

f(1,2);
f(0, null);
