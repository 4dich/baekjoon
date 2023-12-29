const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [N, ...input] = require('fs').readFileSync(file).toString().trim().split("\n");
input = input.map(Number).sort((a, b) => a - b);
console.log(input.join("\n"));