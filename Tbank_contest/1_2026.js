const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim();

const n = +input;

if(n % 2 == 0) {
    console.log("Anya");
} else console.log("Masha");
