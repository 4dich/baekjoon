let [n, ...arr] = require('fs').readFileSync('input.txt').toString().trim().split('\n');

arr.map(el => {
    let [H, W, N] = el.split(' ');
    let Y = N % H || H;
    let X = (Y === H)? Math.floor(N / H): Math.floor(N / H) + 1;
    console.log(Y.toString() + lpad(X.toString(), 2, '0'));
});

function lpad(val, padLength, padString){
    while(val.length < padLength) {
        val = padString + val;
    }
    return val;
}