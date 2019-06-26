export default function deselectTool() {
  const selectedTool = document.querySelector('.selected-tool');
  selectedTool.classList.remove('selected-tool');
}
