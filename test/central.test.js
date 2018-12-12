import{ testUndefinedWithNullable } from './utils';
import { mean } from '../src/central';

describe('Averages and measures of central location', () => {
  test('Mean', () => {
    expect(mean([1, 2, 3, 4, 4])).toBe(2.8);
    expect(mean([-1.0, 2.5, 3.25, 5.75])).toBe(2.625);
    expect(mean(['a', 2.5, 'b', 5.75])).toBeUndefined();
    expect(mean([NaN, 2.5, 'b', 5.75])).toBeUndefined();
    expect(mean([])).toBeUndefined();
    expect(mean(3)).toBeUndefined();
    expect(mean([3])).toBe(3);
    expect(mean([3, 2.5, 2e2, 5.75])).toBe(52.8125);
    testUndefinedWithNullable(mean);
  });
});