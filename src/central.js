import {
  product,
  min,
  max,
} from './descriptive';
import {
  getAllIndexes,
  nthRoot,
  kahanSum,
} from './utils';

/**
 * Return the sample arithmetic mean of a numeric data array.
 * The arithmetic mean is the sum of the data divided by the number of data points.
 * @param {Number[]} arr the data array
 * @returns {Number} the arithmetic mean of the data array
 */
export function mean(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return undefined;
  const sum = kahanSum(arr);
  if (sum === undefined) return undefined;
  return sum / arr.length;
}

/**
 * Return the harmonic mean of a numeric data array.
 * The harmonic mean is the reciprocal of the arithmetic mean of the reciprocals of the data.
 * It is the number of data points divided by the sum of the reciprocals of the data points.
 * For example, the harmonic mean of three values a, b and c
 * will be equivalent to 3/(1/a + 1/b + 1/c).
 * @param {Number[]} arr the data array
 * @returns {Number} the harmonic mean of the data array
 */
export function harmonicMean(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return undefined;
  const sum = kahanSum(arr.map(elt => 1 / elt));
  if (sum === undefined || sum === 0) return undefined;
  return arr.length / sum;
}

/**
 * Return the geometric mean of a numeric data array.
 * The geometric mean is the nth root of the product of the n data points.
 * For example, the geometric mean of three values a, b and c
 * will be equivalent to (abc)^(1/3).
 * @param {Number[]} arr the data array
 * @returns {Number} the geometric mean of the data array
 */
export function geometricMean(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return undefined;
  const prod = product(arr);
  if (!Number.isFinite(prod)) return undefined;
  return nthRoot(prod, arr.length);
}

/**
 * Return the median (middle value) of a numeric data array.
 * The median is the value separating the higher half from the lower half of a data sample.
 * If there is an odd number of observations, the middle one is picked.
 * If there is an even number of observations,
 * the median is defined as the mean of the two middle values.
 * @param {Number[]} arr the data array
 * @returns {Number} the median of the data array
 */
export function median(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return undefined;
  for (let i = 0; i < arr.length; i += 1) {
    if (!Number.isFinite(arr[i])) return undefined;
  }
  const sorted = [...arr].sort((a, b) => a - b);
  const l = sorted.length;
  return l % 2 ? sorted[Math.floor(l / 2)] : (sorted[l / 2] + sorted[l / 2 - 1]) / 2;
}

/**
 * Return the low median of a data array.
 * The low median is always a member of the data set.
 * It accepts both numeric and non numeric data arrays.
 * When the number of observations is odd, the middle value is returned.
 * When the number of observations is even, the smaller of the two middle values is returned.
 * @param {Array} arr the data array
 * @param {Function} func the sorting function for non numeric obersevations
 * @returns {Number} the low median of the data array
 */
export function medianLow(arr, func = (a, b) => a - b) {
  if (!Array.isArray(arr) || arr.length === 0) return undefined;
  const sorted = [...arr].sort(func);
  return sorted[Math.ceil(sorted.length / 2 - 1)];
}

/**
 * Return the high median of a data array.
 * The high median is always a member of the data set.
 * It accepts both numeric and non numeric data arrays.
 * When the number of observations is odd, the middle value is returned.
 * When the number of observations is even, the larger of the two middle values is returned.
 * @param {Array} arr the data array
 * @param {Function} func the sorting function for non numeric obersevations
 * @returns {Number} the low median of the data array
 */
export function medianHigh(arr, func = (a, b) => a - b) {
  if (!Array.isArray(arr) || arr.length === 0) return undefined;
  const sorted = [...arr].sort(func);
  return sorted[Math.floor(sorted.length / 2)];
}

/**
 * Return the median (middle value) of grouped continuous numeric data, using interpolation.
 * @param {Number[]} arr the data array
 * @param {Number} [width = 1] the width of the groups
 * @returns {Number} the grouped median of the data array
 */
