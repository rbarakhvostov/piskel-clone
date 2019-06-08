import './canvas.css';

export default function renderCanvas() {
  const main = document.querySelector('.main');
  main.insertAdjacentHTML('beforeEnd', '<canvas class="canvas" width="640" height="640"></canvas>');
}
