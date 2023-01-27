let [cnt, ...words] = require('fs').readFileSync('input.txt').toString().trim().split('\n');

let groupWordCnt = Number(cnt);
const isGroupWord = (input) => {
    let arr = [...input];
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < i; j++) { 
            if(arr[j] === arr[i]) {
                if(i - j > 1) {
                    groupWordCnt -= 1;
                    return;
                }
            }
        }
    }
};

for(let i = 0; i < cnt; i++) {
    isGroupWord(words[i]);
}
console.log(groupWordCnt);