import applyDarken from './applyDarken';

export default function startApplyDarken() {
  const darken = document.querySelector('.darken');
  if (darken.classList.contains('selected-tool')) {
    applyDarken();
  }
}
