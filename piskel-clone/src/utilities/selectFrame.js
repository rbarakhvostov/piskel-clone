import replaceCanvas from './replaceCanvas';
import startDrawWithPen from './startDrawWithPen';

export default function selectFrame(e) {
  // const frames = document.querySelectorAll('.frame');
  const { target } = e;
  if (target.tagName === 'CANVAS') {
    // for (let i = 0, l = frames.length; i < l; i += 1) {
    //   if (frames[i].classList.contains('selected-frame')) {
    //     frames[i].classList.remove('selected-frame');
    //   }
    // }
    let selectedFrame = document.querySelector('.selected-frame');
    selectedFrame.classList.remove('selected-frame');
    target.classList.add('selected-frame');
    selectedFrame = document.querySelector('.selected-frame');
    replaceCanvas(selectedFrame);
    startDrawWithPen();
  }
}
