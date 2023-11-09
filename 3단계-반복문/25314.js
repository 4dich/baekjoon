const str = require('fs').readFileSync('input.txt').toString();
const cnt = Number(str) / 4;
let result = 'int';
for (let i = 0; i < cnt; i++) {
    result = 'long ' + result;
}

console.log(result);