const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split(/\s+/);

let idx = 0;

const l = input[idx++],
      r = input[idx];

let count = 0;

for (let i = l.length; i <= r.length; i++) {
    for (let d = 1; d < 10; d++) {
        let s = String(d).repeat(i);

        if ((s.length > l.length || (s.length == l.length && s >= l) ) && 
            (s.length < r.length || (s.length == r.length && r >= s))) {
            count++;
        }

    }
}

console.log(count);
