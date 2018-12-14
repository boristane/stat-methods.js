/**
 * Return all the indexes of at which an element appears in an array.
 * @param {Array} arr the data array
 * @param elt the element to find
 * @returns {Number[]} the array of indexes
 */
export function getAllIndexes(arr, elt) {
  const indexes = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === elt) indexes.push(i);
  }
  return indexes;
}
