export default function renderPaintBucket() {
  const toolbar = document.querySelector('.toolbar');
  toolbar.insertAdjacentHTML('beforeEnd', '<button class="paint-bucket" title="paint bucket tool"><span class="fas fa-fill-drip"></span></button>');
}
