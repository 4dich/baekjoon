let arr = require('fs').readFileSync('input.txt').toString().trim().split('\n');
let checkArr = Array(42).fill(0);
let cnt = 0;

arr.map(val => checkArr[Number(val)%42]++);
checkArr.map(val => {
    if(val !== 0) cnt++;
});

console.log(cnt);