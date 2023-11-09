let str = require('fs').readFileSync('input.txt').toString().trim();
if(str === '') {
    console.log(0);
} else {
    console.log(str.split(' ').length);
}