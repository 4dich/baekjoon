let [n, arr] = require('fs').readFileSync('input.txt').toString().trim().split('\n');

arr = arr.split(' ');
let max = Math.max(...arr);
let sum = arr.reduce((acc, cur) => Number(acc) + Number(cur));
console.log((sum * 100) / (max * n));