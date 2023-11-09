const arr = require('fs').readFileSync('input.txt').toString().split(' ');
const sum = arr.reduce((acc, cur) => acc + Number(cur), 0);

console.log(sum);