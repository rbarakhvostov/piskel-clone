import swapColors from '../swapColors';

export default function applySwapColorsHotkey(e) {
  const swapColorsHotkey = document.getElementById('swap-colors-hotkey').value.toUpperCase();
  if (e.keyCode === swapColorsHotkey.charCodeAt()) {
    swapColors();
  }
}
