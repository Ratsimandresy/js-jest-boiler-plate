import stub from '../src/index';

describe('test description', () => {
  test('should return true', () => {
    expect(true).toBe(true);
  });

  test('should return working', () => {
    expect(stub()).toBe('working');
  });
});
