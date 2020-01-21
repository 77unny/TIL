const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


const question1 = () => {
    return new Promise((resolve, reject) => {
        rl.question(
            '네트워크 클래스를 선택하세요. (A, B, C 클래스) ',
            answer => {
                resolve(answer);
            }
        );
    });
};

const question2 = () => {
    return new Promise((resolve, reject) => {
        rl.question('사용할 IP 주소를 입력하세요. ', answer => {
            resolve(answer);
        });
    });
};

const question3 = () => {
    return new Promise((resolve, reject) => {
        rl.question('주소에서 사용할 서브넷 비트를 입력하세요. ', answer => {
            resolve(answer);
        });
    });
}

const main = async () => {
    const ipType = await question1();
    const ipAddress = await question2();
    const subnetBit = await question3();


    rl.close();
};

main();
