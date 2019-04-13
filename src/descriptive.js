import { kahanSum } from './utils';

/**
 * Return the minimum of a numeric data array.
 * @param {Number[]} arr the data array
 * @returns {Number} the minimum of the data array
 */
export function min(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return undefined;
  let result = arr[0];
  for (let i = 0; i < arr.length; i += 1) {
    if (!Number.isFinite(arr[i])) return undefined;
    result = arr[i] > result ? result : arr[i];
  }
  return result;
}

/**
 * Return the maximum of a numeric data array.
 * @param {Number[]} arr the data array
 * @returns {Number} the maximum of the data array
 */
export function max(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return undefined;
  let result = arr[0];
  for (let i = 0; i < arr.length; i += 1) {
    if (!Number.isFinite(arr[i])) return undefined;
    result = arr[i] < result ? result : arr[i];
  }
  return result;
}

/**
 * Returns the product of all entries in a numeric data array.
 * @param {Array} arr the data array
 * @returns {Number} the product of all the data in the array
 */
export function product(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return undefined;
  let result = 1;
  for (let i = 0; i < arr.length; i += 1) {
    if (!Number.isFinite(arr[i])) return undefined;
    result *= arr[i];
  }
  return result;
}

export function sum(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return undefined;
  return kahanSum(arr);
}

export default {
  min,
  max,
  product,
  sum,
};
