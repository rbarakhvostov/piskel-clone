import replaceCanvas from './replaceCanvas';
// import startDrawWithPen from './startDrawWithPen';
// import startApplyEraser from './startApplyEraser';

export default function selectFrame(e) {
  const { target } = e;
  if (target.tagName === 'CANVAS') {
    let selectedFrame = document.querySelector('.selected-frame');
    selectedFrame.classList.remove('selected-frame');
    target.classList.add('selected-frame');
    selectedFrame = document.querySelector('.selected-frame');
    replaceCanvas(selectedFrame);
    // startDrawWithPen();
    // startApplyEraser();
  }
}
