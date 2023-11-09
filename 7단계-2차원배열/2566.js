const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require('fs').readFileSync(file).toString().trim().split("\n");

let max_num = 0;
let max_pos = "";

input.map((row, rowIdx) => {
    var rowArr = row.split(" ");
    rowArr.map((element, colIdx) => {
        if (max_num <= Number(element)) {
            max_num = element;
            max_pos = (Number(rowIdx) + 1) + " " + (Number(colIdx) + 1);
        }
    });
});

console.log(max_num + "\n" + max_pos);