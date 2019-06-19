import changeFrameNumbers from './changeFrameNumbers';
import replaceCanvas from './replaceCanvas';
import startDrawWithPen from './startDrawWithPen';
import deleteFrame from './deleteFrame';
import startApplyEraser from './startApplyEraser';

export default function duplicateFrame(e) {
  const { target } = e;
  const duplicateFrameContainer = this.querySelector('.duplicate-frame-container');
  const duplicateFrameIcon = this.querySelector('.fa-copy');
  if (target === duplicateFrameContainer || target === duplicateFrameIcon) {
    const selectedFrame = document.querySelector('.selected-frame');
    selectedFrame.classList.remove('selected-frame');
    const frameWrapperCopy = this.cloneNode(true);
    const frameCopy = frameWrapperCopy.querySelector('.frame');
    const frameCopyСontext = frameCopy.getContext('2d');
    frameCopyСontext.imageSmoothingEnabled = false;
    frameCopyСontext.drawImage(this.querySelector('.frame'), 0, 0);
    frameCopy.classList.add('selected-frame');
    frameWrapperCopy.addEventListener('click', duplicateFrame);
    frameWrapperCopy.addEventListener('click', deleteFrame);
    this.insertAdjacentElement('afterEnd', frameWrapperCopy);
    changeFrameNumbers();
    replaceCanvas(frameCopy);
    startDrawWithPen();
    startApplyEraser();
  }
}
