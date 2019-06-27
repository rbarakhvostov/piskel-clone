import addFrame from '../addFrame';

export default function applyAddFrameHotkey(e) {
  const addFrameHotkey = document.getElementById('create-frame-hotkey').value.toUpperCase();
  if (e.keyCode === addFrameHotkey.charCodeAt()) {
    addFrame();
  }
}
