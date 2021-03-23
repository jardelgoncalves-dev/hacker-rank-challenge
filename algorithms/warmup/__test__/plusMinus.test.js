const assert = require('../../../utils/assert');
const plusMinus = require('../plusMinus');

assert.describe('Warmup/plusMinus Test', () => {
  assert.it('should return 0.500000, 0.333333, 0.166667 to [-4, 3, -9, 0, 4, 1]', () => {
    let write = process.stdout.write;
    let output = '';

    process.stdout.write = function(str) {
      output += str;
    };
    plusMinus([-4, 3, -9, 0, 4, 1])
    assert.expect(output).toEqual('0.500000\n0.333333\n0.166667')
    process.stdout.write = write;

  })

  assert.it('should return 0.375000, 0.375000, 0.250000 to [1, 2, 3, -1, -2, -3, 0, 0]', () => {
    let write = process.stdout.write;
    let output = '';

    process.stdout.write = function(str) {
      output += str;
    };
    plusMinus([1, 2, 3, -1, -2, -3, 0, 0])
    assert.expect(output).toEqual('0.375000\n0.375000\n0.250000')
    process.stdout.write = write;
  })
})
0.375000, 0.375000, 0.250000