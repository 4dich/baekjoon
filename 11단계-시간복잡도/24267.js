const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const n = require('fs').readFileSync(file).toString().trim();

console.log(`${ BigInt(n) * BigInt(n-1) * BigInt(n-2) / BigInt(3 * 2) }`);
console.log(3);