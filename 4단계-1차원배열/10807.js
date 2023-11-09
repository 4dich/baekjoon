let [arrLen, arr, target] = require('fs').readFileSync('input.txt').toString().trim().split('\n');
let cnt = 0;
arr.split(' ').map(val => {
    if(val === target) cnt++;
});
console.log(cnt);