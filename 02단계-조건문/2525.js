let [HM, D] = require('fs').readFileSync('input.txt').toString().split('\n');
let [H, M] = HM.split(' ');

H = Number(H);
M = Number(M);
D = Number(D);

M += D;
if(M >= 60) {
    H += Math.floor(M/60);
    M = M % 60;
    if(H >= 24) {
        H -= 24;
    }
}

console.log(`${H} ${M}`);