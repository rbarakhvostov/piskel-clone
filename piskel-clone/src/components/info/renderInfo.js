import './info.css';

export default function renderInfo() {
  const main = document.querySelector('.main');
  main.insertAdjacentHTML('beforeEnd',
    `<div class="info">
      <span class="canvas-size">128x128</span>
      <span class="cursor-coordinates"></span>
    </div>`);
}
