// In this kata, you must create a digital root function.
//
// A digital root is the recursive sum of all the digits in a number.
// Given n, take the sum of the digits of n. If that value has two digits, continue reducing in this way until
// a single-digit number is produced. This is only applicable to the natural numbers.

function digital_root(n) {
    if (n < 10) { // case of one digit number
        return n;
    } else if (sumDigits(n) < 10) {
        return sumDigits(n);
    } else {
        return digital_root(sumDigits(n)); // recursion
    }
}

function round(num) {
    return Math.floor(num / 10);
}

function sumDigits(num) {
    if (round(num) === 0) {
        return num;
    } else {
        return num % 10 + sumDigits(round(num)); // recursion
    }
}

var num = 4;
//console.log('multiply ' + multiplyDigits(4));

console.log('persistence ' + digital_root(31));
console.log('persistence ' + digital_root(39));
console.log('persistence ' + digital_root(4));
console.log('persistence ' + digital_root(25));
console.log('persistence ' + digital_root(999));