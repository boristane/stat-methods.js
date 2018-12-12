/**
 * Return the sample arithmetic mean of an array.
 * The arithmetic mean is the sum of the data divided by the number of data points.
 * @param {Array} arr the data array
 * @returns {Number} the arithmetic mean of the array
 */
export function mean(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return undefined;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if(!Number.isFinite(arr[i])) return undefined;
    sum += arr[i];
  }
  return sum / arr.length;
}
