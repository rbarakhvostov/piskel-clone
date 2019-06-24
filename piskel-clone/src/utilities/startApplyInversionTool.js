import applyInversion from './applyInversion';

export default function startApplyDarken() {
  const inversion = document.querySelector('.inversion-tool');
  if (inversion.classList.contains('selected-tool')) {
    applyInversion();
  }
}
