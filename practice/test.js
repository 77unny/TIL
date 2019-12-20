const num = [1,2,3,4,5,6,7,8,9];
const num2 = []
const num3 = [2,3,4]

for(let i =0; i<3; i++ ){
    let ran = Math.floor(Math.random()*num.length);
    let a = num.splice(ran,1)[0];
    console.log(`랜덤 수 : ${ran}`);
    num2.push(a);
}

