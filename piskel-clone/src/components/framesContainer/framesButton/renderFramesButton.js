import './framesButton.css';
import addFrame from '../../../utilities/addFrame';

export default function renderFramesButton() {
  const framesContainer = document.querySelector('.frames-container');
  framesContainer.insertAdjacentHTML('beforeEnd', '<button class="frames-button">add new frame</button>');
  const framesButton = document.querySelector('.frames-button');
  framesButton.addEventListener('click', addFrame);
}
