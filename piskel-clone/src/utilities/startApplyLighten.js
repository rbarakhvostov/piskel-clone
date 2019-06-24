import applyLighten from './applyLighten';

export default function startApplyLighten() {
  const lighten = document.querySelector('.lighten');
  if (lighten.classList.contains('selected-tool')) {
    applyLighten();
  }
}
