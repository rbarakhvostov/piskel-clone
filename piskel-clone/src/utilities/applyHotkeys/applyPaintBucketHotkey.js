import deselectTool from '../deselectTool';
import replaceCanvas from '../replaceCanvas';

export default function applyPaintBucketHotkey(e) {
  const painBucket = document.querySelector('.paint-bucket');
  const paintBucketHotkey = document.getElementById('paint-bucket-hotkey').value.toUpperCase();
  if (e.keyCode === paintBucketHotkey.charCodeAt()) {
    deselectTool();
    painBucket.classList.add('selected-tool');
    replaceCanvas();
  }
}
