import deselectTool from '../deselectTool';
import replaceCanvas from '../replaceCanvas';

export default function applyEraserHotkeyHotkey(e) {
  const eraser = document.querySelector('.eraser');
  const eraserHotkey = document.getElementById('eraser-hotkey').value.toUpperCase();
  if (e.keyCode === eraserHotkey.charCodeAt()) {
    deselectTool();
    eraser.classList.add('selected-tool');
    replaceCanvas();
  }
}
