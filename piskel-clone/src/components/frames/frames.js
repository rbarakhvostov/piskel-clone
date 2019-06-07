import './frames.css';

export default function renderFrames() {
  const main = document.querySelector('.main');
  main.insertAdjacentHTML('beforeEnd', '<div class="frames-container"></div>');
}
