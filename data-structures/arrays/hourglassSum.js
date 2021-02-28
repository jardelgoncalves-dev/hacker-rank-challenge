// 2D Array

// Complete the hourglassSum function below.
function hourglassSum(arr) {
  const sizeLines = (arr || []).length - 2
  const lineSize = arr[0].length -2
  let highestSum = -Infinity;

  for (let index = 0; index < sizeLines; index++) {
    for (let elemIndex = 0; elemIndex < lineSize; elemIndex++) {
      const head = arr[index].slice(elemIndex, 3 + elemIndex)
      const middle = arr[index + 1][elemIndex + 1]
      const foot = arr[index + 2].slice(elemIndex, 3 + elemIndex)
      
      const sum = [...head, middle, ...foot].reduce((acc, item) => acc+ item, 0)
      highestSum = sum > highestSum
        ? sum
        : highestSum 
    }
  }
  return highestSum
}

module.exports = hourglassSum