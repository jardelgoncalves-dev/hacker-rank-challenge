const assert = require('../../../utils/assert');
const diagonalDifference = require('../diagonalDifference');

const arr = [
  [ 1, 2, 3 ],
  [ 4, 5, 6 ],
  [ 9, 8, 9 ],  
]

const arr2 = [
  [ 1, 2, 3, 4 ],
  [ 5, 6, 7, 8 ],
  [ 9, 10, 11, 12 ],
  [ 13, 14, 15, 16 ]  
]


assert.describe('Warmup/diagonalDifference Test', () => {
  assert.it('should return 2 to arr', () => {
    const result = diagonalDifference(arr)
    assert.expect(result).toEqual(2)
  })

  assert.it('should return 0 to arr2', () => {
    const result = diagonalDifference(arr2)
    assert.expect(result).toEqual(0)
  })
})