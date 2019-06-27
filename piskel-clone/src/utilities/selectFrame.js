import replaceCanvas from './replaceCanvas';

export default function selectFrame(e) {
  const { target } = e;
  let selectedFrame = document.querySelector('.selected-frame');
  if (target.tagName === 'CANVAS' && target !== selectedFrame) {
    selectedFrame.classList.remove('selected-frame');
    target.classList.add('selected-frame');
    selectedFrame = document.querySelector('.selected-frame');
    replaceCanvas(selectedFrame);
  }
}
