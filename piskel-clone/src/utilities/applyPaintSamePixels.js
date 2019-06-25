import convertHexToRgb from './convertHexToRgb';
import frameMapping from './frameMapping';

export default function applyPaintSamePixels(e) {
  const primaryColor = document.querySelector('.primary-color');
  const secondaryColor = document.querySelector('.secondary-color');
  let selectedColor;
  const canvas = document.querySelector('.canvas');
  const context = canvas.getContext('2d');
  const mouseX = e.pageX - canvas.offsetLeft;
  const mouseY = e.pageY - canvas.offsetTop;
  const sampleSrcImg = context.getImageData(mouseX, mouseY, 1, 1);
  const sampleData = sampleSrcImg.data;
  const srcImg = context.getImageData(0, 0, canvas.width, canvas.height);
  const { data } = srcImg;
  if (!sampleData[3]) return;
  if (e.which === 1) selectedColor = primaryColor.value;
  if (e.which === 3) selectedColor = secondaryColor.value;
  const colors = convertHexToRgb(selectedColor);
  for (let i = 0, l = data.length; i < l; i += 4) {
    if (data[i] === sampleData[0]
        && data[i + 1] === sampleData[1]
        && data[i + 2] === sampleData[2]) {
      data[i] = colors.r;
      data[i + 1] = colors.g;
      data[i + 2] = colors.b;
    }
  }
  context.putImageData(srcImg, 0, 0);
  frameMapping();
}
