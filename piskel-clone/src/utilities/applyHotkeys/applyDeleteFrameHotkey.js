import deleteSelectedFrame from '../deleteSelectedFrame';

export default function applyDeleteFrameHotkey(e) {
  const deleteFrameHotkey = document.getElementById('delete-frame-hotkey').value.toUpperCase();
  if (e.keyCode === deleteFrameHotkey.charCodeAt()) {
    deleteSelectedFrame();
  }
}
