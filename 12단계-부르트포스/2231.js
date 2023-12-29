const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require('fs').readFileSync(file).toString().trim();

let arr = [];
let N = Number(input);

const getDigitSum = (num) => {
    let str = Array.from(num.toString());
    return str.reduce((acc, cur) => acc + Number(cur), 0);
};

for (let i = 1; i < N; i++) {
    if (N === i + getDigitSum(i)) arr.push(i);
}

console.log((arr.length > 0)? Math.min(...arr): 0);