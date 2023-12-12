const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [N, input] = require('fs').readFileSync(file).toString().trim().split("\n");

const input_arr = input.split(" ").map(Number);
const isPrime = (value) => {
    let result = true;

    if (value === 1) return false;

    for (let i = 2, len = value; i < len; i++) {
        if (value % i === 0) result = false;
    }

    return result;
};

let count = 0;
input_arr.map(v => {
    if (isPrime(v)) count++;
});

console.log(count);