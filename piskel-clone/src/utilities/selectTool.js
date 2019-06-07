export default function selectTool(event) {
  const toolbar = document.querySelector('.toolbar');
  let { target } = event;
  while (target !== this) {
    if (target.tagName === 'BUTTON') {
      for (let i = 0, l = toolbar.children.length; i < l; i += 1) {
        if (toolbar.children[i].classList.contains('selected-tool')) {
          toolbar.children[i].classList.remove('selected-tool');
        }
      }
      target.classList.add('selected-tool');
      return;
    }
    target = target.parentNode;
  }
}
