const assert = require('../../../utils/assert');
const plusMinus = require('../plusMinus');

assert.describe('Warmup/plusMinus Test', () => {
  assert.it('should return [0.500000, 0.333333, 0.166667] to [-4, 3, -9, 0, 4, 1]', () => {
    const result = plusMinus([-4, 3, -9, 0, 4, 1])
    assert.expect(result).toEqual(['0.500000', '0.333333', '0.166667'])
  })

  assert.it('should return [0.375000, 0.375000, 0.250000] to [1, 2, 3, -1, -2, -3, 0, 0]', () => {
    const result = plusMinus([1, 2, 3, -1, -2, -3, 0, 0])
    assert.expect(result).toEqual(['0.375000', '0.375000', '0.250000'])
  })
})
0.375000, 0.375000, 0.250000