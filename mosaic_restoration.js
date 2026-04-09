const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let n,
    step = 0,
    posBits = [];

rl.on('line', (line) => { 
    if (!n) {
        n = Number(line);
        posBits = new Array(n + 1).fill(0);
        ask();
    } else {
        const positions = line.split(' ').map(Number);

        // записываем биты
        for (let p of positions) {
            posBits[p] |= (1 << step);
        }

        step++;
        ask();
    }
});

function ask() {
    if (step === 9) {
        // восстанавливаем ответ
        let result = new Array(n);

        for (let pos = 1; pos <= n; pos++) {
            let piece = posBits[pos];
            result[pos - 1] = piece;
        }

        console.log("RESULT " + result.join(' '));
        process.exit();
        return;
    }

    let query = [];

    for (let i = 1; i <= n; i++) {
        if ((i >> step) & 1) {
            query.push(i);
        }
    }

    if (query.length === 0) {
        step++;
        ask();
        return;
    }

    console.log("CHECK " + query.length + " " + query.join(' '));
}