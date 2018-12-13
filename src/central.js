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

export default {
  mean,
  harmonicMean,
};
