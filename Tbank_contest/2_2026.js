const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim();

//const len = input.length;

function pal(str) {
    const len = str.length;

    for(let i = 0; i <= len/2; i++) {
        if (str[i] != str[len - 1 - i]) return false;
    }

    return true; 
}

function HowManyA(str) {
    const len = str.length;

    let beg = 0,
        end = 0;

    for(let i = 0; i < len; i++) {
        if (str[i] != "a") break;
        else beg++;
    }

    for(let i = len - 1; i >= 0; i--) {
        if (str[i] != "a") break;
        else end++;
    }
    return ([beg, end]);
}

let arr = HowManyA(input);


if (pal(input)) console.log('Yes');
else if (arr[0] > arr[1]) console.log('No');
else if (!pal(input)) {
    const str = input.slice(arr[0] , input.length - arr[1]);
    if (pal(str)) console.log('Yes');
    else console.log('No');
} 