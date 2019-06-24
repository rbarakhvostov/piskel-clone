export default function showInfo(e) {
  const canvas = document.querySelector('.canvas');
  const canvasSize = document.querySelector('.canvas-size');
  const cursorCoordinates = document.querySelector('.cursor-coordinates');
  const unitsNumber = 128;
  const pixelSize = canvas.width / unitsNumber;
  const mouseX = Math.floor((e.pageX - canvas.offsetLeft) / pixelSize);
  const mouseY = Math.floor((e.pageY - canvas.offsetTop) / pixelSize);
  cursorCoordinates.style.display = '';
  canvasSize.textContent = `${unitsNumber}x${unitsNumber}`;
  cursorCoordinates.textContent = `${mouseX}:${mouseY}`;
}
