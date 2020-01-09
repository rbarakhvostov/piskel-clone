import increaseToolSize from '../increaseToolSize';

export default function applyIncreaseSizeHotkey(e) {
  const increaseSizeHotkey = document.getElementById('increase-size-hotkey').value.toUpperCase();
  if (e.keyCode === increaseSizeHotkey.charCodeAt()) {
    increaseToolSize();
  }
}
