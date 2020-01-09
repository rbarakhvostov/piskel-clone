import applyColorPicker from './applyColorPicker';

export default function startApplyColorPicker() {
  const colorPicker = document.querySelector('.color-picker');
  const canvas = document.querySelector('.canvas');
  if (colorPicker.classList.contains('selected-tool')) {
    canvas.addEventListener('click', applyColorPicker);
    canvas.addEventListener('contextmenu', applyColorPicker);
  }
}
