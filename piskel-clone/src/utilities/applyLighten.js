import frameMapping from './frameMapping';

export default function applyLighten() {
  const canvas = document.querySelector('.canvas');
  const context = canvas.getContext('2d');
  const toolSize = document.querySelector('.tool-sizes');
  const unitsNumber = toolSize.elements['tool-size'].value;
  const pixelSize = canvas.width / unitsNumber;
  let lighten;
  function draw(x, y) {
    context.globalCompositeOperation = 'lighter';
    context.fillStyle = 'rgba(255,255,255,0.1)';
    context.fillRect(x, y, pixelSize, pixelSize);
  }
  function mousedownHandler(e) {
    const mouseX = Math.floor((e.pageX - canvas.offsetLeft) / pixelSize) * pixelSize;
    const mouseY = Math.floor((e.pageY - canvas.offsetTop) / pixelSize) * pixelSize;
    lighten = true;
    const srcImg = context.getImageData(mouseX, mouseY, 1, 1);
    if (!srcImg.data[3]) return;
    draw(mouseX, mouseY);
  }
  function mousemoveHandler(e) {
    if (lighten) {
      const mouseX = Math.floor((e.pageX - canvas.offsetLeft) / pixelSize) * pixelSize;
      const mouseY = Math.floor((e.pageY - canvas.offsetTop) / pixelSize) * pixelSize;
      const srcImg = context.getImageData(mouseX, mouseY, 1, 1);
      if (!srcImg.data[3]) return;
      draw(mouseX, mouseY);
    }
  }
  function mouseupHandler() {
    lighten = false;
    frameMapping();
  }
  canvas.addEventListener('mousedown', mousedownHandler);
  canvas.addEventListener('mousemove', mousemoveHandler);
  canvas.addEventListener('mouseup', mouseupHandler);
}
