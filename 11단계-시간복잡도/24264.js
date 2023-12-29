const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const n = require('fs').readFileSync(file).toString().trim();

console.log(n ** 2);
console.log(2);