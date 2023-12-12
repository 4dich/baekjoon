const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require('fs').readFileSync(file).toString().trim().split("\n").map(v => v.split(" ").map(Number));
let x = [], y = [];

for (let i = 0; i < 3; i++) {
    x.push(input[i][0]);
    y.push(input[i][1]);
}

const getCoord = (arr) => {
    let result;

    if (arr[0] === arr[1]) {
        result = arr[2];
    } else if (arr[0] === arr[2]) {
        result = arr[1];
    } else {
        result = arr[0];
    }

    return result;
};

console.log(getCoord(x) + " " + getCoord(y));