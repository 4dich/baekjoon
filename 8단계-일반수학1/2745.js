const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [N, B] = require("fs").readFileSync(file).toString().trim().split(" ");

let result = 0;
let target = 0;
for (let i = 0, len = N.length; i < len; i++) {
	target = Number(N.charCodeAt(i));
	if (target >= 48 && target <= 57) {
		target -= 48;
	} else {
		target -= 55;
	}

	result += target * Math.pow(B, N.length - i - 1);
}

console.log(result);
