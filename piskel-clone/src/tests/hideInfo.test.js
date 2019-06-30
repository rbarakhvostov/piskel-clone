import hideInfo from '../utilities/hideInfo';

describe('hideInfo', () => {
  test('hide info', () => {
    document.body.innerHTML = '<div><span id="info">info</span></div>';
    const info = document.getElementById('info');
    hideInfo(info)();
    expect(info.style.display).toBe('none');
  });
});
