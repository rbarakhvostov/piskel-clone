export default function hideInfo(el) {
  return () => {
    const copyEl = el;
    copyEl.style.display = 'none';
  };
  // const cursorCoordinates = document.querySelector('.cursor-coordinates');
  // cursorCoordinates.style.display = 'none';
}
