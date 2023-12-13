const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [a, b, c] = require('fs').readFileSync(file).toString().trim().split(" ").map(Number);

let max = Math.max(a, b, c);
let sum = a + b + c;
let result = 0;

if (sum - max <= max) {
    result = (sum - max) * 2 - 1;
} else {
    result = sum;
}

console.log(result);