export default function selectPenSize(e) {
  const { target } = e;
  const sizes = this.querySelectorAll('label');
  if (target.tagName === 'DIV' || target.tagName === 'LABEL') {
    sizes.forEach((el) => {
      const copyEl = el;
      copyEl.style.backgroundColor = '';
    });
  }
  if (target.tagName === 'LABEL') target.style.backgroundColor = '#0cafb7';
  if (target.tagName === 'DIV') target.parentNode.style.backgroundColor = '#0cafb7';
}
