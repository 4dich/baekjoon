let input = require('fs').readFileSync('input.txt').toString().split('\n');
for(let i = 1; i <= input[0]; i++) {
    console.log(Number(input[i].split(' ')[0]) + Number(input[i].split(' ')[1])); 
}