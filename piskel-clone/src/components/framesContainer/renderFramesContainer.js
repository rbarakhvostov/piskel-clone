import renderFirstFrame from './frames/renderFirstFrame';
import renderFramesButton from './framesButton/renderFramesButton';
import selectFrame from '../../utilities/selectFrame';

import './framesContainer.css';

export default function renderFramesContainer() {
  const main = document.querySelector('.main');
  main.insertAdjacentHTML('beforeEnd',
    '<div class="frames-container"></div>');
  renderFirstFrame();
  renderFramesButton();
  const framesContainer = document.querySelector('.frames-container');
  framesContainer.addEventListener('click', selectFrame);
}
