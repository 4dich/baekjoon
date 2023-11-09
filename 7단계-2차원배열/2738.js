const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [rule, ...example] = require('fs').readFileSync(file).toString().trim().split("\n");

let [rowCnt, colCnt] = rule.split(" ");
let matrix1 = [];
let matrix2 = [];
let result = "";

for (let i = 0; i < rowCnt; i++) {
    matrix1.push(example[i].split(" "));
}
for (let i = rowCnt; i < rowCnt * 2; i++) {
    matrix2.push(example[i].split(" "));
}
for (let i = 0; i < rowCnt; i++) {
    for (let j = 0; j < colCnt; j++) {
        result += (Number(matrix1[i][j]) + Number(matrix2[i][j]) + " ");
    }
    result += "\n";
}

console.log(result);