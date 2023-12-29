const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let N = Number(require('fs').readFileSync(file).toString().trim());

let flag = true;
let cnt = 0;
let i = 666;
let arr = [];

while (flag) {
    if (i.toString().includes("666")) {
        arr.push(i);
        cnt++;
    }
    
    if (cnt === 10000) {
        break;
    }

    i++;
}

console.log(arr[N - 1]);