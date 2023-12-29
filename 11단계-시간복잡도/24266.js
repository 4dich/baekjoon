const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const n = BigInt(require('fs').readFileSync(file).toString().trim());

console.log(`${n * n * n}`);
console.log(3);