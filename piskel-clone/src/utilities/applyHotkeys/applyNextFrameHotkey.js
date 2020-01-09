import selectNextFrame from '../selectNextFrame';

export default function applyNextFrameHotkey(e) {
  const nextFrameHotkey = document.getElementById('next-frame-hotkey').value.toUpperCase();
  if (e.keyCode === nextFrameHotkey.charCodeAt()) {
    selectNextFrame();
  }
}
