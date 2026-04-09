const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split(/\s+/).map(Number);

let idx = 0;

const n = input[idx++],
      t = input[idx++],
      floors = input.slice(idx, idx+n);
    
idx += n;

let empNum = input[idx] - 1,
    r = floors.length - 1,
    l = 0,
    ans;

if (t >= floors[empNum] - floors[l] || t >= floors[r] - floors[empNum]) {
    ans = floors[r] - floors[l];
} else {
    ans = Math.min(floors[empNum] - floors[l], floors[r] - floors[empNum]) * 2 + Math.max(floors[empNum] - floors[l], floors[r] - floors[empNum]);
}

console.log(ans);

