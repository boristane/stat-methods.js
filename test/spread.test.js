import { testUndefinedWithNullable } from './utils';
import { pVariance, pStdev, variance, stdev, range, mad } from '../src/spread';

describe('Measures of spread', () => {
  test('Population Variance', () => {
    expect(pVariance([0.0, 0.25, 0.25, 1.25, 1.5, 1.75, 2.75, 3.25])).toBe(
      1.25,
    );
    expect(pVariance([1, 2, 3, 4, 5], 3)).toBe(2);
    expect(pVariance(['a', 2.5, 'b', 5.75])).toBeUndefined();
    expect(pVariance([NaN, 2.5, 3, 5.75])).toBeUndefined();
    expect(pVariance([])).toBeUndefined();
    expect(pVariance(3)).toBeUndefined();
    expect(pVariance([3])).toBe(0);
    testUndefinedWithNullable(pVariance);
  });

  test('Population Standard Deviation', () => {
    expect(pStdev([1.5, 2.5, 2.5, 2.75, 3.25, 4.75])).toBe(0.986893273527251);
    expect(pStdev([1, 2, 3, 4, 5], 3)).toBe(1.4142135623730951);
    expect(pStdev(['a', 2.5, 'b', 5.75])).toBeUndefined();
    expect(pStdev([NaN, 2.5, 3, 5.75])).toBeUndefined();
    expect(pStdev([])).toBeUndefined();
    expect(pStdev(3)).toBeUndefined();
    expect(pStdev([3])).toBe(0);
    testUndefinedWithNullable(pStdev);
  });

  test('Sample Variance', () => {
    expect(variance([2.75, 1.75, 1.25, 0.25, 0.5, 1.25, 3.5])).toBe(
      1.3720238095238095,
    );
    expect(variance([0.0, 0.25, 0.25, 1.25, 1.5, 1.75, 2.75, 3.25])).toBe(
      1.4285714285714286,
    );
    expect(variance([1, 2, 3, 4, 5], 3)).toBe(2.5);
    expect(variance(['a', 2.5, 'b', 5.75])).toBeUndefined();
    expect(variance([NaN, 2.5, 3, 5.75])).toBeUndefined();
    expect(variance([])).toBeUndefined();
    expect(variance(3)).toBeUndefined();
    expect(variance([3])).toBeUndefined();
    testUndefinedWithNullable(variance);
  });

  test('Sample Standard Deviation', () => {
    expect(stdev([1.5, 2.5, 2.5, 2.75, 3.25, 4.75])).toBe(1.0810874155219827);
    expect(stdev([1, 2, 3, 4, 5], 3)).toBe(1.5811388300841898);
    expect(stdev(['a', 2.5, 'b', 5.75])).toBeUndefined();
    expect(stdev([NaN, 2.5, 3, 5.75])).toBeUndefined();
    expect(stdev([])).toBeUndefined();
    expect(stdev(3)).toBeUndefined();
    expect(stdev([3])).toBeUndefined();
    testUndefinedWithNullable(stdev);
  });

  test('Range', () => {
    expect(range([1.5, 2.5, 2.5, 2.75, 3.25, 4.75])).toBe(3.25);
    expect(range([89, 73, 84, 91, 87, 77, 94])).toBe(21);
    expect(range([3])).toBe(0);
    expect(range(['a', 2.5, 'b', 5.75])).toBeUndefined();
    expect(range([NaN, 2.5, 3, 5.75])).toBeUndefined();
    expect(range([])).toBeUndefined();
    expect(range(3)).toBeUndefined();
    testUndefinedWithNullable(range);
  });

  test('Median absolute deviation', () => {
    expect(mad([1, 1, 2, 2, 4, 6, 9])).toBe(1);
    expect(mad([3, 8, 8, 8, 8, 9, 9, 9, 9])).toBe(1);
    expect(mad([3])).toBe(0);
    expect(mad(['a', 2.5, 'b', 5.75])).toBeUndefined();
    expect(mad([NaN, 2.5, 3, 5.75])).toBeUndefined();
    expect(mad([])).toBeUndefined();
    expect(mad(3)).toBeUndefined();
    testUndefinedWithNullable(mad);
  });
});
