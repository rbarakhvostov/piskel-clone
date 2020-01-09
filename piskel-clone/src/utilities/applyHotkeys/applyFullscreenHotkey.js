import requestFullscreen from '../requestFullscreen';

export default function applyFullscreenHotkey(e) {
  const fullscreenHotkey = document.getElementById('fullscreen-hotkey').value.toUpperCase();
  if (e.keyCode === fullscreenHotkey.charCodeAt()) {
    requestFullscreen();
  }
}
