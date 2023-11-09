const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require('fs').readFileSync(file).toString().trim().split(' ');

let allCollect = [1, 1, 2, 2, 2, 8];
let solution = allCollect.map((val, i) => val - parseInt(input[i]));

console.log(solution.join(' '));