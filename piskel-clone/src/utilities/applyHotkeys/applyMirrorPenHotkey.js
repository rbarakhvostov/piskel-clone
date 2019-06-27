import deselectTool from '../deselectTool';
import replaceCanvas from '../replaceCanvas';

export default function applyMirrorPenHotkey(e) {
  const mirrorPen = document.querySelector('.mirror-pen-tool');
  const mirrorPenHotkey = document.getElementById('mirror-pen-hotkey').value.toUpperCase();
  if (e.keyCode === mirrorPenHotkey.charCodeAt()) {
    deselectTool();
    mirrorPen.classList.add('selected-tool');
    replaceCanvas();
  }
}
