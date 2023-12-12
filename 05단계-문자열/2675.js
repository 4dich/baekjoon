let [len, ...arr] = require('fs').readFileSync('input.txt').toString().trim().split('\n');
arr.map(val => {
    let result = '';
    let cnt = Number(val.split(' ')[0]);
    let str = val.split(' ')[1];
    [...str].map(char => {
        for(let i = 0; i < cnt; i++) result += char;
    });
    console.log(result);
});