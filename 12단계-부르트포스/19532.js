const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [a, b, c, d, e, f] = require('fs').readFileSync(file).toString().trim().split(" ").map(Number);

let x = parseInt(((b * f) - (c * e)) / ((b * d) - (a * e)));
let y = parseInt(((c * d) - (a * f)) / ((b * d) - (a * e)));

console.log(`${x} ${y}`);