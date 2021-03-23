const assert = require('../../../utils/assert');
const staircase = require('../staircase');

assert.describe('Warmup/staircase Test', () => {
  
  assert.it('should return      #     ##    ###   ####  ##### ######', () => {
    let write = process.stdout.write;
    let output = '';

    process.stdout.write = function(str) {
      output += str;
    };

    staircase(6)
    assert.expect(output).toEqual('     #\n    ##\n   ###\n  ####\n #####\n######\n')
    process.stdout.write = write;
  })
})