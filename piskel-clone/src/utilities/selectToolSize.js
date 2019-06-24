export default function selectToolSize(e) {
  let { target } = e;
  const selectedSize = document.querySelector('.selected-size');
  while (target !== this) {
    if (target.tagName === 'LABEL' && target !== selectedSize) {
      selectedSize.classList.remove('selected-size');
      target.classList.add('selected-size');
      return;
    }
    target = target.parentNode;
  }
}
