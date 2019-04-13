# stat-methods

[![Build Status](https://travis-ci.org/boristane/stat-methods.js.svg?branch=master)](https://travis-ci.org/boristane/stat-methods.js)  [![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)  [![Codacy Badge](https://api.codacy.com/project/badge/Grade/831be96eff514a60a3231a7885de3af0)](https://www.codacy.com/app/boris.tane/stat-methods.js?utm_source=github.com&utm_medium=referral&utm_content=boristane/stat-methods.js&utm_campaign=Badge_Grade)  [![](https://img.shields.io/bundlephobia/min/react.svg)](https://www.npmjs.com/package/stat-methods)  

[![NPM](https://nodei.co/npm/stat-methods.png)](https://nodei.co/npm/stat-methods/) 

## Getting Started

A library which provides methods for calculating mathematical statistics of numeric data. The library is heavily inspired by The Python Standard Library [statistics](https://docs.python.org/3/library/statistics.html) module.

## Installation

```bash
npm i stat-methods
```

## Documentation

### Table of contents

1.  [Averages and measures of central location](#Averages-and-measures-of-central-location)

    -   [mean](#mean)
    -   [harmonicMean](#harmonicMean)
    -   [geometricMean](#geometricMean)
    -   [median](#median)
    -   [medianLow](#medianLow)
    -   [medianHigh](#medianHigh)
    -   [medianGrouped](#medianGrouped)
    -   [quartiles](#quartiles)
    -   [midRange](#midRange)
    -   [mode](#mode)
    -   [rms](#rms)

2.  [Measures of spread](#Measures-of-spread)

    -   [pVariance](#pVariance)
    -   [pStdev](#pStdev)
    -   [variance](#variance)
    -   [stdev](#stdev)
    -   [range](#range)

3.  [Descriptive statistics](#Descriptive-statistics)

    -   [min](#min)
    -   [max](#max)
    -   [product](#product)
    -   [sum](#sum)

4.  [Measures of similarity](#Measures-of-similarity)

    -   [covariance](#covariance)
    -   [correlation](#correlation)

5.  [Regressions](#Regressions)
    -   [linReg](#linReg)

### Averages and measures of central location

These methods compute an average or typical value from a population or sample.

| Method                          | Description                                      |
| ------------------------------- | ------------------------------------------------ |
| [mean](#mean)                   | Arithmetic mean ('average')                      |
| [harmonicMean](#harmonicMean)   | Harmonic mean ('subcontrary mean')               |
| [geometricMean](#geometricMean) | Geometric mean                                   |
| [median](#median)               | Median (middle value)                            |
| [medianLow](#medianLow)         | Low median                                       |
| [medianHigh](#medianHigh)       | High median                                      |
| [medianGrouped](#medianGrouped) | Median of grouped data                           |
| [quartiles](#quartiles)         | Quartiles (4-quantile)                           |
| [midRange](#midRange)           | Average of minimum and maximum                   |
| [mode](#mode)                   | Modes (most common data points) of discrete data |
| [rms](#rms)                     | Root Mean Square                                 |

Note: The methods do not require the data given to them to be sorted.

#### mean

```js
mean(arr);
```

Returns the sample arithmetic mean of a numeric data array `arr`.

The arithmetic mean is the sum of values of the data points divided by the number of data points.

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

```js
harmonicMean(arr);
```

Return the harmonic mean of a numeric data array `arr`.

The harmonic mean is the reciprocal of the arithmetic mean of the reciprocals of the data. It is the number of data points divided by the sum of the reciprocals of the data points. For example, the harmonic mean of three values `a`, `b` and `c` will be equivalent to `3/(1/a + 1/b + 1/c)`.

```js
harmonicMean([2.5, 3, 10]) * 10; // -> 36
```

The `harmonicMean` is typically appropriate compared with the arithmetic `mean` when evaluating the average of rates or ratios (for example speeds or densities).

If the data array contains elements with value `0`, the method returns `undefined`.

```js
harmonicMean([2.5, 3, 0]); // -> undefined
```

If the data array is empty or contains a non finite `Number`, the method returns `undefined`.

#### geometricMean

```js
geometricMean(arr);
```

Return the geometric mean of a numeric data array `arr`.

The geometric mean is the nth root of the product of the `n` data points (`n` is the number of data points) For example, the geometric mean of three values `a`, `b` and `c` will be equivalent to `(a*b*c) ^ (1/3)`.

```js
geometricMean([4, 1, 1/32]); // -> 0.5
```

The geometric mean indicates the central tendency or typical value of a set of numbers and is often used when comparing different items — finding a single "figure of merit" for these items — when each item has multiple properties that have different numeric ranges.

If the data array contains an even total number of elements and an odd number of negative elements, the method returns `undefined`.

```js
geometricMean([1, -2, 3, 4]); // -> undefined
```

If the data array is empty or contains a non finite `Number`, the method returns `undefined`.

#### median

```js
median(arr);
```

Return the median (middle value) of a numeric data array `arr`.

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

```js
medianLow(arr[, compareFunction]);
```

Return the low median of a data array `arr`. An optional `compareFunction` parameter can be provided for non numerica data arrays.

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

```js
medianHigh(arr[, compareFunction]);
```

Return the high median of a data array `arr`. An optional `compareFunction` parameter can be provided for non numerica data arrays.

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

```js
medianGrouped(arr[, width]);
```

Return the median (middle value) of grouped continuous numeric data `arr`, using interpolation.

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

#### quartiles

```js
quartiles(arr)
```

Return the quartiles of a numeric data array `arr`.

-   The first quartile (`Q1`) is defined as the middle number between the smallest number and the median of the data set.
-   The second quartile (`Q2`) is the median of the data.
-   The third quartile (`Q3`) is the middle value between the median and the highest value of the data set.

```js
quartiles([2, 2, 3, 4]); // -> [2, 2.5, 3.5]
```

The data set if first ordered, from smallest to highest.

The median (`Q2`) is used to divide the ordered data set into two halves.

-   If there are an odd number of data points in the original ordered data set the median is not included in either half.
-   If there are an even number of data points in the original ordered data set, the sata set is split exactly in half.

The lower quartile value (`Q1`) is the median of the lower half of the data. The upper quartile value (`Q3`) is the median of the upper half of the data.

```js
quartiles([6, 7, 15, 36, 39, 40, 41, 42, 43, 47, 49]); // -> [15, 40, 43]
quartiles([7, 15, 36, 39, 40, 41]); // -> [15, 37.5, 40]
```

If the data array contains less than 4 elements and/or contains a non finite `Number`, the method returns `undefined`.

#### midRange

```js
midRange(arr);
```

Return the mid-range of the data array `arr`.

The mid-range of a data set is the arithmetic mean of the maximum and minimum values in the data set.

```js
midRange([1, 4, 6, -1]); // -> 2.5;
```

If the data array is empty or contains a non-numeric value, the method returns `undefined`.

#### mode

```js
mode(arr);
```

Return the mode(s) of a data array `arr`.

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

#### rms

```js
rms(arr);
```

Return the root mean square (rms) of the data array `arr`.

The Root Mean Square (rms) is the square root of the arithmetic mean of the squares of a set of numbers.

```js
rms([4, 1, 1, 3]); // -> 2.598076211353316;
```

If the data array is empty or contains a non-numeric value, the method returns `undefined`.

### Measures of spread

These methods compute a measure of the variability in a sample or population, how much the sample or population tends to deviate from the typical or average values.

| Method                  | Description                   |
| ----------------------- | ----------------------------- |
| [pVariance](#pVariance) | Population variance           |
| [pStdev](#pStdev)       | Population standard deviation |
| [variance](#variance)   | Sample variance               |
| [stdev](#stdev)         | Sample standard deviation     |
| [range](#range)         | Range                         |

#### pVariance

```js
pVariance(arr[, mu]);
```

Return the population variance of a numeric data array `arr`.

The variance, or second moment about the mean, is a measure of the spread of a sample or population. A large variance indicates that the data is spread out; a small variance indicates it is clustered closely around the mean.

```js
pVariance([0.0, 0.25, 0.25, 1.25, 1.5, 1.75, 2.75, 3.25]); // -> 1.25
```

The mean of the data array `mu` can be provided as an optional argument if previously computed.

```js
const pop = [1, 2, 3, 4, 5];
const mu = mean(pop); // -> 3
pVariance(pop, mu); // -> 2
```

If ommited, the mean is automatically computed. The function does not verify that the provided mean is accurate. Using arbitrary values for the mean might lead to invalid results.

This method is appropriate for computing the variance of the entire population. To estimate the variance from a sample, the [variance](#variance) method is recommended.

If the data array is empty or contains a non finite `Number`, the method returns `undefined`.

#### pStdev

```js
pStdev(arr[, mu]);
```

Return the population standard deviation of a numeric data array `arr`.

The standard deviation is a measure that is used to quantify the amount of variation or dispersion of a set of data values, computed as the square root of the variance.

The mean of the data array `mu` can be provided as an optional argument if previously computed.

```js
pStdev([1.5, 2.5, 2.5, 2.75, 3.25, 4.75]); // -> 0.986893273527251
const mu = 3;
pStdev([1, 2, 3, 4, 5], mu); // -> 1.4142135623730951
```

Please refer to the [pVariance](#pVariance) method for further details.

#### variance

```js
variance(arr[, xBar]);
```

Return the sample variance of a numeric data array `arr`.

The variance, or second moment about the mean, is a measure of the spread of a sample or population. A large variance indicates that the data is spread out; a small variance indicates it is clustered closely around the mean.

```js
variance([0.0, 0.25, 0.25, 1.25, 1.5, 1.75, 2.75, 3.25]); // -> 1.4285714285714286
```

The mean of the data array `xBar` can be provided as an optional argument if previously computed.

```js
const sample = [1, 2, 3, 4, 5];
const xBAr = mean(sample); // -> 3
variance(sample, xBar); // -> 2.5
```

If ommited, the mean is automatically computed. The function does not verify that the provided mean is accurate. Using arbitrary values for the mean might lead to invalid results.

This method is appropriate for computing the variance of a sample from a population. To compute the variance of an entire population, the [pVariance](#pVariance) method is recommended.

If the data array is empty, contains a single value or contains a non finite `Number`, the method returns `undefined`.

#### stdev

```js
stdev(arr[, xBar]);
```

Return the sample standard deviation of a numeric data array `arr`.

The standard deviation is a measure that is used to quantify the amount of variation or dispersion of a set of data values, computed as the square root of the variance.

The mean of the data array `xBar` can be provided as an optional argument if previously computed.

```js
stdev([1.5, 2.5, 2.5, 2.75, 3.25, 4.75]); // -> 1.0810874155219827
const xBar = 3;
stdev([1, 2, 3, 4, 5], xBar); // -> 1.5811388300841898
```

Please refer to the [variance](#variance) method for further details.

#### range

```js
range(arr);
```

Return the range of a numeric data array `arr`.

The range of a set of data is the difference between the largest and smallest values.

```js
range([89, 73, 84, 91, 87, 77, 94]); // -> 21
```

If the data array is empty or contains a non finite `Number`, the method returns `undefined`.

### Descriptive statistics

These methods compute a summary statistic that quantitatively describes features of a data array.

| Method              | Description                 |
| ------------------- | --------------------------- |
| [min](#min)         | Minimum                     |
| [max](#max)         | Maximum                     |
| [product](#product) | Product of all the elements |
| [sum](#sum)         | Sum of all the elements     |

#### min

```js
min(arr);
```

Return the minimum value of a numeric data array `arr`.

The minimum is the smallest number in the data array.

```js
min([2.5, 3.25, -2, 5.75]); // -> -2
```

If the data array is empty or contains a non finite `Number`, the method returns `undefined`.

#### max

```js
max(arr);
```

Return the maximum value of a numeric data array `arr`.

The maximum is the largest number in the data array.

```js
max([2.5, 3.25, -2, 5.75]); // -> 5.75
```

If the data array is empty or contains a non finite `Number`, the method returns `undefined`.

#### product

```js
product(arr);
```

Return the product of all elements of a numeric data array `arr`.

```js
product([1, 2, 3, 4]); // -> 24
```

If the data array is empty or contains a non finite `Number`, the method returns `undefined`.

#### sum

```js
sum(arr);
```

Return the sum of all elements of a numeric data array `arr`. The method implement the [Kahan summation algorithm](https://en.wikipedia.org/wiki/Kahan_summation_algorithm) in order to minimise numerical error.

```js
sum([0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7]); // -> 15.3
```

If the data array is empty or contains a non finite `Number`, the method returns `undefined`.

### Measures of similarity

These methods compute a measure of the similarity between samples or populations.

| Method                      | Description         |
| --------------------------- | ------------------- |
| [covariance](#covariance)   | Joint variability   |
| [correlation](#correlation) | Linear relationship |

#### covariance

```js
covariance(x, y);
```

Return the sample covariance between two numeric data arrays `x` and `y`.

The covariance is a measure of the joint variability of two data arrays.

```js
covariance([5, 12, 18, 23, 45], [2, 8, 18, 20, 28]); // -> 146.1
```

The `covariance` method will return `undefined` in the following cases:

-   At least one of the arguments is not an array.
-   At least one of the data arrays contains at least one non finite `Number`.
-   At least one of the data arrays contains less than two elements.
-   The two data arrays do not have the same number of elements.

```js
covariance(3, [2, 2]); // -> undefined
covariance([3, 2.5, 5.1, 5.75], ['a', 2.5, 'b', 5.75]); // -> undefined
covariance([NaN, 2.5, 3, 5.75], [3, 2.5, 5.1, 5.75]); // -> undefined
covariance([2, 1], [3, 2.5, 5.1, 5.75]); // -> undefined
covariance([3], [2]); // -> undefined
```

#### correlation

```js
correlation(x, y);
```

Return the correlation between two numeric data arrays `x` and `y`.

The correlation is a measure of how close two datasets are to having a linear relationship.

```js
correlation([1, 2, 3, 5], [1, 3, 8, 10]); // -> 0.9519450934357727
```

The correlation is computed as the ratio between the covariance and the product of the standard deviations of the tow data arrays. The correlations is between -1 and 1.

Please refer to the `covariance` method for further details.

### Averages and measures of central location

These methods compute regression models for estimating the relationships among variables.

| Method            | Description       |
| ----------------- | ----------------- |
| [linReg](#linReg) | Linear Regression |

#### linReg

```js
linReg(x, y);
```

Return the simple linear regression model between two variables, one independent `x` and one dependent `y`.
The linear regression model is a linear function (straight line) which predicts with the highest possible accuracy the dependent variable as a function of the independent variable.

```js
linReg([5, 12, 18, 23, 45], [2, 8, 18, 20, 28]); // ->
/*
{
  slope: 0.6316472114137484,
  y0: 2.1880674448767827,
  deltaSlope: 0.1364335975819171,
  deltaY0: 3.3680036696904967,
} */
```

The method uses the least-squares approach, minimising the sum of squared residuals. The confidence intervals are computed as defined [here](https://en.wikipedia.org/wiki/Simple_linear_regression#Confidence_intervals) and with `t*_{n-2}` equal to `1`.

The `linReg` method will return `undefined` in the cases defined in [covariance](#covariance).

## License

The library is [MIT licensed](LICENSE).
