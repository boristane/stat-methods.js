import { testUndefinedWithNullable } from './utils';
import {
  linReg,
} from '../src/regression';

describe('Regressions', () => {
  test('Linear Regression', () => {
    expect(linReg([5, 12, 18, 23, 45], [2, 8, 18, 20, 28]))
      .toEqual({
        y0: 2.1880674448767827,
        slope: 0.6316472114137484,
        deltaY0: 3.3680036696904967,
        deltaSlope: 0.1364335975819171,
      });
    const x = [1.47, 1.50, 1.52, 1.55, 1.57, 1.60, 1.63, 1.65, 1.68, 1.70, 1.73, 1.75, 1.78, 1.80, 1.83];
    const y = [52.21, 53.12, 54.48, 55.84, 57.20, 58.57, 59.93, 61.29, 63.11, 64.47, 66.28, 68.10, 69.92, 72.19, 74.46]
    expect(linReg(x, y))
      .toEqual({
        y0: -39.06195591884396,
        slope: 61.27218654211063,
        deltaY0: 2.938001067183445,
        deltaSlope: 1.775922752215366,
      });
    expect(linReg([3, 2.5, 5.1, 5.75], ['a', 2.5, 'b', 5.75])).toBeUndefined();
    expect(linReg([NaN, 2.5, 3, 5.75], [3, 2.5, 5.1, 5.75])).toBeUndefined();
    expect(linReg([2, 1], [3, 2.5, 5.1, 5.75])).toBeUndefined();
    expect(linReg(3, [2, 2])).toBeUndefined();
    expect(linReg([3], [2])).toBeUndefined();
    testUndefinedWithNullable(linReg);
  });
});