const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [N, K] = require('fs').readFileSync(file).toString().trim().split(' ').map(Number);

let factor = [];
for (let i = 1, len = N + 1; i < len; i++) {
    if (N % i === 0) factor.push(i);
}

let result = factor[K - 1]? factor[K - 1]: 0; 
console.log(result);