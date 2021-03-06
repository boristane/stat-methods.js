import { testUndefinedWithNullable } from './utils';
import {
  getAllIndexes,
  nthRoot,
  kahanSum,
  nthMomentAboutMean,
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

  test('Kahan Sum', () => {
    expect(kahanSum([1, 2, 3, 4])).toBe(10);
    expect(
      kahanSum([
        0.1,
        0.2,
        0.3,
        0.4,
        0.5,
        0.6,
        0.7,
        0.8,
        0.9,
        1.0,
        1.1,
        1.2,
        1.3,
        1.4,
        1.5,
        1.6,
        1.7,
      ]),
    ).toBe(15.3);
    expect(kahanSum([NaN, 2, 3, 4])).toBeUndefined();
    expect(kahanSum(['a', 2, 3, 4])).toBeUndefined();
    expect(kahanSum(['hello', 3, 4, 5])).toBeUndefined();
    expect(kahanSum([3])).toBe(3);
    expect(kahanSum([5, 8, 1.2, null])).toBeUndefined();
  });

  test('nth moment about the mean', () => {
    expect(
      nthMomentAboutMean(
        [0, 3, 4, 1, 2, 3, 0, 2, 1, 3, 2, 0, 2, 2, 3, 2, 5, 2, 3, 999],
        2,
      ),
    ).toBe(47207.0475);
    expect(nthMomentAboutMean([NaN, 2, 3, 4])).toBeUndefined();
    expect(nthMomentAboutMean(['a', 2, 3, 4])).toBeUndefined();
    expect(nthMomentAboutMean(['hello', 3, 4, 5])).toBeUndefined();
    expect(nthMomentAboutMean([3], 2)).toBe(0);
    expect(nthMomentAboutMean([5, 8, 1.2, null])).toBeUndefined();
  });
});
