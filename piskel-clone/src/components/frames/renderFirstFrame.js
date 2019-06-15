import './frame.css';
import deleteFrame from '../../utilities/deleteFrame';
import duplicateFrame from '../../utilities/duplicateFrame';

export default function renderFirstFrame() {
  const framesContainer = document.querySelector('.frames-container');
  framesContainer.insertAdjacentHTML('beforeEnd', '<div class="frame-wrapper"><div class="inner-wrap"><div class="frame-number-container"><span class="frame-number">1</span></div><div class="delete-frame-container"><span class="fas fa-trash-alt"></span></div></div><canvas class="frame selected-frame" width="128" height="128"></canvas><div class="duplicate-frame-container"><span class="fas fa-copy"></span></div>');
  const frameWrapper = document.querySelector('.frame-wrapper');
  frameWrapper.addEventListener('click', deleteFrame);
  frameWrapper.addEventListener('click', duplicateFrame);
}
