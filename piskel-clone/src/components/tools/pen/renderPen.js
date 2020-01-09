export default function renderPen() {
  const toolbar = document.querySelector('.toolbar');
  toolbar.insertAdjacentHTML('beforeEnd', '<button class="pen selected-tool" title="pen tool"><span class="fas fa-pen"></span></button>');
}
