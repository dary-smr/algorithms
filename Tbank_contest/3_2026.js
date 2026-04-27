const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

const n = +input[0],
      m = +input[1];

const a = (m * (m-1)) % (10**9 + 7);

let b = 1;

for (let i = 1; i < n; i++) {
    b *= (m - 1 + (m - 2)**2) % (10**9 + 7);
    b = b % (10**9 + 7);
}

console.log(a * b  % (10**9 + 7));