// Implement a method that accepts 3 integer values a, b, c. The method should return true if a triangle can be built with the sides of given length and false in any other case.
//
// (In this case, all triangles must have surface greater than 0 to be accepted).

// function isTriangle(a,b,c) {
//     var sides = [a, b, c];
//     var sortedSides = sides.sort();
//     if (sortedSides[0] + sortedSides[1] <= sortedSides[2]) {
//         return false;
//     } else {
//         return true;
//     }
// }
/// OR..... the same as:

function isTriangle(a, b, c) {
    var sides = [a, b, c];
    var sortedSides = sides.sort();
    return (sortedSides[0] + sortedSides[1] > sortedSides[2]);
}

// if (a <= 0 || b <= 0 || c <= 0) {
//     return false;
// }

console.log(isTriangle(1, 2, 2));
console.log(isTriangle(7, 2, 2));
console.log(isTriangle(0, 3, 4));
console.log(isTriangle(0, 0, 4));
console.log(isTriangle(-1, -2, 4));