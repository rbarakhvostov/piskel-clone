import './canvas.css';

export default function renderCanvas() {
  const main = document.querySelector('.main');
  main.insertAdjacentHTML('beforeEnd', '<canvas class="canvas"></canvas>');
}
