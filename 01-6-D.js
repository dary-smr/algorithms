const fs = require('fs');

const [n, a, b, w, h] = fs.readFileSync(0, 'utf-8').trim().split(/\s+/).map(BigInt);


