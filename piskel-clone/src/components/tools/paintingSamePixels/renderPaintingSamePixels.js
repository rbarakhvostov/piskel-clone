export default function renderPaintingSamePixels() {
  const toolbar = document.querySelector('.toolbar');
  toolbar.insertAdjacentHTML('beforeEnd', '<button class="painting-same-pixels"><span class="fas fa-paint-roller"></span></button>');
}
