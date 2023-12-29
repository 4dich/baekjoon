const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [cond1, cond2] = require('fs').readFileSync(file).toString().trim().split("\n");
const [N, M] = cond1.split(" ").map(Number);
const cards = cond2.split(" ").map(Number);

let len = cards.length;
let sumArr = [];

for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
        for (let k = 0; k < len; k++) {
            if (i !== j && j !== k && k !== i) {
                sumArr.push(cards[i] + cards[j] + cards[k]);
            }
        }
    }
}
let underSumArr = sumArr.filter(v => (M - v) >= 0);
console.log(Math.max(...underSumArr));