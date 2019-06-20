export default function selectPenSize(e) {
  let { target } = e;
  // const sizes = this.querySelectorAll('label');
  // if (target.tagName === 'DIV' || target.tagName === 'LABEL') {
  //   sizes.forEach((el) => {
  //     const copyEl = el;
  //     copyEl.style.backgroundColor = 'transparent';
  //   });
  // }
  // if (target.tagName === 'LABEL') target.style.backgroundColor = '#0cafb7';
  // if (target.tagName === 'DIV') target.parentNode.style.backgroundColor = '#0cafb7';
  while (target !== this) {
    if (target.tagName === 'LABEL') {
      const selectedTool = document.querySelector('.selected-size');
      selectedTool.classList.remove('selected-size');
      target.classList.add('selected-size');
      return;
    }
    target = target.parentNode;
  }
}
