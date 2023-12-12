const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let N = Number(require('fs').readFileSync(file).toString().trim());

for (let i = 2, len = N + 1; i < len; i++) {
    if (N % i === 0) {
        console.log(i);
        N = parseInt(N / i);
        i--;
    }

    if (i > N) break;
}