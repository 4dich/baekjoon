const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [rule, ...round] = require('fs').readFileSync(file).toString().trim().split('\n');
const basket = Array(Number(rule.split(' ')[0])).fill(0).map((v, i) => i + 1);
const playRound = function (v) {
    const [ball1, ball2] = v.split(' ').map(Number);
    let tmp = basket[ball1 - 1];
    basket[ball1 - 1] = basket[ball2 - 1];
    basket[ball2 - 1] = tmp;
};

round.forEach(playRound);
console.log(basket.join(' '));