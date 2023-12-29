const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [N, ...input] = require('fs').readFileSync(file).toString().trim().split("\n");

const idxArr = input.map((v, i) => {
    let arr = v.split(" ");
    arr.push(i);
    return arr;
});

let result = "";
idxArr.sort((a, b) => {
    if (a[0] !== b[0]) {
        return a[0] - b[0];
    } else {
        return a[2] - b[2];
    }
}).map(v => {
    result += `${v[0]} ${v[1]}\n`;
});

console.log(result);