const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const N = Number(require('fs').readFileSync(file).toString().trim().split("\n"));

let min = 1;
let cnt = 1;

while (N > min) {
    min = min + 6 * cnt;
    cnt += 1;
}

console.log(cnt);