import { testUndefinedWithNullable } from './utils';
import {
  mean,
  harmonicMean,
  geometricMean,
  median,
  medianLow,
  medianHigh,
  medianGrouped,
  midRange,
  mode,
  quartiles,
  rms,
  percentile,
  kurtosis,
} from '../src/central';

describe('Averages and measures of central location', () => {
  test('Mean', () => {
    expect(mean([1, 2, 3, 4, 4])).toBe(2.8);
    expect(mean([-1.0, 2.5, 3.25, 5.75])).toBe(2.625);
    expect(mean(['a', 2.5, 'b', 5.75])).toBeUndefined();
    expect(mean([NaN, 2.5, 3, 5.75])).toBeUndefined();
    expect(mean([])).toBeUndefined();
    expect(mean(3)).toBeUndefined();
    expect(mean([3])).toBe(3);
    expect(mean([3, 2.5, 200, 5.75])).toBe(52.8125);
    testUndefinedWithNullable(mean);
  });

  test('Harmonic mean', () => {
    expect(harmonicMean([2.5, 3, 10]) * 10).toBe(36);
    expect(harmonicMean([1.1, 1.4, 3.5, 9.5])).toBe(1.9857482185273159);
    expect(harmonicMean([2.5, 0, 10])).toBeUndefined();
    expect(harmonicMean(['a', 2.5, 'b', 5.75])).toBeUndefined();
    expect(harmonicMean([NaN, 2.5, 3, 5.75])).toBeUndefined();
    expect(harmonicMean([])).toBeUndefined();
    expect(harmonicMean(3)).toBeUndefined();
    expect(harmonicMean([3])).toBe(3);
    testUndefinedWithNullable(harmonicMean);
  });

  test('Geometric mean', () => {
    expect(geometricMean([1, 2, 4])).toBe(2);
    expect(geometricMean([4, 1, 1 / 32])).toBe(0.5);
    expect(geometricMean([1.1, 1.4, 3.5, 9.5])).toBe(2.6750265241846307);
    expect(geometricMean([2.5, 0, 10])).toBe(0);
    expect(geometricMean([-1, 2, 4])).toBe(-2);
    expect(geometricMean([-1, 2, 4, 2])).toBeUndefined();
    expect(geometricMean(['a', 2.5, 'b', 5.75])).toBeUndefined();
    expect(geometricMean([NaN, 2.5, 3, 5.75])).toBeUndefined();
    expect(geometricMean([])).toBeUndefined();
    expect(geometricMean(3)).toBeUndefined();
    expect(geometricMean([3])).toBe(3);
    testUndefinedWithNullable(geometricMean);
  });

  test('Median', () => {
    expect(median([1, 12, 3, 15, 6, 8, 9])).toBe(8);
    expect(median([1, -2, 3, 4, 8, 6, 5, 9])).toBe(4.5);
    expect(median([1, 2, 3, 4, 5])).toBe(3);
    expect(median([1, 2, 3, 4, 5, 6])).toBe(3.5);
    expect(median(['a', 2.5, 'b', 5.75])).toBeUndefined();
    expect(median([NaN, 2.5, 3, 5.75])).toBeUndefined();
    expect(median([])).toBeUndefined();
    expect(median(3)).toBeUndefined();
    expect(median([3])).toBe(3);
    testUndefinedWithNullable(median);
  });

  test('Median Low', () => {
    expect(medianLow([1, 12, 3, 15, 6, 8, 9])).toBe(8);
    expect(medianLow([1, -2, 3, 4, 8, 6, 5, 9])).toBe(4);
    expect(medianLow([1, 2, 3, 4, 5])).toBe(3);
    expect(medianLow([1, 2, 3, 4, 5, 6])).toBe(3);
    expect(
      medianLow(
        ['a', 'c', 'b', 'd'],
        (a, b) => a.charCodeAt(0) - b.charCodeAt(0),
      ),
    ).toBe('b');
    expect(medianLow([])).toBeUndefined();
    expect(medianLow(3)).toBeUndefined();
    expect(medianLow([3])).toBe(3);
    testUndefinedWithNullable(medianLow);
  });

  test('Median High', () => {
    expect(medianHigh([1, 12, 3, 15, 6, 8, 9])).toBe(8);
    expect(medianHigh([1, -2, 3, 4, 8, 6, 5, 9])).toBe(5);
    expect(medianHigh([1, 2, 3, 4, 5])).toBe(3);
    expect(medianHigh([1, 2, 3, 4, 5, 6])).toBe(4);
    expect(
      medianHigh(
        ['a', 'c', 'b', 'd'],
        (a, b) => a.charCodeAt(0) - b.charCodeAt(0),
      ),
    ).toBe('c');
    expect(medianHigh([])).toBeUndefined();
    expect(medianHigh(3)).toBeUndefined();
    expect(medianHigh([3])).toBe(3);
    testUndefinedWithNullable(medianHigh);
  });

  test('Median Grouped', () => {
    expect(medianGrouped([52, 52, 53, 54])).toBe(52.5);
    expect(medianGrouped([1, 2, 2, 3, 4, 4, 4, 4, 4, 5])).toBe(3.7);
    expect(
      medianGrouped(
        [
          59,
          65,
          61,
          62,
          53,
          55,
          60,
          70,
          64,
          56,
          58,
          58,
          62,
          62,
          68,
          65,
          56,
          59,
          68,
          61,
          67,
        ],
        5,
      ),
    ).toBe(61.4375);
    expect(medianGrouped([1, 3, 3, 5, 7])).toBe(3.25);
    expect(medianGrouped([1, 3, 3, 5, 7], 2)).toBe(3.5);
    expect(medianGrouped(['a', 2.5, 'b', 5.75])).toBeUndefined();
    expect(medianGrouped([NaN, 2.5, 3, 5.75])).toBeUndefined();
    expect(medianGrouped([])).toBeUndefined();
    expect(medianGrouped(3)).toBeUndefined();
    expect(medianGrouped([3])).toEqual(3);
    testUndefinedWithNullable(medianGrouped);
  });

  test('Mid-range', () => {
    expect(midRange([1, 12, 3, 15, 6, 8, 9])).toBe(8);
    expect(midRange([1, -2, 3, 4, 8, 6, 5, 9])).toBe(3.5);
    expect(midRange([1, 2, 3, 4, 5, 6, -1])).toBe(2.5);
    expect(midRange([1, 2, 3, 4, 5, 6, 'xyz'])).toBeUndefined();
    expect(midRange([1, 2, NaN, 4, 5, 6])).toBeUndefined();
    expect(midRange([1, 2, 3, 4, 5, 6, 7, 7, 7.12, 7, 0.12])).toBe(3.62);
    expect(midRange(['a', 'c', 'b', 'd'])).toBeUndefined();
    expect(midRange([])).toBeUndefined();
    expect(midRange(3)).toBeUndefined();
    expect(midRange([30])).toBe(30);
    testUndefinedWithNullable(midRange);
  });

  test('Mode', () => {
    expect(mode([1, 2, 3, 3, 4, 4])).toEqual([3, 4]);
    expect(mode([1, 1, 2])).toEqual([1]);
    expect(mode(['a', 'c', 'b', 'd', 'c'])).toEqual(['c']);
    expect(mode(['a', 2.5, 'b', 5.75])).toEqual(['a', 2.5, 'b', 5.75]);
    expect(mode([NaN, 2.5, 2.5, 5.75])).toEqual([2.5]);
    expect(mode([])).toBeUndefined();
    expect(mode(3)).toBeUndefined();
    expect(mode([3])).toEqual([3]);
    testUndefinedWithNullable(mode);
  });

  test('Quartiles', () => {
    expect(quartiles([6, 7, 15, 36, 39, 40, 41, 42, 43, 47, 49])).toEqual([
      15,
      40,
      43,
    ]);
    expect(quartiles([7, 15, 36, 39, 40, 41])).toEqual([15, 37.5, 40]);
    expect(quartiles([2, 2, 3, 4])).toEqual([2, 2.5, 3.5]);
    expect(quartiles(['a', 2.5, 'b', 5.75, 5])).toBeUndefined();
    expect(quartiles([NaN, 2.5, 3, 5.75, 12])).toBeUndefined();
    expect(quartiles([])).toBeUndefined();
    expect(quartiles(3)).toBeUndefined();
    expect(quartiles([3])).toBeUndefined();
    expect(quartiles([2, 3])).toBeUndefined();
    expect(quartiles([3, 4, 5])).toBeUndefined();
    testUndefinedWithNullable(quartiles);
  });

  test('Root Mean Square (rms)', () => {
    expect(rms([1, 2, 1, 3])).toBe(1.9364916731037085);
    expect(rms([4, 1, 1, 3])).toBe(2.598076211353316);
    expect(rms(['a', 2.5, 'b', 5.75, 5])).toBeUndefined();
    expect(rms([NaN, 2.5, 3, 5.75, 12])).toBeUndefined();
    expect(rms([])).toBeUndefined();
    expect(rms(3)).toBeUndefined();
    expect(rms([3])).toBe(3);
    testUndefinedWithNullable(rms);
  });

  test('Percentile', () => {
    let arr = [13, 20, 8, 8, 7, 10, 3, 15, 16, 6];
    expect(percentile(arr, 0.25)).toBe(7);
    expect(percentile(arr, 0.5)).toBe(8);
    expect(percentile(arr, 0.75)).toBe(15);
    expect(percentile(arr, 1.0)).toBe(20);
    expect(percentile(arr, -0.5)).toBeUndefined();
    expect(percentile(arr, 1.2)).toBeUndefined();
    expect(percentile(arr)).toBeUndefined();

    arr = [15, 20, 35, 40, 50];
    expect(percentile(arr, 0.05)).toBe(15);
    expect(percentile(arr, 0.3)).toBe(20);
    expect(percentile(arr, 0.4)).toBe(20);
    expect(percentile(arr, 0.5)).toBe(35);
    expect(percentile(arr, 1.0)).toBe(50);

    arr = [3, 6, 7, 8, 8, 9, 10, 13, 15, 16, 20];
    expect(percentile(arr, 0.25)).toBe(7);
    expect(percentile(arr, 0.5)).toBe(9);
    expect(percentile(arr, 0.75)).toBe(15);
    expect(percentile(arr, 1.0)).toBe(20);

    expect(percentile(['a', 2.5, 'b', 5.75, 5], 0.25)).toBeUndefined();
    expect(percentile([NaN, 2.5, 3, 5.75, 12], 0.5)).toBeUndefined();
    expect(percentile([], 0.2)).toBeUndefined();
    expect(percentile(3, 0.5)).toBeUndefined();
    expect(percentile([3], 0.5)).toBe(3);
    testUndefinedWithNullable(percentile);
  });

  test('Kurtosis', () => {
    const arr = [0, 3, 4, 1, 2, 3, 0, 2, 1, 3, 2, 0, 2, 2, 3, 2, 5, 2, 3, 999];
    expect(kurtosis(arr).toFixed(2)).toEqual('15.05');
    expect(kurtosis(['a', 2.5, 'b', 5.75, 5])).toBeUndefined();
    expect(kurtosis([NaN, 2.5, 3, 5.75, 12])).toBeUndefined();
    expect(kurtosis([])).toBeUndefined();
    expect(kurtosis(3)).toBeUndefined();
    expect(Number.isNaN(kurtosis([3]))).toBeTruthy();
    testUndefinedWithNullable(kurtosis);
  });
});
