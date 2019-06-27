import applyInversion from './applyInversion';

export default function startApplyInversionTool() {
  const canvas = document.querySelector('.canvas');
  const inversion = document.querySelector('.inversion-tool');
  if (inversion.classList.contains('selected-tool')) {
    canvas.addEventListener('click', applyInversion);
  }
}
