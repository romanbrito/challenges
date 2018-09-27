// Write a function that accepts a string a reverses it. Recursively.

function reverse(S) {
  if (S.length < 2) {
    return S
  }

  return reverse(S.substr( 1 )) + S[0]

}

console.log(reverse('hello'))