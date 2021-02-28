const assert = require('assert');

exports.describe = (message, fn) => {
  console.log(message)
  fn()
}

exports.it = (message, fn) => {
  try {
    fn()
    console.log(`\x1b[32m  ✓ ${message}\x1b[0m`)
  } catch(error) {
    console.log(`\x1b[31m  ✘ ${message}\x1b[0m`)
    console.log(`\n${error.message}`)
    throw error
  }
}

exports.expect = (expected) => {
  return {
    toEqual: (actual) => {
      assert.deepStrictEqual(actual, expected)
    }
  }
}
