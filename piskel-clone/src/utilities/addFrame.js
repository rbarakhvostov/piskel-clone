// import replaceCanvas from './replaceCanvas';
// import addNumber from './addNumber';
import deleteFrame from './deleteFrame';
import duplicateFrame from './duplicateFrame';
import changeFrameNumbers from './changeFrameNumbers';

export default function addFrame() {
  const canvas = document.querySelector('.canvas');
  const context = canvas.getContext('2d');
  const framesButton = document.querySelector('.frames-button');
  // const frames = document.querySelectorAll('.frame');
  // for (let i = 0, l = frames.length; i < l; i += 1) {
  //   frames[i].classList.remove('selected-frame');
  // }
  let selectedFrame = document.querySelector('.selected-frame');
  selectedFrame.classList.remove('selected-frame');

  framesButton.insertAdjacentHTML('beforeBegin', '<div class="frame-wrapper"><div class="inner-wrap"><div class="frame-number-container"><span class="frame-number"></span></div><div class="delete-frame-container" title="delete frame"><span class="fas fa-trash-alt"></span></div></div><canvas class="frame selected-frame" width="128" height="128"></canvas><div class="duplicate-frame-container" title="duplicate frame"><span class="fas fa-copy"></span></div></div>');
  selectedFrame = document.querySelector('.selected-frame');
  const canvasColor = document.querySelector('.canvas-color');
  selectedFrame.style.backgroundColor = canvasColor.value;
  // addNumber();
  const frameWrappers = document.querySelectorAll('.frame-wrapper');
  const frameWrappersLength = frameWrappers.length;
  const frameWrapper = frameWrappers[frameWrappersLength - 1];
  frameWrapper.addEventListener('click', deleteFrame);
  frameWrapper.addEventListener('click', duplicateFrame);
  context.clearRect(0, 0, canvas.width, canvas.height);
  changeFrameNumbers();
  // replaceCanvas();
}
