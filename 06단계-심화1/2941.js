let str = require('fs').readFileSync('/dev/stdin').toString().trim();
let croatiaChar = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];

croatiaChar.map(el => {
    str = str.replaceAll(el, '0');
});
console.log(str.length);