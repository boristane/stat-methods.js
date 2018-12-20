import { testUndefinedWithNullable } from './utils';
import {
  min,
  max,
  product,
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

  test('Product', () => {
    expect(product([1,2,3,4,5])).toBe(120);
    expect(product([2.5, 3.25, 2, 5.75])).toBe(93.4375);
    expect(product([NaN, 2, 3, 4])).toBeUndefined();
    expect(product([])).toBeUndefined();
    expect(product(['a', 2, 3, 4])).toBeUndefined();
    expect(product(["hello", 3, 4, 5])).toBeUndefined();
    expect(product(3)).toBeUndefined();
    expect(product([3])).toBe(3);
    expect(product([5, 8, 1.2, 0])).toBe(0);
    expect(product([5, 8, 1.2, null])).toBeUndefined();
    testUndefinedWithNullable(product);
  });

});
