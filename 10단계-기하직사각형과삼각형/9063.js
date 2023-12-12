const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [N, ...input] = require('fs').readFileSync(file).toString().trim().split("\n");
input = input.map(v => v.split(" ").map(Number));

let x = [], y = [];
for (let i = 0, len = N; i < len; i++) {
    x.push(input[i][0]);
    y.push(input[i][1]);
}

console.log((Math.max(...x) - Math.min(...x)) * (Math.max(...y) - Math.min(...y)));