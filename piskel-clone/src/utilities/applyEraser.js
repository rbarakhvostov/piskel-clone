import frameMapping from './frameMapping';

export default function applyEraser() {
  const canvas = document.querySelector('.canvas');
  const context = canvas.getContext('2d');
  const unitsNumber = 64;
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
      console.log(111);
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
}
