let num = Number(require('fs').readFileSync('input.txt').toString().trim());
let flag = true;
let idx = 0;  
let row, col, sum;

while(flag) {
    if(num <= idx * (idx + 1) / 2) {
        row = idx;
        sum = idx * (idx + 1) / 2;
        col = row - (sum - num);
        flag = false;
    } else {
        idx++;
    }
}

if(row % 2 === 0) {
    console.log(Number(col) + "/" + Number(row+1-col));
} else {
    console.log(Number(row+1-col) + "/" + Number(col));
}