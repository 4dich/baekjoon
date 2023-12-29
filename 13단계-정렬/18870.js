const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [N, input] = require('fs').readFileSync(file).toString().trim().split("\n");

const inputArr = input.split(" ").map(Number);

inputArr.sort((a, b) => a - b);


console.log(inputArr);