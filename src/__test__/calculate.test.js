import calculate from '../logic/calculate';

describe('Testing calculator data object in calculate.js file', () => {
  test('Test for AC button', () => {
    const data = {
      total: null,
      next: null,
      operation: null,
    };
    expect(calculate(data, 'AC')).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });
  test('Test for = button', () => {
    const data = {
      total: '20',
      next: '30',
      operation: '+',
    };
    expect(calculate(data, '=')).toEqual({
      total: '50',
      next: null,
      operation: null,
    });
  });

  test('Test for . button', () => {
    const data = {
      total: null,
      next: '6',
      operation: null,
    };
    expect(calculate(data, '.')).toEqual({
      total: null,
      next: '6.',
      operation: null,
    });
  });
});
