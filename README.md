# stat-methods.js

[![Build Status](https://travis-ci.org/boristane/stat-methods.js.svg?branch=master)](https://travis-ci.org/boristane/stat-methods.js)  [![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)  [![Codacy Badge](https://api.codacy.com/project/badge/Grade/831be96eff514a60a3231a7885de3af0)](https://www.codacy.com/app/boris.tane/stat-methods.js?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=boristane/stat-methods.js&amp;utm_campaign=Badge_Grade)

## Installation

## Getting Started

A library which provides methods for calculating mathematical statistics of numeric (Real-valued) data. The library is heavily inspired by The Python Standard Library [statistics](https://docs.python.org/3/library/statistics.html) module.

## Documentation

#### Table of contents
[Averages and measures of central location](#Averages-and-measures-of-central-location)
-   [mean](#mean)
-   [harmonicMean](#harmonicMean)
-   [median](#median)
-   [medianLow](#medianLow)
-   [medianHigh](#medianHigh)
-   [medianGrouped](#medianGrouped)
-   [mode](#mode)

[Measures of spread](#Measures-of-spread)
-   [pVariance](#pVariance)
-   [pStdev](#pStdev)

### Averages and measures of central location

These methods compute an average or typical value from a population or sample.

-   [mean](#mean): Arithmetic mean ('average')
-   [harmonicMean](#harmonicMean): Harmonic mean ('subcontrary mean')
-   [median](#median): Median (middle value)
-   [medianLow](#medianLow): Low median
-   [medianHigh](#medianHigh): High median
-   [medianGrouped](#medianGrouped): Median of grouped data.
-   [mode](#mode): Modes (most common data points) of descrete data

Note: The methods do not require the data given to them to be sorted.

#### mean

Returns the sample arithmetic mean of a numeric data array.

The arithmetic mean is the sum of the data divided by the number of data points.

```js
mean([-1.0, 2.5, 3.25, 5.75]); // -> 2.625
```

If the data array is empty or contains a non finite `Number`, the method returns `undefined`.

```js
mean(['a', 2.5, 'b', 5.75]); // -> undefined
mean([NaN, 2.5, 3, 5.75]); // -> undefined
mean([]); // -> undefined
mean(3); // -> undefined
```

#### harmonicMean

Return the harmonic mean of a numeric data array.

The harmonic mean is the reciprocal of the arithmetic mean of the reciprocals of the data. It is the number of data points divided by the sum of the reciprocals of the data points. For example, the harmonic mean of three values `a`, `b` and `c` will be equivalent to `3/(1/a + 1/b + 1/c)`.

```js
// Great attention should be given to floating number errors using this method.
harmonicMean([2.5, 3, 10]); // -> 3.5999999999999996
harmonicMean([2.5, 3, 10]) * 10; // -> 36
```

The `harmonicMean()` is typically appropriate compared with the arithmetic `mean()` when evaluating the average of rates or ratios (for example speeds or densities).

If the data array contains elements with value `0`, the method returns `undefined`.

```js
harmonicMean([2.5, 3, 0]); // -> undefined
```

If the data array is empty or contains a non finite `Number`, the method returns `undefined`.

#### median

Return the median (middle value) of a numeric data array.

The median is the value separating the higher half from the lower half of a data sample. The `median` method uses the “mean of middle two” method:

-   If there is an odd number of numbers, the median is the middle one. 

```js
median([1, 2, 3, 4, 5]); // -> 3
```

-   If there is an even number of observations, then there is no single middle value; the median is then defined as the mean of the two middle values.

```js
median([1, 2, 3, 4, 5, 6]); // -> 3.5
```

If the data array is empty or contains a non finite `Number`, the method returns `undefined`. In case the data array is non numeric but supports order operations, the [medianLow](#medianLow) and [medianHigh](#medianHigh) methods are recommended.

#### medianLow

Return the low median of a data array.

The low median is always a member of the data set. The `medianLow` method accepts both numeric and non numeric data arrays.

-   When the number of observations is odd, the middle value is returned.

```js
medianLow([1, 2, 3, 4, 5]); // -> 3
```

-   When the number of observations is even, the smaller of the two middle values is returned.

```js
medianLow([1, 2, 3, 4, 5, 6]); // -> 3
```

The median low can be computed with non numeric data arrays, provided they can be sorted and a compare function similar to the compare function required by the standard javascript [Array.prototype.sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) method is provided.

```js
function compareFunction(elt1, elt2) {
  return elt1.charCodeAt(0) - elt2.charCodeAt(0);
}
medianLow(['a', 'c', 'b', 'd'], compareFunction); // -> 'b'
```

By default, the compare function orders the data array in ascending order, in the numerical sense. Using arbitrary values for the compare function might result in invalid results.

If the data array is empty, the method returns `undefined`.

#### medianHigh

Return the high median of a data array.

The high median is always a member of the data set. The `medianHigh` method accepts both numeric and non numeric data arrays.

-   When the number of observations is odd, the middle value is returned.

```js
medianHigh([1, 2, 3, 4, 5]); // -> 3
```

-   When the number of observations is even, the larger of the two middle values is returned.

```js
medianHigh([1, 2, 3, 4, 5, 6]); // -> 4
```

The median high can be computed with non numeric data arrays, provided they can be sorted and a compare function similar to the compare function required by the standard javascript [Array.prototype.sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) method is provided.

```js
function compareFunction(elt1, elt2) {
  return elt1.charCodeAt(0) - elt2.charCodeAt(0);
}
medianHigh(['a', 'c', 'b', 'd'], compareFunction); // -> 'c'
```

By default, the compare function orders the data array in ascending order, in the numerical sense. Using arbitrary values for the compare function might result in invalid results.

If the data array is empty, the method returns `undefined`.

#### medianGrouped

Return the median (middle value) of grouped continuous numeric data, using interpolation.

```js
medianGrouped([52, 52, 53, 54]); // -> 52.5
medianGrouped([1, 2, 2, 3, 4, 4, 4, 4, 4, 5]); // -> 3.7
```

The `medianGrouped` method takes an optional argument `width` which represents the class width, and defaults to 1. Changing the class width will change the result.

```js
medianGrouped([1, 3, 3, 5, 7]); // -> 3.25
medianGrouped([1, 3, 3, 5, 7], 2); // -> 3.5
```

If the data array is empty or contains a non finite `Number`, the method returns `undefined`.

#### mode

Return the mode(s) of a data array.

The mode is the most common data point from the data array. The method `mode` returns the mode(s) in an array.

```js
mode([1, 1, 2]); // -> [1]
```
If there are multiple data points with the same larger number of occurences in the data array, there are multiple modes and they are all returned as an array.

```js
mode([1, 2, 3, 3, 4, 4]); // [3, 4]
```

The `mode` method also applies to non-numeric data arrays.

```js
mode(['a', 'c', 'b', 'd', 'c']); // -> ['c']
```

If the data array is empty, the method returns `undefined`.

### Measures of spread

These methods calculate a measure of the variability in a sample or population, how much the sample or population tends to deviate from the typical or average values.

-   [pVariance](#pVariance): Population variance
-   [pStdev](#pStdev): Population standard deviation

#### pVariance

Return the population variance of a numeric data array.

The variance, or second moment about the mean, is a measure of the spread of a sample or population. A large variance indicates that the data is spread out; a small variance indicates it is clustered closely around the mean.

```js
pVariance([0.0, 0.25, 0.25, 1.25, 1.5, 1.75, 2.75, 3.25]); // -> 1.25
```

The mean of the data array can be provided as an optional argument if previously computed.

```js
const pop = [1, 2, 3, 4, 5];
const mu = mean(pop); // -> 3
pVariance(pop, mu); // -> 2
```

If ommited, the mean is automatically computed. The function does not verify that the provided mean is accurate. Using arbitrary values for the mean might lead to invalid results.

This method is appropriate for computing the variance of the entire population. To estimate the variance from a sample, the [variance](#variance) method is recommended.

If the data array is empty or contains a non finite `Number`, the method returns `undefined`.

#### pStdev

Return the standard deviation of a numeric data array.

The standard deviation is a measure that is used to quantify the amount of variation or dispersion of a set of data values, computed as the square rooth of the variance.

```js
pStdev([1.5, 2.5, 2.5, 2.75, 3.25, 4.75]); // -> 0.986893273527251
pStdev([1, 2, 3, 4, 5], 3); // -> 1.4142135623730951
```

Please refer to the [pVariance](#pVariance) method for further details.

## License

The library is [MIT licensed](LICENSE).
