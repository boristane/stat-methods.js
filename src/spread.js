import { mean } from './central';

/**
 * Return the sum of the sqare deviations from the mean of a numeric data array.
 * The mean of the data array can be provided as an optional argument if previously computed.
 * If ommited, the mean is computed.
 * The function does not verify that the provided mean is accurate.
 * @param {Number[]} arr the data array
 * @param {Number} mu the mean of the data array
 * @returns {Number} the sum of the square deviations
 */
function squareDeviationSum(arr, mu) {
  if (!Array.isArray(arr) || arr.length === 0) return undefined;
  const m = Number.isFinite(mu) ? mu : mean(arr);
  if (m === undefined) return undefined;
  let sum = 0;
  for (let i = 0; i < arr.length; i += 1) {
    if (!Number.isFinite(arr[i])) return undefined;
    sum += (arr[i] - m) ** 2;
  }
  return sum;
}

/**
 * Return the population variance of a numeric data array.
 * The mean of the data array can be provided as an optional argument if previously computed.
 * If ommited, the mean is computed.
 * The function does not verify that the provided mean is accurate.
 * @param {Number[]} arr the data array
 * @param {Number} mu the mean of the data array
 * @returns {Number} the population variance of the data array
 */
export function pVariance(arr, mu) {
  const sum = squareDeviationSum(arr, mu);
  return sum === undefined ? sum : sum / arr.length;
}

/**
 * Return the population standard deviation of a numeric data array.
 * The mean of the data array can be provided as an optional argument if previously computed.
 * If ommited, the mean is computed.
 * The function does not verify that the provided mean is accurate.
 * @param {Number[]} arr the data array
 * @param {Number} mu the mean of the data array
 * @returns {Number} the population standard deviation of the data array
 */
export function pStdev(arr, mu) {
  const v = pVariance(arr, mu);
  return v === undefined ? v : Math.sqrt(v);
}

export default {
  pVariance,
  pStdev,
};
