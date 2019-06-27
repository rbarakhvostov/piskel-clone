import applyMagicPaint from './applyMagicPaint';

export default function startApplyMagicPaint() {
  const magicPaint = document.querySelector('.magic-paint');
  const canvas = document.querySelector('.canvas');
  if (magicPaint.classList.contains('selected-tool')) {
    canvas.addEventListener('click', applyMagicPaint);
    canvas.addEventListener('contextmenu', applyMagicPaint);
  }
}
