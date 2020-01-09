export default function renderMagicPaint() {
  const toolbar = document.querySelector('.toolbar');
  toolbar.insertAdjacentHTML('beforeEnd', '<button class="magic-paint" title="paint all pixels of the same color"><span class="fas fa-paint-roller"></span></button>');
}
