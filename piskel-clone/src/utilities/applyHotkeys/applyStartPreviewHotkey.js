import startPreview from '../startPreview';

export default function applyStartPreviewHotkey(e) {
  const startPreviewHotkey = document.getElementById('start-animation-hotkey').value.toUpperCase();
  if (e.keyCode === startPreviewHotkey.charCodeAt()) {
    startPreview();
  }
}
