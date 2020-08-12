// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  let space = ' '
  let level = '#'

  if (n <= 0) {
    return null
  }

  for (let i = 1; i <= n; i++) {
    // iterate console logs
    // spaces are n - i
    // meanwhile # are (i - 1) + 2 if i > 1 and # = i if i === 1
    let string = ''
    let leftSpace = n - i
    let rightSpace = n - i
    let char = 2 * i - 1

    let lcount = 0
    while(lcount < leftSpace) {
      string += space
      lcount++
    }
    let ccount = 0
    while (ccount < char) {
      string += level
      ccount++
    }
    let rcount = 0
    while(rcount < rightSpace) {
      string += space
      rcount++
    }
    console.log(string)
  }
}