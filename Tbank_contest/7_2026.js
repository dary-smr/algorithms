const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split(/\s+/).map(BigInt);

let idx = 0;
const N = Number(input[idx++]);
let a = new Array(N),
    x = input[idx++];

for (let i = 0; i < N; i++) {
    a[i] = input[idx++];
}

//масссив с кол-вом монет для набора нужной суммы
let count = new Array(N).fill(0);

for (let i = N - 1; i >= 0; i-- ){
    count[i] = x / a[i];
    x -= a[i] * count[i];
}

let arr1 = new Array(N).fill(0),
    arr2 = new Array(N).fill(0);

arr1[0] = count[0];
arr2[0] = (N == 1)?  0 : (a[1] - count[0]);

function minBigInt(a, b) {
    if (a < b) return a;
    else return b;
}

for (let i = 1; i < N; i++) {
    arr1[i] = minBigInt(arr1[i-1] + count[i], arr2[i-1] + count[i] + 1n);
    if (i + 1 < N) {
        arr2[i] = minBigInt(arr1[i-1] + a[i+1]/a[i] - count[i], arr2[i-1] + a[i+1]/a[i] - count[i] - 1n);
    }
}

console.log(Number(arr1[N-1]));
