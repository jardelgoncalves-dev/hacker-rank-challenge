const assert = require('../../../utils/assert');
const leftRotation = require('../leftRotation');

const test1 = [1, 2, 3, 4, 5] 
const test2 = [3, 2, 1, 4, 5]
const test3 = [3, 2, 1, 4, 5, 8, 6, 9]

assert.describe('Arrays/leftRotation Test', () => {
  assert.it('should return an array [5 , 1, 2, 3, 4] to rotation 4', () => {
    const rotation = leftRotation(4, test1)
    assert.expect(rotation).toEqual([5, 1, 2, 3, 4])
  })

  assert.it('should return an array [1, 4, 5, 3, 2] to rotation 2', () => {
    const rotation = leftRotation(2, test2)
    assert.expect(rotation).toEqual([1, 4, 5, 3, 2])
  })

  assert.it('should return an array [6, 9, 3, 2, 1, 4, 5, 8] to rotation 6', () => {
    const rotation = leftRotation(6, test3)
    assert.expect(rotation).toEqual([6, 9, 3, 2, 1, 4, 5, 8])
  })
})