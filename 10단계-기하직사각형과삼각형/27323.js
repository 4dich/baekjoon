const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [height, width] = require('fs').readFileSync(file).toString().trim().split("\n");

console.log(height * width);