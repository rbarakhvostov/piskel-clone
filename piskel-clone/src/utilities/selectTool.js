export default function selectTool(e) {
  let { target } = e;
  const selectedTool = document.querySelector('.selected-tool');
  while (target !== this) {
    if (target.tagName === 'BUTTON' && target !== selectedTool) {
      // const selectedTool = document.querySelector('.selected-tool');
      selectedTool.classList.remove('selected-tool');
      target.classList.add('selected-tool');
      return;
    }
    target = target.parentNode;
  }
}
