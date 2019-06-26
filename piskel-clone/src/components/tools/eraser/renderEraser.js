export default function renderEraser() {
  const toolbar = document.querySelector('.toolbar');
  toolbar.insertAdjacentHTML('beforeEnd', '<button class="eraser" title="eraser [E]"><span class="fas fa-eraser"></span></button>');
}
