const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const N = Number(require('fs').readFileSync(file).toString().trim());

console.log(4 * N);