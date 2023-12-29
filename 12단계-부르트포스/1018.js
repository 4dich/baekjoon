const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [matrix, ...input] = require('fs').readFileSync(file).toString().trim().split("\n");
let [x, y] = matrix.split(" ").map(Number);

const check = (input, i, j) => {
    let cnt1 = 0;
    let cnt2 = 0;
    
    for (let row = i; row < i + 8; row++) {
        for (let cell = j; cell < j + 8; cell++) {
            if (row % 2 === 0 ) {
                if (cell % 2 === 0 && input[row][cell] === "B") cnt1++;
                if (cell % 2 !== 0 && input[row][cell] === "W") cnt1++;
            } else {
                if (cell % 2 === 0 && input[row][cell] === "W") cnt1++;
                if (cell % 2 !== 0 && input[row][cell] === "B") cnt1++;
            }
        }
    }

    for (let row = i; row < i + 8; row++) {
        for (let cell = j; cell < j + 8; cell++) {
            if (row % 2 === 0 ) {
                if (cell % 2 === 0 && input[row][cell] === "W") cnt2++;
                if (cell % 2 !== 0 && input[row][cell] === "B") cnt2++;
            } else {
                if (cell % 2 === 0 && input[row][cell] === "B") cnt2++;
                if (cell % 2 !== 0 && input[row][cell] === "W") cnt2++;
            }
        }
    }

    return Math.min(cnt1, cnt2);
};

let cntArr = [];
for (let i = 0; i < x - 7; i++) {
    for (let j = 0; j < y - 7; j++) {
        cntArr.push(check(input, i, j));
    }
}

console.log(Math.min(...cntArr));