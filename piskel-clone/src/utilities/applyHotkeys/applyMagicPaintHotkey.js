import deselectTool from '../deselectTool';
import replaceCanvas from '../replaceCanvas';

export default function applyMagicPaintHotkey(e) {
  const magicPaint = document.querySelector('.magic-paint');
  const magicPaintHotkey = document.getElementById('magic-paint-hotkey').value.toUpperCase();
  if (e.keyCode === magicPaintHotkey.charCodeAt()) {
    deselectTool();
    magicPaint.classList.add('selected-tool');
    replaceCanvas();
  }
}
