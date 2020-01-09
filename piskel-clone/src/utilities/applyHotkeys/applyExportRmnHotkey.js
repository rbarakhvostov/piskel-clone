import exportAnimationWithShortcuts from '../exportAnimationWithShortcuts';

export default function applyExportRmnHotkey(e) {
  const exportRmnHotkey = document.getElementById('export-rmn-hotkey').value.toUpperCase();
  if (e.keyCode === exportRmnHotkey.charCodeAt()) {
    exportAnimationWithShortcuts('rmn', 'image/gif');
  }
}
