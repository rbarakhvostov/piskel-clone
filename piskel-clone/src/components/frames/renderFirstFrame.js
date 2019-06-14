import './frames.css';

export default function renderFrames() {
  const framesContainer = document.querySelector('.frames-container');
  framesContainer.insertAdjacentHTML('beforeEnd', '<canvas class="frame selected-frame" width="128" height="128"></canvas><div class="frame-number"><span>1</span></div></div>');
}
