import noop from '../src/noop-x';

describe('noop', function() {
  it('is a function', function() {
    expect.assertions(1);
    expect(typeof noop).toBe('function');
  });

  it('should return undefined', function() {
    expect.assertions(1);
    expect(noop()).toBeUndefined();
  });
});
