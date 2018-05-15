// Given a positive integral number n, return a strictly increasing sequence
// (list/array/string depending on the language) of numbers, so that the sum of the squares is equal to n².
//
// If there are multiple solutions (and there will be), return the result with the largest possible values:
//
//   Examples
// decompose(11) must return [1,2,4,10]. Note that there are actually two ways to
// decompose 11², 11² = 121 = 1 + 4 + 16 + 100 = 1² + 2² + 4² + 10² but don't return [2,6,9],
// since 9 is smaller than 10.
//
// For decompose(50) don't return [1, 1, 4, 9, 49] but [1, 3, 5, 8, 49] since [1, 1, 4, 9, 49] doesn't
// form a strictly increasing sequence.
//
//   Note
// Neither [n] nor [1,1,1,…,1] are valid solutions. If no valid solution exists, return nil, null,
// Nothing, None (depending on the language) or "[]" (C) ,{} (C++), [] (Swift).
//
//   The function "decompose" will take a positive integer n and return the decomposition of N = n² as:


function decompose(n) {

  if (n < 1){
    return 'end'
  }
  var sumSquare = 0

  var arr = [];
  var arr2 = [];

  for (var i = 1; i < n; i++) {
    arr.push(i)
    arr2.push(i*i)
  }

  sum = 0

  for (var i = arr2.length-1; i > -1; i--) {

    if ((sum + arr2[i]) < n*n ) {
      sum+= arr2[i]
      console.log(arr[i] + ' ' + arr2[i] + ' ' + sum)
    } else if (sum === n*n) {
      return 'finished'
    }


  }

  return decompose(n-1)

}

console.log(decompose(7))
//2,3,6