import getHexColor from './getHexColor';

export default function applyColorPicker(e) {
  const canvas = document.querySelector('.canvas');
  const context = canvas.getContext('2d');
  const primaryColor = document.querySelector('.primary-color');
  const secondaryColor = document.querySelector('.secondary-color');
  const mouseX = e.pageX - canvas.offsetLeft;
  const mouseY = e.pageY - canvas.offsetTop;
  const srcImg = context.getImageData(mouseX, mouseY, 1, 1);
  if (!srcImg.data[3]) {
    let canvasColor = getComputedStyle(canvas).backgroundColor;
    canvasColor = canvasColor.slice(4, -1).split(', ').map(el => +el);
    const hexColor = getHexColor(canvasColor);
    if (e.which === 1) { primaryColor.value = hexColor; return; }
    if (e.which === 3) { secondaryColor.value = hexColor; return; }
  }
  const srcData = srcImg.data.slice(0, -1);
  const hexColor = getHexColor(srcData);
  if (e.which === 1) { primaryColor.value = hexColor; return; }
  if (e.which === 3) secondaryColor.value = hexColor;
}
