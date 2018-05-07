function calcMinor(m) {
  // console.log(m)
  // console.log(m[0][0] * m[1][1] - m[0][1] * m[1][0])

  return m[0][0] * m[1][1] - m[0][1] * m[1][0]

}

function processMatrix(matrix,pos) {
  var m = JSON.parse(JSON.stringify(matrix))

  for (var i = 0; i < m.length; i++) {
    m[i].splice(pos,1)
  }

  return m
  // console.log(m)
}

function determinant(matrix) {

  if (matrix.length < 3) {
    return 'end'
  }

  var top = matrix.splice(0,1)

  for (var i = 0; i < top[0].length; i++) {

    console.log(top[0][i] + ' *')

    var m = processMatrix(matrix,i)

    console.log(m)

    // new length > 2
    if (m.length > 2) {
      determinant(m)
    }

  }

  return determinant(m)

}


m1 = [[1, 3], [2, 5]];
m2 = [[2, 5, 3],
     [1, -2, -1],
     [1, 3, 4]];

m7 = [[0,2,4],[4,2,3],[1,3,6]]
// -2

m3 = [[2, 8, 0, 1],
  [2, 7, 4, 1],
  [1, 5, 9, 4],
  [5, 7, 2, 9]]

determinant(m3)