import deselectTool from '../deselectTool';
import replaceCanvas from '../replaceCanvas';

export default function applyColorPickerHotkey(e) {
  const colorPicker = document.querySelector('.color-picker');
  const colorPickerHotkey = document.getElementById('color-picker-hotkey').value.toUpperCase();
  if (e.keyCode === colorPickerHotkey.charCodeAt()) {
    deselectTool();
    colorPicker.classList.add('selected-tool');
    replaceCanvas();
  }
}
