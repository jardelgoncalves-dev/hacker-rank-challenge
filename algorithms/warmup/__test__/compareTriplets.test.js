const assert = require('../../../utils/assert');
const compareTriplets = require('../compareTriplets');

assert.describe('Warmup/compareTriplets Test', () => {
  assert.it('should return [2, 1] to a = [3, 2, 1] and b = [2, 1, 2]', () => {
    const result = compareTriplets([3, 2, 1], [2, 1, 2])
    assert.expect(result).toEqual([2, 1])
  })

  assert.it('should return [2, 2] to a = [3, 2, 1, 1, 1] and b = [2, 1, 2, 2, 1]', () => {
    const result = compareTriplets([3, 2, 1, 1, 1], [2, 1, 2, 2, 1])
    assert.expect(result).toEqual([2, 2])
  })
})