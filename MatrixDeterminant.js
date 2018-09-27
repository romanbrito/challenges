function processMatrix(matrix,pos) {
  var m = JSON.parse(JSON.stringify(matrix))

  for (var i = 0; i < m.length; i++) {
    m[i].splice(pos,1)
  }

  return m
}

function determinant(M) {
  if (M.length < 2) {
    return M[0][0]
  }
  if (M.length < 3){
    return M[0][0] * M[1][1] - M[0][1] * M[1][0]
  }

  var top = M.splice(0,1)

  var D = 0
  var sign = -1

  for (var i = 0; i < top[0].length; i++) {
    var m = processMatrix(M,i)
    sign = -sign

    D += top[0][i]*sign*determinant(m)
  }

  return D
}

m1 = [[1]]
m2 = [[1, 3], [2, 5]]
m3 = [ [1,2,4],[2,-1,3], [4,0,1]]
m5 = [[2, 8, 0, 1, 3],
  [2, 7, 4, 1, 2],
  [1, 5, 9, 4, 1],
  [5, 7, 2, 9, 7],
  [9, 2, 7, 6, 1]]

// console.log(factors(m5))
console.log(determinant(m5))

// m4 = [[2, 8, 0, 1, 3],
//       [2, 7, 4, 1, 2],
//       [1, 5, 9, 4, 1],
//       [5, 7, 2, 9, 7],
//       [9, 2, 7, 6, 1]]
// f1 [2, 8, 0, 1, 3]
// [2]  * 7, 4, 1, 2
//        5, 9, 4, 1
//        7, 2, 9, 7
//        2, 7, 6, 1
//  f2 [7, 4, 1, 2]
//  [7]
//        9, 4, 1
//        2, 9, 7
//        7, 6, 1
//   [9]
//         9, 7
//         6, 1
//   [4]
//         2, 7
//         7, 1
//   [1]
//         2, 9
//         7, 6
//  [4]
//        5, 4, 1
//        7, 9, 7
//        2, 6, 1
//  [1]
//        5, 9, 1
//        7, 2, 7
//        2, 7, 1
//  [2]
//        5, 9, 4
//        7, 2, 9
//        2, 7, 6



