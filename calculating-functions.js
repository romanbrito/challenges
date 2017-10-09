function zero(calc) {return doNumbers(0,calc)}
function one(calc) {return doNumbers(1,calc)}
function two(calc) {return doNumbers(2,calc)}
function three(calc) {return doNumbers(3,calc)}
function four(calc) {return doNumbers(4,calc)}
function five(calc) {return doNumbers(5,calc)}
function six(calc) {return doNumbers(6,calc)}
function seven(calc) {return doNumbers(7,calc)}
function eight(calc) {return doNumbers(8,calc)}
function nine(calc) {return doNumbers(9,calc)}


function plus(y) {
    return function (x) {
        return x + y;
    };
}
function minus(y) {
    return function (x) {
        return x - y;
    };
}
function times(y) {
    return function (x) {
        return x * y;
    };
}
function dividedBy(y) {
    return function (x) {
        return x / y;
    };
}

function doNumbers(num,calc) {
    var x=num;
    // if (!calc){
    //     return x;
    // } else {
    //     return calc(x)
    // }
    return calc ? calc(x) : x;
}

// function zero(func)   { return func ? func(0) : 0; };
// function one(func)    { return func ? func(1) : 1; };
// function two(func)    { return func ? func(2) : 2; };
// function three(func)  { return func ? func(3) : 3; };
// function four(func)   { return func ? func(4) : 4; };
// function five(func)   { return func ? func(5) : 5; };
// function six(func)    { return func ? func(6) : 6; };
// function seven(func)  { return func ? func(7) : 7; };
// function eight(func)  { return func ? func(8) : 8; };
// function nine(func)   { return func ? func(9) : 9; };
//
// function plus( b )      { return function( a ) { return a + b; }; };
// function minus( b )     { return function( a ) { return a - b; }; };
// function times( b )     { return function( a ) { return a * b; }; };
// function dividedBy( b ) { return function( a ) { return a / b; }; };

console.log(zero());
console.log(four());

console.log(seven(times(five())));
console.log(four(plus(nine())));
console.log(eight(minus(three())));
console.log(six(dividedBy(two())));