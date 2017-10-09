// Usually when you buy something, you're asked whether your credit card number, phone number or answer to
// your most secret question is still correct. However, since someone could look over your shoulder,
// you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// return masked string
function maskify(cc) {
    var max_len = cc.length-4;
    if (cc.length < 4) {
        return cc;
    } else {
        var lastFour = cc.substr(max_len);
        var first = cc.substr(0,max_len);
        var masked_cc = first.replace(/./g, "#");
        return masked_cc + lastFour;
    }
}

// return masked string
function maskifyA(cc) {
    return cc.replace(/.(?=....)/g, '#');
}

function maskifyB(cc) {
    return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
}


console.log(maskifyA("4556364607935616"));
console.log(maskifyA("Skippy"));
console.log(maskifyA("Nananananananananananananananana Batman!"));
console.log(maskifyA("Ski ppy"));
console.log(maskifyA(" 234"));