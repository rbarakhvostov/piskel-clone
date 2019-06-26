export default function renderPaintingSamePixels() {
  const toolbar = document.querySelector('.toolbar');
  toolbar.insertAdjacentHTML('beforeEnd', '<button class="painting-same-pixels" title="paint all pixels of the same color [A]"><span class="fas fa-paint-roller"></span></button>');
}
