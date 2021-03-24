const assert = require('../../../utils/assert');
const miniMaxSum = require('../miniMaxSum');

assert.describe('Warmup/miniMaxSum Test', () => {
  assert.it('should return 16 24 to [1, 3, 5, 7, 9] array', () => {
    let write = process.stdout.write;
    let output = '';

    process.stdout.write = function(str) {
      output += str;
    };
    miniMaxSum([1, 3, 5, 7, 9])
    assert.expect(output).toEqual('16 24')
    process.stdout.write = write;
  })
  assert.it('should return 10 14 to [1, 2, 3, 4, 5] array', () => {
    let write = process.stdout.write;
    let output = '';

    process.stdout.write = function(str) {
      output += str;
    };
    miniMaxSum([1, 2, 3, 4, 5])
    assert.expect(output).toEqual('10 14')
    process.stdout.write = write;
  })
})