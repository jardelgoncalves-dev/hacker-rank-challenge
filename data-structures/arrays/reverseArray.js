'use strict';

// Complete the reverseArray function below.
function reverseArray(a) {
  // nothing to use a.reverse()
    const reverse = []
    for (const value of a) {
      reverse.unshift(value)
    }
    return reverse
}

module.exports = reverseArray