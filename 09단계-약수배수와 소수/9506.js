const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require('fs').readFileSync(file).toString().trim().split("\n").map(Number);
input.pop();

const checkPerfect = (input) => {
    let factor = [];
    let sum = 0;
    let result;

    for (let i = 1, len = input; i < len; i++) {
        if (input % i === 0) {
            factor.push(i);
            sum += i;
        }
    }

    if (input === sum) {
        result = input + " = " +  factor.join(" + ");
    } else {
        result = input + " is NOT perfect.";
    }

    return result;
};

input.map(v => {
    console.log(checkPerfect(v));
});