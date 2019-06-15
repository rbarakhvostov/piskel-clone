
import replaceCanvas from './replaceCanvas';
import startDrawWithPen from './startDrawWithPen';

export default function applyTool(e) {
  const { target } = e;
  const pen = document.querySelector('.pen');
  if (!pen.classList.contains('selected-tool')
      && target !== this) {
    replaceCanvas();
    return;
  }
  startDrawWithPen();
}
