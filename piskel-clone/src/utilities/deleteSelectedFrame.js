// for shortcut;
import changeFrameNumbers from './changeFrameNumbers';
import replaceCanvas from './replaceCanvas';

export default function deleteSelectedFrame() {
  const frameWrappers = document.querySelectorAll('.frame-wrapper');
  let selectedFrame = document.querySelector('.selected-frame');
  const frameWrapper = selectedFrame.parentNode;
  if (frameWrappers.length === 1) return;
  if (frameWrapper !== frameWrappers[0]) {
    frameWrapper.previousElementSibling.querySelector('.frame').classList.add('selected-frame');
    selectedFrame = frameWrapper.previousElementSibling.querySelector('.selected-frame');
  } else {
    frameWrapper.nextElementSibling.querySelector('.frame').classList.add('selected-frame');
    selectedFrame = frameWrapper.nextElementSibling.querySelector('.selected-frame');
  }
  replaceCanvas(selectedFrame);
  frameWrapper.remove();
  changeFrameNumbers();
}
