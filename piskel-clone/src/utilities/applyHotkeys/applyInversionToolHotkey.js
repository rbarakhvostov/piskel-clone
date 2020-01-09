import deselectTool from '../deselectTool';
import replaceCanvas from '../replaceCanvas';

export default function applyInversionToolHotkey(e) {
  const inversionTool = document.querySelector('.inversion-tool');
  const inversionToolHotkey = document.getElementById('inversion-tool-hotkey').value.toUpperCase();
  if (e.keyCode === inversionToolHotkey.charCodeAt()) {
    deselectTool();
    inversionTool.classList.add('selected-tool');
    replaceCanvas();
  }
}
