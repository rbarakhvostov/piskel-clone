export default function selectTool(e) {
  let { target } = e;
  while (target !== this) {
    if (target.tagName === 'BUTTON') {
      for (let i = 0, l = this.children.length; i < l; i += 1) {
        if (this.children[i].classList.contains('selected-tool')) {
          this.children[i].classList.remove('selected-tool');
        }
      }
      target.classList.add('selected-tool');
      return;
    }
    target = target.parentNode;
  }
}
