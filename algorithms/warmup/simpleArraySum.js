/*
 * Complete the simpleArraySum function below.
 */
function simpleArraySum(arr) {
  return arr.reduce((total, value) => total + value, 0)
}

module.exports = simpleArraySum