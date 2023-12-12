// local: input.txt
// backj: /dev/stdin
const [cnt, ...round] = require('fs').readFileSync('input.txt').toString().trim().split('\r\n');

const roundConsole = function (input) {
    return (input.charAt(0) + input.charAt(input.length - 1));
};

round.map(v => { console.log(roundConsole(v)); });