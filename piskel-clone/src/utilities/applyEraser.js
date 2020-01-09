import frameMapping from './frameMapping';

export default function applyEraser() {
  const canvas = document.querySelector('.canvas');
  const context = canvas.getContext('2d');
  const toolSize = document.querySelector('.tool-sizes');
  const unitsNumber = toolSize.elements['tool-size'].value;
  const pixelSize = canvas.width / unitsNumber;
  let paint;
  function draw(x, y) {
    context.globalCompositeOperation = 'destination-out';
    context.fillStyle = 'rgba(255,255,255,1)';
    context.fillRect(x, y, pixelSize, pixelSize);
  }
  function mousedownHandler(e) {
    const mouseX = Math.floor((e.pageX - canvas.offsetLeft) / pixelSize) * pixelSize;
    const mouseY = Math.floor((e.pageY - canvas.offsetTop) / pixelSize) * pixelSize;
    paint = true;
    draw(mouseX, mouseY);
  }
  function mousemoveHandler(e) {
    if (paint) {
      const mouseX = Math.floor((e.pageX - canvas.offsetLeft) / pixelSize) * pixelSize;
      const mouseY = Math.floor((e.pageY - canvas.offsetTop) / pixelSize) * pixelSize;
      draw(mouseX, mouseY);
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
