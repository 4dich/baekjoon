const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require('fs').readFileSync(file).toString().trim();
let result = 1;

let length = input.length;
for (let i = 0; i < Math.round(length / 2); i++) {
    if (input.charAt(i) !== input.charAt(length -1 - i)) {
        result = 0;
        break;
    }
}

console.log(result);
