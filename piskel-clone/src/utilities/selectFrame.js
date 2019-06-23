import replaceCanvas from './replaceCanvas';
// import startDrawWithPen from './startDrawWithPen';
// import startApplyEraser from './startApplyEraser';

export default function selectFrame(e) {
  const { target } = e;
  let selectedFrame = document.querySelector('.selected-frame');
  // const innerWrap = document.querySelector('.inner-wrap');
  if (target.tagName === 'CANVAS' && target !== selectedFrame) {
    selectedFrame.classList.remove('selected-frame');
    target.classList.add('selected-frame');
    selectedFrame = document.querySelector('.selected-frame');
    replaceCanvas(selectedFrame);
    // startDrawWithPen();
    // startApplyEraser();
  }
}
