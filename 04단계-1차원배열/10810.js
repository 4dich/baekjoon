// local: input.txt
// backj: /dev/stdin
const [rule, ...round] = require('fs').readFileSync('input.txt').toString().trim().split('\n');
const basket = new Array(Number(rule.split(' ')[0])).fill(0);
const playRound = function (r) {
    const [from, to, ball] = r.split(' ').map(Number);

    for(let i = from; i <= to; i++) {
        basket[i - 1] = ball;
    }
};

round.forEach(playRound);
console.log(basket.join(" "));