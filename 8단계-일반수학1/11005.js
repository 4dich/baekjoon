const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [N, B] = require("fs").readFileSync(file).toString().trim().split(" ");

let result = "";
let numArr = [];

const divide = function (a, b) {
	let share = Math.floor(a / b);
	let remainder = a % b;

	numArr.push(remainder);

	return share;
};

const convert = function (target) {
	if (target >= 0 && target < 10) {
		target += 48;
	} else {
		target += 55;
	}

	return String.fromCharCode(target);
};

let num = N;
do {
	num = divide(num, B);
} while (num > 0);

for (let i = numArr.length - 1; i >= 0; i--) {
	result += convert(numArr[i]);
}

console.log(result);
