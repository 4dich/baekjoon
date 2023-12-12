const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [rule, ...round] = require('fs').readFileSync(file).toString().trim().split('\n');
const basket = Array(Number(rule.split(' ')[0])).fill(0).map((v, i) => i + 1);

const playRound = function (v) {
    const [num1, num2] = v.split(' ').map(Number);
    const from = Math.min(num1, num2);
    const to = Math.max(num1, num2);
    const length = to - from + 1;
    let changedArr = new Array(length);
    
    for (let i = 0; i < length; i++) {
        changedArr[i] = basket[i + from - 1];
    }

    changedArr = changedArr.reverse();

    for (let i = 0; i < length; i++) {
        basket[i + from - 1] = changedArr[i];
    }
};

round.forEach(playRound);
console.log(basket.join(' '));