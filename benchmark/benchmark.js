'use strict';

const BenchmarkTester = require('benchmark-tester');

new BenchmarkTester()
  .addPackage('String API', String.prototype)

  .addTest('@fav/text.ends-with', (endsWith, data) => {
    return endsWith(data[0], data[1]);
  })
  .addTest('lodash', (lodash, data) => {
    return lodash.endsWith(data[0], data[1]);
  })
  .addTest('String API', (proto, data) => {
    return data[0].endsWith(data[1]);
  })
  .addTest('ends-with', (endsWith, data) => {
    return endsWith(data[0], data[1]);
  })
  .runTest('endsWith("abc", "c")', ['abc', 'c'])
  .runTest('endsWith("abcdefg", "efg")', ['abcdefg', 'efg'])
  .print();

