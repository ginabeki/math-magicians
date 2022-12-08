import operate from '../logic/operate';

describe('Testing if all operations run successfully on operate.js file', () => {
  test('Test add function', () => {
    expect(operate(8, 3, '+')).toBe('11');
  });
  test('Test subtract function', () => {
    expect(operate(20, 10, '-')).toBe('10');
  });
  test('Test multiply function', () => {
    expect(operate(20, 3, 'x')).toBe('60');
  });
  test('Test division function', () => {
    expect(operate(18, 6, '÷')).toBe('3');
  });
  test('Test modulo function', () => {
    expect(operate(7, 3, '%')).toBe('1');
  });
});
