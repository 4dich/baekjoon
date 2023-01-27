let input = require('fs').readFileSync('input.txt').toString().split('\n');
let answer = '';

input.map((val, idx) => {
    if(idx != 0) {
        answer += val.split(' ').reduce((acc, cur) => Number(acc) + Number(cur)) + '\n';
    }
});

console.log(answer);