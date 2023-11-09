let [arrLen, arr] = require('fs').readFileSync('input.txt').toString().trim().split('\n');
arr = arr.split(' ');
let min = 0;
let max = 0;
arr.map((val, idx) => {
    val = Number(val);
    if(idx === 0) {
        min = val;
        max = val;
    } else {
        if(min > val) min = val;
        if(max < val) max = val;
    }
});
console.log(min, max);