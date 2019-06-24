export default function renderInversionTool() {
  const toolbar = document.querySelector('.toolbar');
  toolbar.insertAdjacentHTML('beforeEnd', '<button class="inversion-tool"><span class="fas fa-moon"></span></button>');
}
