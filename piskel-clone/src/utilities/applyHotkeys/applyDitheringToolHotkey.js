import deselectTool from '../deselectTool';
import replaceCanvas from '../replaceCanvas';

export default function applyDitheringToolHotkey(e) {
  const ditheringTool = document.querySelector('.dithering-tool');
  const ditheringToolHotkey = document.getElementById('dithering-tool-hotkey').value.toUpperCase();
  if (e.keyCode === ditheringToolHotkey.charCodeAt()) {
    deselectTool();
    ditheringTool.classList.add('selected-tool');
    replaceCanvas();
  }
}
