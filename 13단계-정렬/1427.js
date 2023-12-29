const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let N = require('fs').readFileSync(file).toString().trim();

let arr = Array.from(N).sort((a, b) => b - a);
console.log(arr.join(''));