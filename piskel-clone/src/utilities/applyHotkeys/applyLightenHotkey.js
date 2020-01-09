import deselectTool from '../deselectTool';
import replaceCanvas from '../replaceCanvas';

export default function applyLightenHotkey(e) {
  const lighten = document.querySelector('.lighten');
  const lightenHotkey = document.getElementById('lighten-hotkey').value.toUpperCase();
  if (e.keyCode === lightenHotkey.charCodeAt()) {
    deselectTool();
    lighten.classList.add('selected-tool');
    replaceCanvas();
  }
}
