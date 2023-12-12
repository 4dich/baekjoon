let charArr = require('fs').readFileSync('input.txt').toString().trim().split(' ');
let n1 = [...charArr[0]].reverse().join('');
let n2 = [...charArr[1]].reverse().join('');
console.log((n1 >= n2)? n1: n2);