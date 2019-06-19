import applyEraser from './applyEraser';

export default function startDrawWithPen() {
  const eraser = document.querySelector('.eraser');
  if (eraser.classList.contains('selected-tool')) {
    applyEraser();
  }
}
