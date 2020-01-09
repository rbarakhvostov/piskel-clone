import deselectTool from '../deselectTool';
import replaceCanvas from '../replaceCanvas';

export default function applyRectangleHotkey(e) {
  const rectangle = document.querySelector('.rectangle');
  const rectangleHotkey = document.getElementById('rectangle-hotkey').value.toUpperCase();
  if (e.keyCode === rectangleHotkey.charCodeAt()) {
    deselectTool();
    rectangle.classList.add('selected-tool');
    replaceCanvas();
  }
}
