let input = require('fs').readFileSync('input.txt').toString().trim();

input = Number(input);

function calc(n) {
    let digit10 = Math.floor(n / 10);
    let digit1 = n % 10;
    
    let n1 = digit1;
    let n2 = (digit10 + digit1) % 10;

    return n1 * 10 + n2;
}

let flag = true;
let count = 0;
let result = input;
while(flag) {
    count++;
    result = calc(result);
    if(result === input) {
        flag = false;
    }
}

console.log(count);