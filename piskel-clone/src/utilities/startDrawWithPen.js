import drawWithPen from './drawWithPen';

export default function startDrawWithPen() {
  const pen = document.querySelector('.pen');
  if (pen.classList.contains('selected-tool')) {
    drawWithPen();
  }
}
