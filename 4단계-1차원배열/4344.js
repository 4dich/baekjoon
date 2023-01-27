let [n, ...arr] = require('fs').readFileSync('input.txt').toString().trim().split('\n');

const calc = (input) => {
    const [cntStudent, ...grade] = input.split(' ');
    const gradeAvg = grade.reduce((acc, cur) => Number(acc) + Number(cur), 0) / Number(cntStudent);
    const cntOver = grade.filter(val => val > gradeAvg).length;
    console.log(`${(cntOver / cntStudent * 100).toFixed(3)}%`);
};

arr.map(val => calc(val));