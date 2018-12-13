/**
 * Return the sample arithmetic mean of a data array.
 * The arithmetic mean is the sum of the data divided by the number of data points.
 * @param {Array} arr the data array
 * @returns {Number} the arithmetic mean of the data array
 */
export function mean(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return undefined;
  let sum = 0;
  for (let i = 0; i < arr.length; i += 1) {
    if (!Number.isFinite(arr[i])) return undefined;
    sum += arr[i];
  }
  return sum / arr.length;
}

/**
 * Return the harmonic mean of a data array.
 * The harmonic mean is the reciprocal of the arithmetic mean of the reciprocals of the data.
 * It is the number of data points divided by the sum of the reciprocals of the data points.
 * For example, the harmonic mean of three values a, b and c
 * will be equivalent to 3/(1/a + 1/b + 1/c).
 * @param {Array} arr the data array
 * @returns {Number} the harmonic mean of the data array
 */
export function harmonicMean(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return undefined;
  let sum = 0;
  for (let i = 0; i < arr.length; i += 1) {
    if (!Number.isFinite(arr[i]) || arr[i] === 0) return undefined;
    sum += 1 / arr[i];
  }
  return arr.length / sum;
}

/**
 * Return the median (middle value) of a numeric data array.
 * The median is the value separating the higher half from the lower half of a data sample.
 * If there is an odd number of numbers, the middle one is picked.
 * If there is an even number of observations, then there is no single middle value;
 * the median is then usually defined to be the mean of the two middle values.
 * @param {Array} arr the data array
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

export default {
  mean,
  harmonicMean,
  median,
};
