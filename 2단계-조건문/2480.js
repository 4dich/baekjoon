let [d1, d2, d3] = require('fs').readFileSync('input.txt').toString().split(' ');

d1 = Number(d1);
d2 = Number(d2);
d3 = Number(d3);

let dice = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
};

dice[d1]++;
dice[d2]++;
dice[d3]++;

let max = 0;
let prize = 0;
Object.entries(dice).map((v) => {
    if(v[1] == 3) {
        prize = 10000 + v[0] * 1000;
    } else if(v[1] == 2) {
        prize = 1000 + v[0] * 100;
    } else if(v[1] == 1) {
        max = (max < v[0])? v[0] : max;
    }
});
if(!prize) { prize = max * 100; };

console.log(prize);