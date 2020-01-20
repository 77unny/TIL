const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const { Foo } = require('./foo');
const person = new Foo('홍길동');

rl.on('line', function(line) {
  if(line === 'name') return person.greeting();
}).on('close', function() {
    process.exit();
});
