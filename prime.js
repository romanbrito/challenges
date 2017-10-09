// Define a function isPrime/is_prime() that takes one integer argument and returns true/True or false/False
// depending on if the integer is a prime.
//
//     Per Wikipedia, a prime number (or a prime) is a natural number greater than 1 that has no positive divisors
// other than 1 and itself.


function isPrime(num) {
    if (num === 2 || num === 3 || num === 5 || num === 7) {
        return true;
    }
    if (num < 2) {
        return false;
    } else if (num % 2 === 0) {
        return false;
    } else if (num % 3 === 0) {
        return false;
    } else if (num % 5 === 0) {
        return false;
    } else if (num % 7 === 0) {
        return false
    } else {
        return true;
    }
}

function sumDigits(num) {
    if (Math.floor(num / 10) === 0) {
        return num;
    } else {
        return num % 10 + sumDigits(Math.floor(num / 10)); // recursion
    }
}

console.log(isPrime(53));
console.log(isPrime(61));
console.log(isPrime(83));
console.log(isPrime(97));
console.log(isPrime(104729));
console.log(isPrime(103993));
console.log(isPrime(99439));
console.log(isPrime(11));
