const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [cnt, ...input] = require('fs').readFileSync(file).toString().trim().split("\n");

let matrix = new Array(100).fill().map(row => {return new Array(100).fill(false);});
let area = 0;

const attach = (coord) => {
    let x = Number(coord.split(' ')[0]);
    let y = Number(coord.split(' ')[1]);

    for (let i = x; i < x + 10; i++) {
        for (let j = y; j < y + 10; j++) {
            if (matrix[i][j] === false) {
                matrix[i][j] = true;
                area++;
            }
        }
    }
};

input.map(coord => {
    attach(coord);
});

console.log(area);