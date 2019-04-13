import { mean } from './central';
import {
  variance,
  squareDeviationSum,
} from './spread';
import { covariance } from './similarity';
import { kahanSum } from './utils';

/**
 * Return the simple linear regression model between two variables,
 * one independent and one dependent.
 * The linear regression model is a linear function (straight line)
 * which predicts with the highest possible accuracy
 * the dependent variable as a function of the independent variable.
 * The method uses the least-squares approach, minimising the sum of squared residuals.
 * @param {Number[]} x the independent variable data array
 * @param {Number[]} y the dependent variable data array
 * @returns {Object} an object with the linear regression model { slope, y0, deltaSlope, deltaY0 }
 */
export function linReg(x, y) {
  const cov = covariance(x, y);
  const xVariance = variance(x);
  if (xVariance === undefined || cov === undefined) return undefined;
  const xBar = mean(x);
  const yBar = mean(y);
  const slope = cov / xVariance;
  const y0 = yBar - slope * xBar;
  let sumSquareError = 0;
  const n = x.length;
  for (let i = 0; i < n; i += 1) {
    sumSquareError += (y[i] - (slope * x[i] + y0)) ** 2;
  }
  const deltaSlope = Math.sqrt(sumSquareError / ((n - 2) * squareDeviationSum(x, xBar)));
  const sumSquareX = kahanSum(x.map(elt => (elt ** 2)));
  const deltaY0 = deltaSlope * Math.sqrt(sumSquareX / n);
  return {
    slope,
    y0,
    deltaSlope,
    deltaY0,
  };
}

export default {
  linReg,
};
