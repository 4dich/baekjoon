const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const n = require('fs').readFileSync(file).toString().trim();

console.log(parseInt(n * (n - 1) / 2));
console.log(2);