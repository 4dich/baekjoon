let n = require('fs').readFileSync('input.txt').toString().trim();
for(let i = 0; i < n; i++) {
    let line = '';
    for(let j = 0; j < i+1; j++) {
        line += '*';
    }
    console.log(line);
}
