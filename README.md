# stat-methods.js

[![Build Status](https://travis-ci.org/boristane/stat-methods.js.svg?branch=master)](https://travis-ci.org/boristane/stat-methods.js)  [![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)

## Installation

## Getting Started

A module which provides methods for calculating mathematical statistics of numeric (Real-valued) data.

## Documentation

### Averages and measures of central location

These functions calculate an average or typical value from a population or sample.
-   [mean](#mean): Arithmetic mean ('average')

Note: The methods do not require the data given to them to be sorted.

#### mean

Returns the sample arithmetic mean of the data array. The arithmetic mean is the sum of the data divided by the number of data points.

If the data array is empty or contains a non finite `Number`, the method returns `undefined`.

```js
mean([1, 2, 3, 4, 4]); // -> 2.8
mean([-1.0, 2.5, 3.25, 5.75]); // -> 2.625
mean([3]); // -> 3
mean([3, 2.5, 2e2, 5.75]); // -> 52.8125

mean(['a', 2.5, 'b', 5.75]); // -> undefied
mean([NaN, 2.5, 'b', 5.75]); // -> undefied
mean([]); // -> undefied
mean(3); // -> undefied
```

## License

The library is [MIT licensed](LICENSE).
