import{ testUndefinedWithNullable } from './utils';
import {
  pVariance,
} from '../src/spread';

describe('Measures of spread', () => {
  test('Population Variance', () => {
    expect(pVariance([0.0, 0.25, 0.25, 1.25, 1.5, 1.75, 2.75, 3.25])).toBe(1.25);
    expect(pVariance([1, 2, 3, 4, 5], 3)).toBe(2);
    expect(pVariance(['a', 2.5, 'b', 5.75])).toBeUndefined();
    expect(pVariance([NaN, 2.5, 3, 5.75])).toBeUndefined();
    expect(pVariance([])).toBeUndefined();
    expect(pVariance(3)).toBeUndefined();
    expect(pVariance([3])).toBe(0)
    testUndefinedWithNullable(pVariance);
  });
});
