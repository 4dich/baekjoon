const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [x, y, w, h] = require('fs').readFileSync(file).toString().trim().split(" ");

console.log(Math.min(x, y, w-x, h-y));