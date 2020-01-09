import applyPen from './applyPen';

export default function startDrawWithPen() {
  const pen = document.querySelector('.pen');
  if (pen.classList.contains('selected-tool')) {
    applyPen();
  }
}
