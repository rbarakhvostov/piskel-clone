import exportAnimationWithShortcuts from '../exportAnimationWithShortcuts';

export default function applyExportGifHotkey(e) {
  const exportGifHotkey = document.getElementById('export-gif-hotkey').value.toUpperCase();
  if (e.keyCode === exportGifHotkey.charCodeAt()) {
    exportAnimationWithShortcuts('gif', 'image/gif');
  }
}
