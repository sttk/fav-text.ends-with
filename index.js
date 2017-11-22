'use strict';

function endsWith(string, target, endIndex) {
  endIndex = Math.max(endIndex, 0);
  if (endIndex !== endIndex) { // NaN
    endIndex = string.length;
  }

  var startIndex = endIndex - target.length;
  if (startIndex >= 0) {
    /* eslint eqeqeq: off */
    return string.slice(startIndex, endIndex) == target;
  }

  return false;
}

module.exports = endsWith;
