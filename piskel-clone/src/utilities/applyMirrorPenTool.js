import frameMapping from './frameMapping';

export default function applyMirrorPenTool() {
  const canvas = document.querySelector('.canvas');
  const context = canvas.getContext('2d');
  const toolSize = document.querySelector('.tool-sizes');
  const unitsNumber = toolSize.elements['tool-size'].value;
  const pixelSize = canvas.width / unitsNumber;
  let paint;
  function draw(x, y, button, shiftKey, ctrlKey) {
    const primaryColor = document.querySelector('.primary-color');
    const secondaryColor = document.querySelector('.secondary-color');
    if (button === 1) context.fillStyle = primaryColor.value;
    if (button === 3) context.fillStyle = secondaryColor.value;
    if (shiftKey) {
      context.fillRect(x, y, pixelSize, pixelSize);
      context.fillRect(x, canvas.height - y - pixelSize, pixelSize, pixelSize);
      context.fillRect(canvas.width - x - pixelSize, y, pixelSize, pixelSize);
      context.fillRect(canvas.width - x - pixelSize, canvas.height - y - pixelSize,
        pixelSize, pixelSize);
      return;
    }
    if (ctrlKey) {
      context.fillRect(x, y, pixelSize, pixelSize);
      context.fillRect(x, canvas.height - y - pixelSize, pixelSize, pixelSize);
      return;
    }
    context.fillRect(x, y, pixelSize, pixelSize);
    context.fillRect(canvas.width - x - pixelSize, y, pixelSize, pixelSize);
  }
  function mousedownHandler(e) {
    const mouseX = Math.floor((e.pageX - canvas.offsetLeft) / pixelSize) * pixelSize;
    const mouseY = Math.floor((e.pageY - canvas.offsetTop) / pixelSize) * pixelSize;
    paint = true;
    draw(mouseX, mouseY, e.which, e.shiftKey, e.ctrlKey);
  }
  function mousemoveHandler(e) {
    if (paint) {
      const mouseX = Math.floor((e.pageX - canvas.offsetLeft) / pixelSize) * pixelSize;
      const mouseY = Math.floor((e.pageY - canvas.offsetTop) / pixelSize) * pixelSize;
      draw(mouseX, mouseY, e.which, e.shiftKey, e.ctrlKey);
    }
  }
  function mouseupHandler() {
    paint = false;
    frameMapping();
  }
  canvas.addEventListener('mousedown', mousedownHandler);
  canvas.addEventListener('mousemove', mousemoveHandler);
  canvas.addEventListener('mouseup', mouseupHandler);
}
