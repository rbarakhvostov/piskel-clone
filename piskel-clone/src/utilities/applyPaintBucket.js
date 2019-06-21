import frameMapping from './frameMapping';
import convertHexToRgb from './convertHexToRgb';

export default function applyPaintBucket() {
  const canvas = document.querySelector('.canvas');
  const context = canvas.getContext('2d');

  function getPixelPos(x, y) {
    return (y * canvas.width + x) * 4;
  }
  function matchStartColor(data, pos, startColor) {
    return (data[pos] === startColor.r
      && data[pos + 1] === startColor.g
      && data[pos + 2] === startColor.b
      && data[pos + 3] === startColor.a);
  }
  function colorPixel(data, pos, color) {
    const copyData = data;
    copyData[pos] = color.r || 0;
    copyData[pos + 1] = color.g || 0;
    copyData[pos + 2] = color.b || 0;
    // copyData[pos + 3] = color.a ? color.a : 255;
    copyData[pos + 3] = Object.prototype.hasOwnProperty.call(color, 'a') ? color.a : 255;
    // copyData[pos + 3] = Object.prototype.hasOwnProperty.call(color, 'a');
  }

  function floodFill(startX, startY, fillColor) {
    const srcImg = context.getImageData(0, 0, canvas.width, canvas.height);
    const srcData = srcImg.data;

    const startPos = getPixelPos(startX, startY);
    const startColor = {
      r: srcData[startPos],
      g: srcData[startPos + 1],
      b: srcData[startPos + 2],
      a: srcData[startPos + 3],
    };
    const pixelStack = [[startX, startY]];

    while (pixelStack.length) {
      const pos = pixelStack.pop();
      const x = pos[0];
      let y = pos[1];
      let currentPos = getPixelPos(x, y);

      while ((y >= 0) && matchStartColor(srcData, currentPos, startColor)) {
        currentPos -= canvas.width * 4;
        y -= 1;
      }

      currentPos += canvas.width * 4;
      y += 1;
      let reachLeft = false;
      let reachRight = false;
      while ((y < canvas.height - 1) && matchStartColor(srcData, currentPos, startColor)) {
        colorPixel(srcData, currentPos, fillColor);

        if (x > 0) {
          if (matchStartColor(srcData, currentPos - 4, startColor)) {
            if (!reachLeft) {
              pixelStack.push([x - 1, y]);
              reachLeft = true;
            }
          } else if (reachLeft) {
            reachLeft = false;
          }
        }
        if (x < canvas.width - 1) {
          if (matchStartColor(srcData, currentPos + 4, startColor)) {
            if (!reachRight) {
              pixelStack.push([x + 1, y]);
              reachRight = true;
            }
          } else if (reachRight) {
            reachRight = false;
          }
        }

        currentPos += canvas.width * 4;
        y += 1;
      }
    }

    context.putImageData(srcImg, 0, 0);
  }

  function startPaintBucket(e) {
    const primaryColor = document.querySelector('.primary-color');
    const secondaryColor = document.querySelector('.secondary-color');
    let selectedColor;
    if (e.which === 1) selectedColor = primaryColor.value;
    if (e.which === 3) selectedColor = secondaryColor.value;
    const startX = e.pageX - canvas.offsetLeft;
    const startY = e.pageY - canvas.offsetTop;
    floodFill(startX, startY, convertHexToRgb(selectedColor));
    frameMapping();
  }
  canvas.addEventListener('click', startPaintBucket);
  canvas.addEventListener('contextmenu', startPaintBucket);
}
