import duplicateSelectedFrame from '../duplicateSelectedFrame';

export default function applyDuplicateFrameHotkey(e) {
  const duplicateFrameHotkey = document.getElementById('duplicate-frame-hotkey').value.toUpperCase();
  if (e.keyCode === duplicateFrameHotkey.charCodeAt()) {
    duplicateSelectedFrame();
  }
}
