const assert = require('../../utils/assert');
const reverseArray = require('./reverseArray');

assert.describe('Arrays/reverseArray Test', () => {
  assert.it('should return a reverse array', () => {
    const reverse = reverseArray([1,2,4,3])
    assert.expect(reverse).toEqual([3,4,2,1])
  })
})