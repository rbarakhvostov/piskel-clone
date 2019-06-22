import drawRectangle from './drawRectangle';

export default function startDrawRectangle() {
  const rectangle = document.querySelector('.rectangle');
  if (rectangle.classList.contains('selected-tool')) {
    drawRectangle();
  }
}
