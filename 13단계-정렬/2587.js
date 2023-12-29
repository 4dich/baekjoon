const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let arr = require('fs').readFileSync(file).toString().trim().split("\n").map(Number);

arr.sort((a, b) => a - b);
let sum = arr.reduce((cur, acc) => cur + acc, 0);

console.log(parseInt(sum / 5));
console.log(arr[2]);