export default function renderEraser() {
  const toolbar = document.querySelector('.toolbar');
  toolbar.insertAdjacentHTML('beforeEnd', '<button class="rectangle" title="rectangle tool [I]"><span class="far fa-square"></span></button>');
}
