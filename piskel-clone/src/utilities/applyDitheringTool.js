import frameMapping from './frameMapping';

export default function applyDitheringTool() {
  const canvas = document.querySelector('.canvas');
  const context = canvas.getContext('2d');
  const toolSize = document.querySelector('.tool-sizes');
  const unitsNumber = toolSize.elements['tool-size'].value;
  const pixelSize = canvas.width / unitsNumber;
  let paint;
  function draw(x, y, button) {
    const primaryColor = document.querySelector('.primary-color');
    const secondaryColor = document.querySelector('.secondary-color');
    if (button === 1) {
      context.fillStyle = primaryColor.value;
      context.fillRect(x, y, pixelSize / 2, pixelSize / 2);
      context.fillRect(x + pixelSize / 2, y + pixelSize / 2, pixelSize / 2, pixelSize / 2);
      context.fillStyle = secondaryColor.value;
      context.fillRect(x, y + pixelSize / 2, pixelSize / 2, pixelSize / 2);
      context.fillRect(x + pixelSize / 2, y, pixelSize / 2, pixelSize / 2);
    }
    if (button === 3) {
      context.fillStyle = primaryColor.value;
      context.fillRect(x, y + pixelSize / 2, pixelSize / 2, pixelSize / 2);
      context.fillRect(x + pixelSize / 2, y, pixelSize / 2, pixelSize / 2);
      context.fillStyle = secondaryColor.value;
      context.fillRect(x, y, pixelSize / 2, pixelSize / 2);
      context.fillRect(x + pixelSize / 2, y + pixelSize / 2, pixelSize / 2, pixelSize / 2);
    }
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
  // function mouseleaveHandler() {
  //   paint = false;
  // }
  canvas.addEventListener('mousedown', mousedownHandler);
  canvas.addEventListener('mousemove', mousemoveHandler);
  canvas.addEventListener('mouseup', mouseupHandler);
  // canvas.addEventListener('mouseleave', mouseleaveHandler);
}
