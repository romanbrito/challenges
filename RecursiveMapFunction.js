// Recursive map function

function map(A, fn) {

  if (A.length === 0) {
    return []
  }

  return [ fn(A[0])].concat( map( A.slice(1), fn))

}

console.log(map([ 'a', 'b', 'c' ], function( value ) {
  return value.toUpperCase();
}))