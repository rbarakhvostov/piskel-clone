import applyLighten from './applyLighten';

export default function startApplyLighten() {
  const lighten = document.querySelector('.lighten');
  // const canvas = document.querySelector('.canvas');
  if (lighten.classList.contains('selected-tool')) {
    applyLighten();
  }
}
