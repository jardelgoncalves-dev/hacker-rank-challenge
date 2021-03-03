const assert = require('../../../utils/assert');
const sparseArrays = require('../sparseArrays');

assert.describe('Arrays/sparseArrays Test', () => {
  assert.it('should return as occurrences of the query array [foo, bar]', () => {
    const sparse = sparseArrays(['foo', 'fooo', 'baa', 'ba', 'bar', 'bar'],['foo', 'bar'])
    assert.expect(sparse).toEqual([1, 2])
  })

  assert.it('should return as occurrences of the query array [aba, baba, xzxb]', () => {
    const sparse = sparseArrays(['aba', 'baba', 'aba', 'aba'], ['aba', 'baba', 'xzxb'])
    assert.expect(sparse).toEqual([3, 1, 0])
  })
})