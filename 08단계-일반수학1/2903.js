const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const N = require('fs').readFileSync(file).toString().trim();

let row = 2;
for (let i = 0, len = Number(N); i < len; i++) {
    row = 2 * row - 1;
}

console.log(Math.pow(row, 2));