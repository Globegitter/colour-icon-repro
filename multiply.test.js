const sum = require('./multiply');

test('adds 1 * 2 to equal 2', () => {
  expect(multiply(1, 2)).toBe(2);
});

test('adds 3 * 4 to equal 12', () => {
  expect(multiply(3, 4)).toBe(12);
});
