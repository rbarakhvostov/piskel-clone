import './frame.css';

export default function renderFrames() {
  const framesContainer = document.querySelector('.frames-container');
  framesContainer.insertAdjacentHTML('beforeEnd', '<div class="frame-wrapper"><div class="frame-number"><span>1</span></div><canvas class="frame selected-frame" width="128" height="128"></canvas><div class="duplicate-frame"><span class="fas fa-copy"></span></div>');
}
