export default function renderInversionTool() {
  const toolbar = document.querySelector('.toolbar');
  toolbar.insertAdjacentHTML('beforeEnd', '<button class="inversion-tool" title="inversion tool [U]"><span class="fas fa-moon"></span></button>');
}
