let str = require('fs').readFileSync('/dev/stdin').toString().trim().toUpperCase();

let allArr = Array(26).fill(0);
[...str].map(val => allArr[val.charCodeAt(0) - 65]++);
let idx = allArr.indexOf(Math.max(...allArr));
let idx2 = allArr.indexOf(Math.max(...allArr), idx + 1);
if(idx2 === -1) {
    console.log(String.fromCharCode(allArr.indexOf(Math.max(...allArr)) + 65));
} else {
    console.log('?');
}