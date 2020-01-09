export default function showInfo(e) {
  const canvas = document.querySelector('.canvas');
  const cursorCoordinates = document.querySelector('.cursor-coordinates');
  const unitsNumber = 128;
  const pixelSize = canvas.width / unitsNumber;
  const mouseX = Math.floor((e.pageX - canvas.offsetLeft) / pixelSize);
  const mouseY = Math.floor((e.pageY - canvas.offsetTop) / pixelSize);
  cursorCoordinates.style.display = '';
  cursorCoordinates.textContent = `${mouseX}:${mouseY}`;
}
