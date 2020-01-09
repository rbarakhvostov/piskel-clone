import getHexColor from '../utilities/getHexColor';

describe('getHexColor', () => {
  test('get hex string', () => {
    const sample = [10, 135, 245];
    expect(getHexColor(sample)).toBe('#0a87f5');
  });
  test('get hex string', () => {
    const sample = [95, 121, 62];
    expect(getHexColor(sample)).toBe('#5f793e');
  });
});
