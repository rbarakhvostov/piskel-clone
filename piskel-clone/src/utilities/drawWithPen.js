import frameMapping from './frameMapping';

export default function drawWithPen() {
  const canvas = document.querySelector('.canvas');
  const context = canvas.getContext('2d');
  const unitsNumber = document.querySelector('.pen-sizes').elements['pen-size'].value;
  const pixelSize = canvas.width / unitsNumber;
  let paint;
  function draw(x, y, button) {
    const primaryColor = document.querySelector('.primary-color');
    const secondaryColor = document.querySelector('.secondary-color');
    if (button === 1) context.fillStyle = primaryColor.value; // 1 - left button
    if (button === 3) context.fillStyle = secondaryColor.value; // 3 - right button
    context.fillRect(x, y, pixelSize, pixelSize);
  }
  function mousedownHandler(e) {
    const mouseX = Math.floor((e.pageX - canvas.offsetLeft) / pixelSize) * pixelSize;
    const mouseY = Math.floor((e.pageY - canvas.offsetTop) / pixelSize) * pixelSize;
    paint = true;
    draw(mouseX, mouseY, e.which);
  }
  function mousemoveHandler(e) {
    if (paint) {
      const mouseX = Math.floor((e.pageX - canvas.offsetLeft) / pixelSize) * pixelSize;
      const mouseY = Math.floor((e.pageY - canvas.offsetTop) / pixelSize) * pixelSize;
      draw(mouseX, mouseY, e.which);
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
  // canvas.addEventListener('contextmenu', e => e.preventDefault());
}
