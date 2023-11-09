let arr = require('fs').readFileSync('input.txt').toString().trim().split('\n');
let max = 0;
let maxIdx = 0;
arr.map((val, idx) => {
    val = Number(val);
    idx += 1;
    if(idx === 0) {
        max = val;
    } else {
        if(val > max) {
            max = val;
            maxIdx = idx;
        }
    }
});
console.log(`${max}\n${maxIdx}`);