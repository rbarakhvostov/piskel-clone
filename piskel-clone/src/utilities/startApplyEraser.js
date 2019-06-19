import applyEraser from './applyEraser';

export default function startApplyEraser() {
  const eraser = document.querySelector('.eraser');
  if (eraser.classList.contains('selected-tool')) {
    applyEraser();
  }
}
