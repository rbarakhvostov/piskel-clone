
import replaceCanvas from './replaceCanvas';
import startDrawWithPen from './startDrawWithPen';
import startApplyEraser from './startApplyEraser';

export default function applyTool(e) {
  const { target } = e;
  // const pen = document.querySelector('.pen');
  // const eraser = document.querySelector('.eraser');
  if (target !== this) replaceCanvas();
  startDrawWithPen();
  startApplyEraser();
}
