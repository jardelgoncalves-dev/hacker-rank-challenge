/*
 * Complete the 'rotateLeft' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER d
 *  2. INTEGER_ARRAY arr
 */

function rotateLeft(d, arr) {
  const size = arr.length
  const array = new Array(size)

  for(let i = 0; i < size; i++) {
    const offset = (size + i - d) % size
    array[offset] = arr[i]
  }

  return array
}

module.exports = rotateLeft