const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [a, b, c] = require('fs').readFileSync(file).toString().trim().split("\n").map(Number);

if (a + b + c === 180) {
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
} else {
    console.log("Error");
}