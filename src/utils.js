/**
 * Return all the indexes of at which an element appears in an array.
 * @param {Array} arr the data array
 * @param elt the element to find
 * @returns {Number[]} the array of indexes
 */
export function getAllIndexes(arr, elt) {
  if (!Array.isArray(arr)) return undefined;
  const indexes = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === elt) indexes.push(i);
  }
  return indexes;
}

/**
 * Return the nth root of the given value.
 * @param {Number} val the value to get the nth root of
 * @param {Number} n the order of the root to take
 * @returns {Number} the nth root of the value
 */
export function nthRoot(val, n) {
  if (!Number.isFinite(val) || !Number.isFinite(n)) return undefined;
  if (val < 0 && n % 2 === 0) return undefined;
  return (val < 0 ? -1 : 1) * Math.abs(val) ** (1 / n);
}

/**
 * Return the sum of all elements of the data array whilst minimising the numerical error
 * @param {Number} arr the data array
 * @returns {Number} the sum of the the elements of the array
 */
export function kahanSum(arr) {
  let result = 0;
  let compensation = 0;
  for (let i = 0; i < arr.length; i += 1) {
    if (!Number.isFinite(arr[i])) return undefined;
    const y = arr[i] - compensation;
    const total = result + y;
    compensation = total - result - y;
    result = total;
  }
  return result;
}

/**
 * Returns the nth moment about the mean of the data array.
 * @param {Number[]} arr the data array
 * @param {Number} n the moment order
 * @returns {Number} the nth moment about the mean
 */
export function nthMomentAboutMean(arr, n) {
  const s = kahanSum(arr);
  if (s === undefined) return undefined;
  const xBar = s / arr.length;
  const a = arr.map((elt) => (elt - xBar) ** n);
  const sum = a.reduce((acc, curr) => acc + curr);
  return sum / arr.length;
}

export default {
  getAllIndexes,
  nthRoot,
  kahanSum,
  nthMomentAboutMean,
};
