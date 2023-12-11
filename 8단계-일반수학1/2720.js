const file = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [n, ...input] = require('fs').readFileSync(file).toString().trim().split("\n");

const exchange = (input) => {
    input.map(i => {
        console.log(calc(i));
    });
};

const calc = (price) => {
    const coin = [25, 10, 5, 1];
    let count = [0, 0, 0, 0];

    coin.map((c, idx) => {
        count[idx] = Math.floor(price / c);
        price = price % c; 
    });

    return count.join(" ");
};

exchange(input);