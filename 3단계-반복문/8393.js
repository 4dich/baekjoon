let [n] = require('fs').readFileSync('input.txt').toString().split(' ');
n = Number(n);

console.log(n * (n + 1) / 2);