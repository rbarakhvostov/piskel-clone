import deselectTool from '../deselectTool';
import replaceCanvas from '../replaceCanvas';

export default function applyPenHotkey(e) {
  const pen = document.querySelector('.pen');
  const penHotkey = document.getElementById('pen-hotkey').value.toUpperCase();
  if (e.keyCode === penHotkey.charCodeAt()) {
    deselectTool();
    pen.classList.add('selected-tool');
    replaceCanvas();
  }
}
