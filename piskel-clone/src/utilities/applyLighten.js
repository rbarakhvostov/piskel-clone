import frameMapping from './frameMapping';

export default function applyLighten() {
  // const canvas = document.querySelector('.canvas');
  // const context = canvas.getContext('2d');
  // const unitsNumber = 64;
  // const pixelSize = canvas.width / unitsNumber;
  // const mouseX = Math.floor((e.pageX - canvas.offsetLeft) / pixelSize) * pixelSize;
  // const mouseY = Math.floor((e.pageY - canvas.offsetTop) / pixelSize) * pixelSize;
  // const srcImg = context.getImageData(mouseX, mouseY, pixelSize, pixelSize);
  // for (let i = 3, l = srcImg.data.length; i < l; i += 4) {
  //   srcImg.data[i] -= 17;
  // }
  // context.putImageData(srcImg, mouseX, mouseY);
  const canvas = document.querySelector('.canvas');
  const context = canvas.getContext('2d');
  const unitsNumber = document.querySelector('.pen-sizes').elements['pen-size'].value;
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
    draw(mouseX, mouseY);
  }
  function mousemoveHandler(e) {
    if (lighten) {
      const mouseX = Math.floor((e.pageX - canvas.offsetLeft) / pixelSize) * pixelSize;
      const mouseY = Math.floor((e.pageY - canvas.offsetTop) / pixelSize) * pixelSize;
      draw(mouseX, mouseY);
    }
  }
  function mouseupHandler() {
    lighten = false;
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
