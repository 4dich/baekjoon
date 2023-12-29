const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let N = Number(require('fs').readFileSync(file).toString().trim());

let five_max = parseInt(N / 5);
let result = 0;

for (let i = five_max; i > -1; i--) {
    if ((N - (i * 5)) % 3 === 0) {
        result = parseInt((N - (i * 5)) / 3) + i;
        break;
    }
}

console.log(result || -1);