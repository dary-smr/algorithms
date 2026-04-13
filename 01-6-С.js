const fs = require('fs');

const input = fs.readFileSync(0, 'utf-8').trim().split(/\s+/);

let idx = 0,
    w = +input[idx++],
    h = +input[idx++],
    n = BigInt(input[idx++]);
// работаем в BigInt, т.к. можем вылететь за предели Number

let left = 0n,
    right = BigInt(Math.max(w, h)) * n;

while(left < right) {
    let mid = (left + right) / 2n,
        cols = mid / BigInt(w),
        rows = mid / BigInt(h);

    if (cols * rows >= n) {
        right = mid;
    } else left = mid + 1n;
}

console.log(left.toString());

