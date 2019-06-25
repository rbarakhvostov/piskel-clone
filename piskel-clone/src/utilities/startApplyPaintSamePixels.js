import applyPaintSamePixels from './applyPaintSamePixels';

export default function startApplyPaintSamePixels() {
  const paintingSamePixels = document.querySelector('.painting-same-pixels');
  const canvas = document.querySelector('.canvas');
  if (paintingSamePixels.classList.contains('selected-tool')) {
    canvas.addEventListener('click', applyPaintSamePixels);
    canvas.addEventListener('contextmenu', applyPaintSamePixels);
  }
}
