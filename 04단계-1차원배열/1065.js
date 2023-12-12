let num = require('fs').readFileSync('input.txt').toString().trim();

const isArithmetic = (input) => {
    let inputArr = [...input.toString()].map(Number);
    let len = [...input.toString()].length;
    if(len < 3) {
        return true;
    } else {
        let diff = inputArr[1] - inputArr[0];
        let prev = inputArr[0];
        let flag = true;
        inputArr.map((val, idx) => { 
            if(idx !== 0) {
                prev += diff;
                if(val !== prev) {
                    flag = false;
                }
            }
        });
        return flag;
    }
};

let cnt = 0;
for(let i = 0; i < num; i++) {
    if(isArithmetic(i + 1)) {
        cnt++;
    }
}

console.log(cnt);