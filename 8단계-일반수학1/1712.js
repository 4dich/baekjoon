let [...arr] = require('fs').readFileSync('input.txt').toString().trim().split(' ');
let [a, b, c] = arr.map(Number);

if(b >= c) {
    console.log(-1);
} else {
    let n = (a / (c - b));
    if(n == Math.floor(n)) {
        console.log(n + 1);
    } else {
        console.log(Math.ceil(n));
    }
}
