let [count, ...arr] = require('fs').readFileSync('input.txt').toString().trim().split('\n');

arr.map((val, idx) => {
    let [A, B] = val.split(' ').map(Number);
    console.log(`Case #${idx + 1}: ${A} + ${B} = ${A + B}`);
});