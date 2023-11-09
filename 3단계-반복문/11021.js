let input = require('fs').readFileSync('input.txt').toString().trim().split('\n');
let count = Number(input[0]);
let answer = '';

input.map((val, idx) => {
    if(idx !== 0) {
        answer += `Case #${idx}: ` + val.split(' ').reduce((acc, cur) => Number(acc) + Number(cur));
        if(idx !== count) {
            answer += '\n';
        }
    }
});

console.log(answer);