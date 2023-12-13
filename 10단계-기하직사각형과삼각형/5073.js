const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = require('fs').readFileSync(file).toString().trim().split("\n");
input.pop();

const print = (arr) => {
    const [a, b, c] = arr.split(" ").map(Number);
    let max = Math.max(a, b, c);
    let sum = a + b + c;

    if (sum - max <= max) {
        console.log("Invalid");
    } else {
        if (a == b) {
            if (b == c) {
                console.log("Equilateral");
            } else {
                console.log("Isosceles");
            }
        } else {
            if (b == c || a == c) {
                console.log("Isosceles");
            } else {
                console.log("Scalene");
            }
        }
    }
};

input.map(v => {
    print(v);
});