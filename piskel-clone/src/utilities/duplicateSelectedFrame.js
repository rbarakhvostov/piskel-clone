// for shortcut;
import deleteFrame from './deleteFrame';
import duplicateFrame from './duplicateFrame';
import changeFrameNumbers from './changeFrameNumbers';
import replaceCanvas from './replaceCanvas';

export default function duplicateSelectedFrame() {
  const selectedFrame = document.querySelector('.selected-frame');
  const frameWrapper = selectedFrame.parentNode;
  selectedFrame.classList.remove('selected-frame');
  const frameWrapperCopy = frameWrapper.cloneNode(true);
  const frameCopy = frameWrapperCopy.querySelector('.frame');
  const frameCopyСontext = frameCopy.getContext('2d');
  frameCopyСontext.imageSmoothingEnabled = false;
  frameCopyСontext.drawImage(frameWrapper.querySelector('.frame'), 0, 0);
  frameCopy.classList.add('selected-frame');
  frameWrapperCopy.addEventListener('click', duplicateFrame);
  frameWrapperCopy.addEventListener('click', deleteFrame);
  frameWrapper.insertAdjacentElement('afterEnd', frameWrapperCopy);
  changeFrameNumbers();
  replaceCanvas(frameCopy);
}
