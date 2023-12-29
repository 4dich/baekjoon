const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [N, ...input] = require('fs').readFileSync(file).toString().trim().split("\n");

const coordArr = input.map(v => v.split(" ").map(Number));
let result = "";

coordArr
.sort((a, b) => {
    if (a[1] !== b[1]) {
        return a[1] - b[1];
    } else {
        return a[0] - b[0];
    }
})
.map(coords => {
    result += `${coords[0]} ${coords[1]}\n`;
});

console.log(result);