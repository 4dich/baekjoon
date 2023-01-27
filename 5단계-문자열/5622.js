let char = require('fs').readFileSync('input.txt').toString().trim();
let sum = 0;
[...char].map(val => { 
    sum += (Math.floor((val.charCodeAt(0) - 65) / 3) + 3);
    if(val.charCodeAt(0) === 83 || val.charCodeAt(0) === 86 || val.charCodeAt(0) === 89 || val.charCodeAt(0) === 90) {
        sum--;
    }
});
console.log(sum);

// 7 PQR 
// 8 STU 
// 9 VWX
// 10 YZ

// s: -1
// v: -1
// y, z: -1