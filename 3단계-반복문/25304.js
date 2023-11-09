let input = require('fs').readFileSync('input.txt').toString().split('\n');

let tempPrice = Number(input[0]);
let count = Number(input[1]);

let totalPrice = 0;
for(let i = 0; i < count; i++) {
    totalPrice += Number(input[i + 2].split(' ')[0]) * Number(input[i + 2].split(' ')[1]);
}

if(tempPrice == totalPrice) {
    console.log('Yes');
} else {
    console.log('No');
}