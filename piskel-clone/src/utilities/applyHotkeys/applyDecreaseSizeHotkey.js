import decreaseToolSize from '../decreaseToolSize';

export default function applyDecreaseSizeHotkey(e) {
  const decreaseSizeHotkey = document.getElementById('decrease-size-hotkey').value.toUpperCase();
  if (e.keyCode === decreaseSizeHotkey.charCodeAt()) {
    decreaseToolSize();
  }
}
