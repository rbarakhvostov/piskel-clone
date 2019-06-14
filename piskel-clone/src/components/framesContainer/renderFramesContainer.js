import './framesContainer.css';
import renderFirstFrame from '../frames/renderFirstFrame';
import renderFramesButton from '../framesButton/renderFramesButton';

export default function renderFramesContainer() {
  const main = document.querySelector('.main');
  main.insertAdjacentHTML('beforeEnd', '<div class="frames-container"></div>');
  renderFirstFrame();
  renderFramesButton();
}
