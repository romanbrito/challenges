// For example 99 will have "weight" 18, 100 will have "weight" 1 so in the list 100 will come before 99.
// Given a string with the weights of FFC members in normal order can you give this string
// ordered by "weights" of these numbers?

// When two numbers have the same "weight", let us class them as if they were strings and
// not numbers: 100 is before 180 because its "weight" (1) is less than the one of 180 (9)
// and 180 is before 90 since, having the same "weight" (9) it comes before as a string.
//
//   All numbers in the list are positive numbers and the list can be empty.

var arrayToObject  = function arrayToObject(array) {
  return array.reduce(function (obj, item) {
    obj[item] = item;
    return obj;
  }, {})
};


function orderWeight(strng) {

  var stringNoSpace = strng.trim()
  var stringToArray = stringNoSpace.split(" ")

  stringToArray.map(function (value) {


    for (var i = 0; i < value.length; i++) {
      sum =  sum + value[i]
    }



  })



  return stringToArray

}

console.log(orderWeight("103 123 4444 99 2000"))