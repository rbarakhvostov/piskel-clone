import convertHexToRgb from '../utilities/convertHexToRgb';

describe('convertHexToRgb', () => {
  test('get rgb object', () => {
    const hexColor = '#4287f5';
    expect(convertHexToRgb(hexColor)).toEqual({ r: 66, g: 135, b: 245 });
  });
  test('get rgb object', () => {
    const hexColor = '#5f793e';
    expect(convertHexToRgb(hexColor)).toEqual({ r: 95, g: 121, b: 62 });
  });
});
