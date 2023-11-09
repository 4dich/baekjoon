const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [cnt, ...input] = require('fs').readFileSync(file).toString().trim().split("\n");
let result = 0;

const isGroupWord = function (word) {
    let storage = [];
    let groupWordCnt = 1;

    for (let i = 0; i < word.length; i++) {
        if (storage.indexOf(word[i]) === -1) {
            storage.push(word[i]);
        } else {
            if (word[i] !== word[i-1]) {
                groupWordCnt = 0;
                break;
            }
        }
    }

    return groupWordCnt;
};

input.map(function (word) {
    result += isGroupWord(word);
});

console.log(result);
