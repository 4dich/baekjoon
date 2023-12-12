const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [min, max] = require('fs').readFileSync(file).toString().trim().split('\n').map(Number);

const isPrime = (value) => {
    let result = true;

    if (value === 1) return false;

    for (let i = 2, len = value; i < len; i++) {
        if (value % i === 0) result = false;
    }

    return result;
};

let result_sum = 0;
let result_min = 0;

for (let i = min, len = max + 1; i < len; i++) {
    if (isPrime(i)) {
        result_sum += i;
        if (result_min === 0) result_min = i;
    } 
}

if (result_min !== 0) {
    console.log(result_sum);
    console.log(result_min);
} else {
    console.log(-1);
}