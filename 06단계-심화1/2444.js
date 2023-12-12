const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const rule = require('fs').readFileSync(file).toString().trim();
const num = Number(rule);
let result = "";

for (let i = 0, len = num * 2 - 1; i < len; i++) {
    for (let j = 0, len2 = num * 2 - 1; j < len2; j++) {
        if (j >= Math.abs(num - 1 - i) && j <= ((num - 1)* 2) - Math.abs(num - 1 - i)) {
            result += "*";
        } 
        
        if (j < Math.abs(num - 1 - i)) {
            result += " ";
        }
    }

    result += "\n";
}

console.log(result);
