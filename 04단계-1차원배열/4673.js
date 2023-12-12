const calc = (input) => {
    let len = [...input.toString()].length;
    if(len === 1) return input * 2;
    else return input + [...input.toString()].reduce((acc, cur) => Number(acc) + Number(cur));
};

let size = 100;

let arr = Array(size).fill(0);
for(let i = 0; i < size; i++) {
    arr[calc(i + 1) - 1]++;
}

let result = [];
arr.map((val, idx) => {
    if(val === 0) result.push(idx + 1);
});

console.log(...result);