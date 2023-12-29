const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [N, ...wordArr] = require('fs').readFileSync(file).toString().trim().split("\n");

let sortArr = wordArr.sort((a, b) => {
    if (a.length != b.length) {
        return a.length - b.length;
    } else {
        for (let i = 0, len = a.length; i < len; i++) {
            if (a.charCodeAt(i) !== b.charCodeAt(i)) {
                return a.charCodeAt(i) - b.charCodeAt(i);
            }
        }
    }
});

let result = "";
let dupArr = sortArr.filter((v, i) => {
    return sortArr.indexOf(v) === i;
}).map(v => { result += `${v}\n`; });


console.log(result);