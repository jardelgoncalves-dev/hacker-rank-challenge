const assert = require('../../../utils/assert');
const simpleArraySum = require('../simpleArraySum');

assert.describe('Warmup/simpleArraySum Test', () => {
  assert.it('should return 10 to array [1,2,3,4]', () => {
    const result = simpleArraySum([1, 2, 3, 4])
    assert.expect(result).toEqual(10)
  })

  assert.it('should return 22 to array [1,2,3,4, 10, 2]', () => {
    const result = simpleArraySum([1, 2, 3, 4, 10, 2])
    assert.expect(result).toEqual(22)
  })

})