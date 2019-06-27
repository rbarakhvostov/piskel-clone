import selectPreviousFrame from '../selectPreviousFrame';

export default function applyPreviousFrameHotkey(e) {
  const previousFrameHotkey = document.getElementById('previous-frame-hotkey').value.toUpperCase();
  if (e.keyCode === previousFrameHotkey.charCodeAt()) {
    selectPreviousFrame();
  }
}
