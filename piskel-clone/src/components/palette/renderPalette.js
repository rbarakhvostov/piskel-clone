import './palette.css';

export default function renderPalette() {
  const main = document.querySelector('.main');
  main.insertAdjacentHTML('beforeEnd', '<div class="palette"></div>');
}
