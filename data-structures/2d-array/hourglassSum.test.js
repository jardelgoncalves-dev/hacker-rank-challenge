const assert = require('../../utils/assert');
const hourglassSum = require('./hourglassSum');

const test1 = [
  [ 1, 1, 1, 0, 0, 0 ],
  [ 0, 1, 0, 0, 0, 0 ],
  [ 1, 1, 1, 0, 0, 0 ],
  [ 0, 0, 2, 4, 4, 0 ],
  [ 0, 0, 0, 2, 0, 0 ],
  [ 0, 0, 1, 2, 4, 0 ],
]

const test2 = [
  [-1, -1,  0, -9, -2, -2],
  [-2, -1, -6, -8, -2, -5],
  [-1, -1, -1, -2, -3, -4],
  [-1, -9, -2, -4, -4, -5],
  [-7, -3, -3, -2, -9, -9],
  [-1, -3, -1, -2, -4, -5],
]


assert.describe('2d-Array/hourglassSum Test', () => {
  assert.it('should return the hourglass 19 to test1 array', () => {
    const hourglass = hourglassSum(test1)
    assert.expect(hourglass).toEqual(19)
  })
  assert.it('should return the hourglass -6 to test2 array', () => {
    const hourglass = hourglassSum(test2)
    assert.expect(hourglass).toEqual(-6)
  })
})