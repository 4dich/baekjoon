const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require('fs').readFileSync(file).toString().trim().split("\n");

let result = "";
let rowLength = 0;
input.map(row => {
    row = row.trim();
    if (row.length >= rowLength) {
        rowLength = row.length;
    }
});

for (let i = 0; i < rowLength; i++) {
    for (let j = 0, colLength = input.length; j < colLength; j++) {
        if (input[j][i]) {
            result += input[j][i].trim();
        }
    }
}

console.log(result);