import applyPaintBucket from './applyPaintBucket';

export default function startApplyPaintBucket() {
  const paintBucket = document.querySelector('.paint-bucket');
  if (paintBucket.classList.contains('selected-tool')) {
    applyPaintBucket();
  }
}
