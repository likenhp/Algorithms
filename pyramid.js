/*
  Target: 720
  [[2],
  [4,3],
  [3,2,6],
  [2,9,5,2],
  [10,5,2,15,5]]
  LRLL
*/

// turn payramid into a list of arrays
const sample = [
[2],
[4,3],
[3,2,6],
[2,9,5,2],
[10,5,2,15,5]];

const target = 720;
const pyramidDescent = (list, output) => {
  let finalResult = ''

  // helper function uses recursion to find the movements that result in the final value

  const pyramidDescentHelper = (array, target, end, result, currentPosition, currentRow, currentProduct, final) => {
    let currentNumber;
    if (currentRow !== end) {
      currentNumber =  array[currentRow][currentPosition];
      currentProduct = currentProduct * currentNumber
    }
    let movements = result
    
    if (currentRow < end) {
      if (currentProduct !== target) {
        let left = movements+'L'
        let right = movements+'R'
        pyramidDescentHelper(array, target, end, left, currentPosition, currentRow+1, currentProduct, final) 
        pyramidDescentHelper(array, target, end, right, currentPosition+1, currentRow+1, currentProduct, final)
      } else {
        finalResult = result
      }
    }
  }
  pyramidDescentHelper(list, output, list.length, '', 0, 0, 1, finalResult)
  return finalResult
}


const results = pyramidDescent(sample, target)