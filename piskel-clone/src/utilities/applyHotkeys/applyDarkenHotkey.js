import deselectTool from '../deselectTool';
import replaceCanvas from '../replaceCanvas';

export default function applyDarkenHotkey(e) {
  const darken = document.querySelector('.darken');
  const darkenHotkey = document.getElementById('darken-hotkey').value.toUpperCase();
  if (e.keyCode === darkenHotkey.charCodeAt()) {
    deselectTool();
    darken.classList.add('selected-tool');
    replaceCanvas();
  }
}
