let [len, num] = require('fs').readFileSync('input.txt').toString().trim().split('\n');
let numArr = [...num].map(Number);
console.log(numArr.reduce((acc, cur) => acc + cur, 0));