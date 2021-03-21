/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
  let leftSum = 0;
  let rightSum = 0;
  for(let i = 0; i < arr.length; i++) {
    const lastPos = arr[i].length - 1;
    leftSum += arr[i][i]
    rightSum += arr[i][lastPos - i]
  }
  return Math.abs(leftSum - rightSum)
}

module.exports = diagonalDifference