import frameMapping from './frameMapping';
import chooseCanvasColor from './chooseCanvasColor';

export default function applyEraser() {
  const canvas = document.querySelector('.canvas');
  const context = canvas.getContext('2d');
  const unitsNumber = document.querySelector('.pen-sizes').elements['pen-size'].value;
  const pixelSize = canvas.width / unitsNumber;
  let paint;
  function draw(x, y) {
    context.fillStyle = getComputedStyle(canvas).backgroundColor;
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
  function mouseleaveHandler() {
    paint = false;
  }
  canvas.addEventListener('mousedown', mousedownHandler);
  canvas.addEventListener('mousemove', mousemoveHandler);
  canvas.addEventListener('mouseup', mouseupHandler);
  canvas.addEventListener('mouseleave', mouseleaveHandler);

  const canvasColor = document.querySelector('.canvas-color');
  canvasColor.setAttribute('disabled', 'disabled');
  canvasColor.style.backgroundColor = '#ff0000';
  canvasColor.removeEventListener('input', chooseCanvasColor);
}
