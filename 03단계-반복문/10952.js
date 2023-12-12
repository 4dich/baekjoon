let input = require('fs').readFileSync('input.txt').toString().trim().split('\n');

input.map((val, idx) => {
    if(idx !== input.length - 1) {
        console.log(Number(val.split(' ')[0]) + Number(val.split(' ')[1]));
    }
});