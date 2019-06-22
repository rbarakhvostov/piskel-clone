import frameMapping from './frameMapping';

export default function drawRectangle() {
  const canvas = document.querySelector('.canvas');
  const context = canvas.getContext('2d');
  const rect = {};
  let drag;
  const unitsNumber = document.querySelector('.pen-sizes').elements['pen-size'].value;
  const pixel = canvas.width / unitsNumber;
  const offset = pixel / 2;
  function draw() {
    const primaryColor = document.querySelector('.primary-color');
    context.strokeStyle = primaryColor.value;
    context.lineWidth = pixel;
    context.strokeRect(rect.startX, rect.startY, rect.w, rect.h);
  }

  function mousedownHandler(e) {
    rect.startX = Math.floor((e.pageX - canvas.offsetLeft) / pixel) * pixel + offset;
    rect.startY = Math.floor((e.pageY - canvas.offsetTop) / pixel) * pixel + offset;
    drag = true;
  }

  function mousemoveHandler(e) {
    const selectedFrame = document.querySelector('.selected-frame');
    if (drag) {
      rect.w = Math.floor((e.pageX - canvas.offsetLeft) / pixel) * pixel - rect.startX + offset;
      rect.h = Math.floor((e.pageY - canvas.offsetTop) / pixel) * pixel - rect.startY + offset;
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(selectedFrame, 0, 0, 640, 640);
      draw();
    }
  }

  function mouseupHandler() {
    drag = false;
    frameMapping();
  }
  // function mouseleaveHandler() {
  //   drag = false;
  // }

  canvas.addEventListener('mousedown', mousedownHandler);
  canvas.addEventListener('mouseup', mouseupHandler);
  canvas.addEventListener('mousemove', mousemoveHandler);
  // canvas.addEventListener('mouseleave', mouseleaveHandler);
}
