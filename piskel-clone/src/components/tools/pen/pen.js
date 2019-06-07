export default function renderPen() {
  const toolbar = document.querySelector('.toolbar');
  toolbar.insertAdjacentHTML('beforeEnd', '<button class="pen"><span class="fas fa-pen"></span></button>');
}
