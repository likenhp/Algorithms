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
const pyramidDescent = (array, output) => {
  let finalResult = ''

  // helper function uses recursion to find the movements that result in the final value

  const pyramidDescentHelper = (result, currentPosition, currentRow, currentProduct) => {
    let currentNumber;
    if (currentRow !== array.length) {
      currentNumber =  array[currentRow][currentPosition];
      currentProduct = currentProduct * currentNumber
    }
    let movements = result
    
    if (currentRow < array.length) {
      if (currentProduct !== target) {
        let left = movements+'L'
        let right = movements+'R'
        pyramidDescentHelper(left, currentPosition, currentRow+1, currentProduct) 
        pyramidDescentHelper(right, currentPosition+1, currentRow+1, currentProduct)
      } else {
        finalResult = result
      }
    }
  }
  pyramidDescentHelper('', 0, 0, 1, finalResult)
  return finalResult
}


const results = pyramidDescent(sample, target)
console.log(results)