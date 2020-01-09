export default function renderDitheringTool() {
  const toolbar = document.querySelector('.toolbar');
  toolbar.insertAdjacentHTML('beforeEnd',
    `<button class="dithering-tool" title="dithering tool">
      <span class="fas fa-chess-board"></span>
    </button>`);
}
