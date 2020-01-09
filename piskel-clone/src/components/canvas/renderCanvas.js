import './canvas.css';

export default function renderCanvas() {
  const main = document.querySelector('.main');
  main.insertAdjacentHTML('beforeEnd', '<canvas class="canvas" width="640" height="640"></canvas>');
  const canvas = document.querySelector('.canvas');
  canvas.addEventListener('contextmenu', e => e.preventDefault());
}
