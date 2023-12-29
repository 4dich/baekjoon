const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [cond, str_score] = require('fs').readFileSync(file).toString().trim().split("\n");

let [N, k] = cond.split(" ").map(Number);
let score = str_score.split(" ").map(Number);

score.sort((a, b) => b - a);
console.log(score[k - 1]);