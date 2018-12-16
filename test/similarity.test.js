import{ testUndefinedWithNullable } from './utils';
import { covariance,
        correlation,
       } from '../src/similarity';

describe('Measures of Similarity', () => {
  test('Covariance', () => {
    expect(covariance([5, 12, 18, 23, 45], [2, 8, 18, 20, 28])).toBe(146.1);
    expect(covariance([1, 2, 3, 4, 5, 6], [6, 5, 4, 3, 2, 1])).toBe(-3.5);
    expect(covariance([3, 2.5, 5.1, 5.75], ['a', 2.5, 'b', 5.75])).toBeUndefined();
    expect(covariance([NaN, 2.5, 3, 5.75], [3, 2.5, 5.1, 5.75])).toBeUndefined();
    expect(covariance([2, 1], [3, 2.5, 5.1, 5.75])).toBeUndefined();
    expect(covariance(3, [2, 2])).toBeUndefined();
    expect(covariance([3], [2])).toBeUndefined();
    testUndefinedWithNullable(covariance);
  });
  test('Correlation', () => {
    expect(correlation([1, 2, 3, 5], [1, 3, 8, 10])).toBe(0.9519450934357727);
    expect(correlation([1, 2, 3, 4, 5, 6], [2, 2, 3, 4, 5, 60])).toBe(0.6906626864601292);
    expect(correlation([3, 2.5, 5.1, 5.75], ['a', 2.5, 'b', 5.75])).toBeUndefined();
    expect(correlation([NaN, 2.5, 3, 5.75], [3, 2.5, 5.1, 5.75])).toBeUndefined();
    expect(correlation([2, 1], [3, 2.5, 5.1, 5.75])).toBeUndefined();
    expect(correlation(3, [2, 2])).toBeUndefined();
    expect(correlation([3], [2])).toBeUndefined();
    testUndefinedWithNullable(correlation);
  });
});
