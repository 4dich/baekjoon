let input = require('fs').readFileSync('input.txt').toString().trim().split('\n');

input.map(val => console.log(Number(val.split(' ')[0]) + Number(val.split(' ')[1])));