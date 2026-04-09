const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split(/\s+/);

let idx = 0;

const n = +input[idx++],
      k = +input[idx++],
      numbers = input.slice(idx, idx+n); 

let arr = new Array(10);

for (let i = 0; i < 10; i++) {
    arr[i] = new Array(10).fill(0);
}

for (let num of numbers) {
    let numLen = num.length;

    for (let i = 0; i < numLen; i++) {
        arr[10 - numLen + i][num[i]] += 1;
    }
}

/*for (let ar of arr){
    console.log(ar);
} */


let ans = 0,
    count = 0;
    
for (let i = 0; i < 10; i++) {
    let ras = arr[i];

    for (let j = 0; j < 9; j++) {
        
        while (ras[j] > 0 && count < k) {
            ans +=((9 - j) * 10**(9 - i));
            count++;
            ras[j]--;
        }

    }
}

console.log(ans);
