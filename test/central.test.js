import{ testUndefinedWithNullable } from './utils';
import { mean } from '../src/central';
import { harmonicMean } from '../src/central';

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
});