export function testUndefinedWithNullable(func) {
  expect(func(null)).toBeUndefined();
  expect(func(undefined)).toBeUndefined();
  expect(func()).toBeUndefined();
}
