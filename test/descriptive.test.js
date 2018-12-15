import{ testUndefinedWithNullable } from './utils';
import {
  min,
  max,
} from '../src/descriptive';

describe('Descriptive Statistics', () => {
  test('Minimum', () => {
    expect(min([1, 1, 2, 3, 4, 4])).toBe(1);
    expect(min([2.5, 3.25, -2, 5.75])).toBe(-2);
    expect(min(['a', 2.5, 'b', 5.75])).toBeUndefined();
    expect(min([NaN, 2.5, 3, 5.75])).toBeUndefined();
    expect(min([])).toBeUndefined();
    expect(min(3)).toBeUndefined();
    expect(min([3])).toBe(3);
    expect(min([3, 2.5, 200, 5.75])).toBe(2.5);
    testUndefinedWithNullable(min);
  });

  test('Maximum', () => {
    expect(max([1, 2, 3, 4, 4])).toBe(4);
    expect(max([2.5, 3.25, -2, 5.75])).toBe(5.75);
    expect(max(['a', 2.5, 'b', 5.75])).toBeUndefined();
    expect(max([NaN, 2.5, 3, 5.75])).toBeUndefined();
    expect(max([])).toBeUndefined();
    expect(max(3)).toBeUndefined();
    expect(max([3])).toBe(3);
    expect(max([3, 2.5, 200, 5.75])).toBe(200);
    testUndefinedWithNullable(max);
  });
});
