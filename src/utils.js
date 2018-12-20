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
  return (val < 0 ? -1 : 1) * (Math.abs(val) ** (1 / n));
}

export default {
  getAllIndexes,
  nthRoot,
};
