let str = require('fs').readFileSync('input.txt').toString().trim();
let result = [];
for(let i = 97; i < 123; i++) {
    result.push(str.indexOf(String.fromCharCode(i)));
}
console.log(...result);