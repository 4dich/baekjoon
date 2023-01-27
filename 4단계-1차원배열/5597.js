let arr = require('fs').readFileSync('input.txt').toString().trim().split('\n');

let checkArr = Array(30).fill(0);
arr.map(val => checkArr[Number(val) - 1] = 1);
checkArr.map((val, idx) => {
    if(Number(val) === 0) {
        console.log(idx + 1);
    }
});