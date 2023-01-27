let [condition, arr] = require('fs').readFileSync('input.txt').toString().trim().split('\n');
let [length, max] = condition.split(' ');
let answer = '';

arr.split(' ').map(val => { 
    if(Number(val) < Number(max)) { 
        answer += `${val} `;
    }
});
console.log(answer);