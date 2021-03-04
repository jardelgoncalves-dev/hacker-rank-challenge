const assert = require('../../../utils/assert');
const solveMeFirst = require('../solveMeFirst');

assert.describe('Warmup/solveMeFirst Test', () => {
  assert.it('should return 5 to sum 2 + 3', () => {
    const result = solveMeFirst(2, 3)
    assert.expect(result).toEqual(5)
  })

  assert.it('should return 10 to sum 7 + 3', () => {
    const result = solveMeFirst(7, 3)
    assert.expect(result).toEqual(10)
  })

})