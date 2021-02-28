'use strict';
const assert = require('../utils/assert');

// Complete the reverseArray function below.
function reverseArray(a) {
  // nothing to use a.reverse()
    const reverse = []
    for (const value of a) {
      reverse.unshift(value)
    }
    return reverse
}

assert.describe('Arrays Test', () => {
  assert.it('should return a reverse array', () => {
    const reverse = reverseArray([1,2,4,3])
    assert.expect(reverse).toEqual([3,4,2,1])
  })
})



