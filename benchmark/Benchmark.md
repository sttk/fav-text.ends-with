# Benchmark test of @fav/text.ends-with

Comparing with following modules:

- [lodash](https://www.npmjs.com/package/lodash)
- [ends-with](https://www.npmjs.com/package/ends-with)
- [String API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith)

## v1.0.3

|                            | String API         | @fav/text.ends-with(1.0.3) | lodash(4.17.11)     | ends-with(1.0.1)    |
|:---------------------------|-------------------:|---------------------------:|--------------------:|--------------------:|
| endsWith("abc", "c")       | 34,982,368 ops/sec |        140,447,507 ops/sec |  79,801,754 ops/sec | 126,532,627 ops/sec |
| endsWith("abcdefg", "efg") | 25,891,732 ops/sec |        679,541,269 ops/sec | 161,133,982 ops/sec | 680,290,520 ops/sec |

- Platform: Node.js 12.2.0 on Darwin 64-bit
- Machine: Intel(R) Core(TM) i7-2620M CPU @ 2.70GHz, 16GB

