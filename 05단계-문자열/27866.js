// local: input.txt
// backj: /dev/stdin
const [str, pos] = require('fs').readFileSync('input.txt').toString().trim().split('\n');
console.log(str.charAt(Number(pos) - 1));