import{ testUndefinedWithNullable } from './utils';
import { mean,
        harmonicMean,
        median,
        medianLow,
        medianHigh,
        mode,
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
    expect(mean([3, 2.5, 2e2, 5.75])).toBe(52.8125);
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
    expect(harmonicMean([3])).toBe(3)
    testUndefinedWithNullable(harmonicMean);
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
    expect(median([3])).toBe(3)
    testUndefinedWithNullable(median);
  });

  test('Median Low', () => {
    expect(medianLow([1, 12, 3, 15, 6, 8, 9])).toBe(8);
    expect(medianLow([1, -2, 3, 4, 8, 6, 5, 9])).toBe(4);
    expect(medianLow([1, 2, 3, 4, 5])).toBe(3);
    expect(medianLow([1, 2, 3, 4, 5, 6])).toBe(3);
    expect(medianLow(['a', 'c', 'b', 'd'], (a, b) => a.charCodeAt(0) - b.charCodeAt(0))).toBe('b');
    expect(medianLow([])).toBeUndefined();
    expect(medianLow(3)).toBeUndefined();
    expect(medianLow([3])).toBe(3)
    testUndefinedWithNullable(medianLow);
  });

  test('Median High', () => {
    expect(medianHigh([1, 12, 3, 15, 6, 8, 9])).toBe(8);
    expect(medianHigh([1, -2, 3, 4, 8, 6, 5, 9])).toBe(5);
    expect(medianHigh([1, 2, 3, 4, 5])).toBe(3);
    expect(medianHigh([1, 2, 3, 4, 5, 6])).toBe(4);
    expect(medianHigh(['a', 'c', 'b', 'd'], (a, b) => a.charCodeAt(0) - b.charCodeAt(0))).toBe('c');
    expect(medianHigh([])).toBeUndefined();
    expect(medianHigh(3)).toBeUndefined();
    expect(medianHigh([3])).toBe(3)
    testUndefinedWithNullable(medianHigh);
  });

  test('Mode', () => {
    expect(mode([1, 2, 3, 3, 4, 4])).toEqual([3, 4]);
    expect(mode([1, 1, 2])).toEqual([1]);
    expect(mode(['a', 'c', 'b', 'd', 'c'])).toEqual(['c']);
    expect(mode([])).toBeUndefined();
    expect(mode(3)).toBeUndefined();
    expect(mode([3])).toEqual([3])
    testUndefinedWithNullable(mode);
  });
});