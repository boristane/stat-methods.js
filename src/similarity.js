import { mean } from './central';
import { stdev } from './spread';

/**
 * Return the sample covariance between two numeric data arrays.
 * The covariance is a measure of the joint variability of two data arrays.
 * @param {Number[]} x the first data array
 * @param {Number[]} y the second data array
 * @returns {Number} the covariance between the two data arrays
 */
export function covariance(x, y) {
  const xBar = mean(x);
  const yBar = mean(y);
  if (!Number.isFinite(xBar) || !Number.isFinite(yBar)) return undefined;
  if (x.length !== y.length || x.length <= 1) return undefined;
  const arr = [];
  for (let i = 0; i < x.length; i += 1) {
    arr.push((x[i] - xBar) * (y[i] - yBar));
  }
  return arr.reduce((acc, current) => acc + current) / (x.length - 1);
}

/**
 * Return the sample correlation between two numeric data arrays.
 * The correlation is a measure of how close two datasets are to having a linear relationship.
 * The correlation is between -1 and 1.
 * @param {Number[]} x the first data array
 * @param {Number[]} y the second data array
 * @returns {Number} the correlation between the two data arrays
 */
export function correlation(x, y) {
  const cov = covariance(x, y);
  if (!Number.isFinite(cov)) return undefined;
  return cov / (stdev(x) * stdev(y));
}

export default {
  correlation,
  covariance,
};
