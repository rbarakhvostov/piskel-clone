import exportAnimationWithShortcuts from '../exportAnimationWithShortcuts';

export default function applyExportApngHotkey(e) {
  const exportApngHotkey = document.getElementById('export-apng-hotkey').value.toUpperCase();
  if (e.keyCode === exportApngHotkey.charCodeAt()) {
    exportAnimationWithShortcuts('png', 'image/png');
  }
}
