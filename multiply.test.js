const multiply = require('./multiply');

describe('multiply ', () => {
  it('adds 1 * 2 to equal 2', () => {
    expect(multiply(1, 2)).toBe(2);
  });

  it('adds 3 * 4 to equal 12', () => {
    expect(multiply(3, 4)).toBe(12);
  });

  it('adds 3 * 5 to equal 15', () => {
    expect(multiply(3, 5)).toBe(15);
  });
});