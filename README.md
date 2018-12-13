# stat-methods.js

[![Build Status](https://travis-ci.org/boristane/stat-methods.js.svg?branch=master)](https://travis-ci.org/boristane/stat-methods.js)  [![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)

## Installation

## Getting Started

A library which provides methods for calculating mathematical statistics of numeric (Real-valued) data. The module is heavily inspired by The Python Standard Library [statistics](https://docs.python.org/3/library/statistics.html).

## Documentation

### Averages and measures of central location

These functions calculate an average or typical value from a population or sample.
-   [mean](#mean): Arithmetic mean ('average')
-   [harmoniMean](#harmonNicMean): Harmonic mean ('subcontrary mean')

Note: The methods do not require the data given to them to be sorted.

#### mean

Returns the sample arithmetic mean of the data array.

The arithmetic mean is the sum of the data divided by the number of data points.

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

#### harmonicMean

Return the harmonic mean of the data array.

The harmonic mean is the reciprocal of the arithmetic mean of the reciprocals of the data. It is the number of data points divided by the sum of the reciprocals of the data points. For example, the harmonic mean of three values a, b and c will be equivalent to 3/(1/a + 1/b + 1/c).


The `harmonicMean()` is typically appropriate compared with the arithmetic `mean()` when evaluating the avaerage of rates or ratios (for example speeds or densities).

If the data array is empty or contains a non finite `Number`, the method returns `undefined`.

If the data array contains elements with value `0`, the method returns `undefined`.

```js
// Great attention should be given to floating number errors using this method.
harmonicMean([2.5, 3, 10]); // -> 3.5999999999999996
harmonicMean([2.5, 3, 10]) * 10; // -> 36
harmonicMean([2.5, 3, 0]); // -> undefined
```


## License

The library is [MIT licensed](LICENSE).
