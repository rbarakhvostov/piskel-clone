export default function renderDitheringTool() {
  const toolbar = document.querySelector('.toolbar');
  toolbar.insertAdjacentHTML('beforeEnd', '<button class="dithering-tool" title="dithering tool [Y]"><span class="fas fa-chess-board"></span></button>');
}
