const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [a, c, n0] = require('fs').readFileSync(file).toString().trim().split("\n");
let [a1, a0] = a.split(" ").map(Number);

c = Number(c);
n0 = Number(n0);
// TODO: a1, a0가 절대값 100사이값이라는 조건에 유의
let result = (n0 * (c - a1) >= a0) && (c >= a1)? 1: 0;

console.log(result);