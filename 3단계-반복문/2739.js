let [n] = require('fs').readFileSync('input.txt').toString().split('');

n = Number(n);
for(var i = 1; i < 10; i++) {
    console.log(`${n} * ${i} = ${ n * i }`);
};