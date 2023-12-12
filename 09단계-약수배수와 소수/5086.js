const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require('fs').readFileSync(file).toString().trim().split("\n");
input.pop();

for (let i = 0, len = input.length; i < len; i++) {
    let arr = input[i].split(" ");
    if (arr[1]%arr[0] === 0) {
        console.log("factor");
    } else if (arr[0]%arr[1] === 0) {
        console.log("multiple");
    } else {
        console.log("neither");
    }
}