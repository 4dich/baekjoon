let [n, ...arr] = require('fs').readFileSync('input.txt').toString().trim().split('\n');

const scoreFunc = (input) => { 
    const result = [...input];
    let sum = 0;
    let score = 0;
    result.map(val => {
        if(val === 'O') {
            score += 1;
        } else {
            score = 0;
        }
        sum += score;
    });
    console.log(sum);
};

arr.map(val => scoreFunc(val));
