function persistence(num) { // main function
    var counter = 0;
    return persist(num);

    function persist(num) {
        if (num < 10) { // case of one digit number
            return 0;
        } else if (multiplyDigits(num) < 10) {
            return ++counter; // return final counter
        } else {
            ++counter;
            return persist(multiplyDigits(num)); // recursion
        }

    }
} // end main function

function round(num) {
    return Math.floor(num / 10);
}

function multiplyDigits(num) {
    if (round(num) === 0) { // this is different to Math.round()
        return num;
    } else {
        return num % 10 * multiplyDigits(round(num)); // recursion
    }
}

var num = 4;
//console.log('multiply ' + multiplyDigits(4));

console.log('persistence ' + persistence(31));
console.log('persistence ' + persistence(39));
console.log('persistence ' + persistence(4));
console.log('persistence ' + persistence(25));
console.log('persistence ' + persistence(999));