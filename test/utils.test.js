import { testUndefinedWithNullable } from './utils';
import {
  getAllIndexes,
  nthRoot,
} from '../src/utils';

describe('Descriptive Statistics', () => {
  test('Get all indexes', () => {
    expect(getAllIndexes([1, 1, 2, 3, 4, 4], 1)).toEqual([0, 1]);
    expect(getAllIndexes([1, 1, 2, 3, 4, 4], 5)).toEqual([]);
    expect(getAllIndexes([2.5, -2.5, 2.5, 5.75], 2.5)).toEqual([0, 2]);
    expect(getAllIndexes(['a', 2.5, 'b', 5.75], 'b')).toEqual([2]);
    expect(getAllIndexes([1, 2.5, undefined, 5.75], undefined)).toEqual([2]);
    expect(getAllIndexes([6, null, 3, 5.75], null)).toEqual([1]);
    expect(getAllIndexes([], 2)).toEqual([]);
    expect(getAllIndexes([3])).toEqual([]);
    expect(getAllIndexes(4)).toBeUndefined();
    testUndefinedWithNullable(getAllIndexes);
  });

  test('Nth root', () => {
    expect(nthRoot(4, 2)).toBe(2);
    expect(nthRoot(8, 3)).toBe(2);
    expect(nthRoot(2, 0.5)).toBe(4);
    expect(nthRoot(0.25, -2)).toBe(2);
    expect(nthRoot(-8, 3)).toBe(-2);
    expect(nthRoot(-16, 4)).toBeUndefined();
    expect(nthRoot(Infinity, 2)).toBeUndefined();
    expect(nthRoot(2, Infinity)).toBeUndefined();
    expect(nthRoot(NaN, 2)).toBeUndefined();
    expect(nthRoot(2, undefined)).toBeUndefined();
    testUndefinedWithNullable(nthRoot);
  });

});
