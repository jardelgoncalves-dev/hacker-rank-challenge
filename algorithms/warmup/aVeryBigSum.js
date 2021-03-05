// Complete the aVeryBigSum function below.
function aVeryBigSum(ar) {
  return ar.reduce((total, value) => value + total, 0)
}

module.exports = aVeryBigSum