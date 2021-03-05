const assert = require('../../../utils/assert');
const aVeryBigSum = require('../aVeryBigSum');

assert.describe('Warmup/aVeryBigSum Test', () => {
  assert.it('should return 5000000015 to array [1000000001, 1000000002, 1000000003, 1000000004, 1000000005]', () => {
    const result = aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005])
    assert.expect(result).toEqual(5000000015)
  })
})