export function medianGrouped(arr, width = 1) {
  if (!Array.isArray(arr) || arr.length === 0) return undefined;
  const groups = [];
  const sorted = [...arr].sort((a, b) => a - b);
  let current = sorted[0];
  for (let i = 0; i < sorted.length; i += 1) {
    if (!Number.isFinite(sorted[i])) return undefined;
    while (sorted[i] >= current - width / 2) {
      groups.push({
        interval: [current - width / 2, current + width / 2],
        frequency: 0,
      });
      current += width;
    }
    groups.find(group => (sorted[i] >= group.interval[0] && sorted[i] < group.interval[1]))
      .frequency += 1;
  }
  const l = sorted.length;
  let medianGroup;
  let groupIterator = 0;
  let count = 0;
  while (count < l / 2) {
    medianGroup = groups[groupIterator];
    count += medianGroup.frequency;
    groupIterator += 1;
  }
  count -= medianGroup.frequency;
  return medianGroup.interval[0] + ((l / 2) - count) / medianGroup.frequency * width;
}

/**
 * Return the quartiles of a numeric data array.
 * The first quartile (Q1) is defined as the middle number between the smallest number
 * and the median of the data set.
 * The second quartile (Q2) is the median of the data.
 * The third quartile (Q3) is the middle value between the median and the highest
 * value of the data set.
 *
 * The median is used to divide the ordered data set into two halves.
 * If there are an odd number of data points in the original ordered data set
 * the median is not included in either half.
 * If there are an even number of data points in the original ordered data set,
 * the sata set is split exactly in half.
 * The lower quartile value is the median of the lower half of the data.
 * The upper quartile value is the median of the upper half of the data.
 * @param {Number[]} arr the data array
 * @returns {Number[]} the quartiles of the data array
 */
export function quartiles(arr) {
  if (!Array.isArray(arr) || arr.length < 4) return undefined;
  const sorted = [...arr].sort((a, b) => a - b);
  const med = median(sorted);
  if (med === undefined) return undefined;

  const l = sorted.length;
  const lower = l % 2 === 0 ? sorted.slice(0, l / 2) : sorted.slice(0, Math.floor(l / 2));
  const upper = l % 2 === 0 ? sorted.slice(l / 2, l) : sorted.slice(Math.ceil(l / 2), l);
  return [median(lower), med, median(upper)];
}

/**
 * Return the mid-range of a numeric data array.
 * The mid-range of a data set is the arithmetic mean of
 * the maximum and minimum values in the data set.
 * @param {Array} arr the data array
 * @returns {Number} the mid-range of the data array
 */
export function midRange(arr) {
  return mean([min(arr), max(arr)]);
}

/**
 * Return the mode(s) of a data array.
 * The mode is the most common data point from the data array.
 * If there are multiple data points with the same larger number of occurences in the data array,
 * there are multiple modes and they are all returned as an array.
 * @param {Array} arr the data array
 * @returns {Array} the modes of the data array
 */
export function mode(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return undefined;
  const numOccurences = [];
  const keys = [];
  for (let i = 0; i < arr.length; i += 1) {
    const index = keys.indexOf(arr[i]);
    if (index < 0) {
      keys.push(arr[i]);
      numOccurences.push(1);
    } else {
      numOccurences[index] += 1;
    }
  }

  const occurenceMax = numOccurences.reduce((acc, val) => (val > acc ? val : acc));
  const modesIndexes = getAllIndexes(numOccurences, occurenceMax);
  const modes = [];
  for (let i = 0; i < modesIndexes.length; i += 1) {
    modes.push(keys[modesIndexes[i]]);
  }
  return modes;
}

/**
 * Returns the root mean square of a numeric data array.
 * The Root Mean Square (rms) is the square root of the arithmetic mean of
 * the squares of a set of numbers
 * @param {Array} arr the data array
 * @returns {Number} The root mean square of the data array
 */
export function rms(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return undefined;
  const xBar = mean(arr.map(elt => elt ** 2));
  return xBar === undefined ? undefined : Math.sqrt(xBar);
}

export default {
  mean,
  harmonicMean,
  geometricMean,
  median,
  medianLow,
  medianHigh,
  medianGrouped,
  quartiles,
  midRange,
  mode,
  rms,
};
