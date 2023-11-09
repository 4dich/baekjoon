let arr = require('fs').readFileSync('input.txt').toString().trim().split(' ');
let [A, B, V] = arr.map(Number);
console.log(Math.ceil((V - A) / (A - B)) + 1);

// let flag = true;
// let dayCount = 0;
// while(flag) {
//     dayCount++;
//     V -= A;
//     if(V <= 0) {
//         flag = false;
//     } else {
//         V += B;
//     }
// }
// console.log(dayCount);