# stat-methods.js

[![Build Status](https://travis-ci.org/boristane/stat-methods.js.svg?branch=master)](https://travis-ci.org/boristane/stat-methods.js)  [![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)

## Installation

## Getting Started

A library which provides methods for calculating mathematical statistics of numeric (Real-valued) data. The library is heavily inspired by The Python Standard Library [statistics](https://docs.python.org/3/library/statistics.html) module.

## Documentation

### Averages and measures of central location

These methods calculate an average or typical value from a population or sample.
-   [mean](#mean): Arithmetic mean ('average')
-   [harmonicMean](#harmonicMean): Harmonic mean ('subcontrary mean')
-   [median](#median): Median (middle value)
-   [medianLow](#medianLow): Low median
-   [medianHigh](#medianHigh): High median
-   [mode](#mode): modes (most common data points)

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

By default, the compare function orders the data array in ascending order, in the numerical sense. Using arbitrary values for the compare function with numerical data might result in invalid results.

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

By default, the compare function orders the data array in ascending order, in the numerical sense. Using arbitrary values for the compare function with numerical data might result in invalid results.

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
If there are multiple data points with the same number of occurences in the data array, there are multiple modes and they are all returned as an array.

```js
mode([1, 2, 3, 3, 4, 4]); // [3, 4]
```

The `mode` method also applies to non-numeric data arrays.

```js
mode(['a', 'c', 'b', 'd', 'c']); // -> ['c']
```

If the data array is empty, the method returns `undefined`.

## License

The library is [MIT licensed](LICENSE).
