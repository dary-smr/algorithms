const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

const n = +input[0],
      p = input[1].split(/\s+/).map(Number); 

let arrBeg = new Array(n).fill(0),
    curMin = p[0];

for(let i = 1; i < n; i++) {
    arrBeg[i] = Math.max(p[i] - curMin, arrBeg[i-1])
    if(curMin > p[i]) curMin = p[i];
}

let arrEnd = new Array(n).fill(0),
    curMax = p[n -1];

for(let i = n - 2; i >= 0 ; i--) {
    arrEnd[i] = Math.max(curMax - p[i], arrEnd[i+1])
    if(curMax < p[i]) curMax = p[i];
}

let sum = 0;

for (let i = 0; i < n;  i++) {
    if (arrBeg[i] + arrEnd[i] > sum) sum = arrBeg[i] + arrEnd[i];
}

console.log(sum);

