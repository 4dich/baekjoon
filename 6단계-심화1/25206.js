const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require('fs').readFileSync(file).toString().trim().split("\n");
let amount_sum = 0;
let grade_sum = 0;
let grade_cnt = 0;
let grade_map = {
    "A+" : 4.5,
    "A0" : 4.0,
    "B+" : 3.5,
    "B0" : 3.0,
    "C+" : 2.5,
    "C0" : 2.0,
    "D+" : 1.5,
    "D0" : 1.0,
    "F"  : 0.0,
};

input.map(row => {
    let g = row.split(" ");
    let name = g[0];
    let amount = Number(g[1]);
    let grade = g[2].trim();

    if (grade !== "P") {
        amount_sum += amount;
        grade_sum += (grade_map[grade] * amount);
        grade_cnt++;
    }
});

console.log(grade_sum / amount_sum);
