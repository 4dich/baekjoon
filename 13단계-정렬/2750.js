const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [N, ...arr] = require('fs').readFileSync(file).toString().trim().split("\n");
arr = arr.map(Number);

arr.sort((a, b) => a - b);
arr.map(v => console.log(v));