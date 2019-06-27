import './framesButton.css';

export default function renderFramesButton() {
  const framesContainer = document.querySelector('.frames-container');
  framesContainer.insertAdjacentHTML('beforeEnd', '<button class="frames-button">add new frame</button>');
}
