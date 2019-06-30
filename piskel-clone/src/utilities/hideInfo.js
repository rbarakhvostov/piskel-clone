export default function hideInfo(el) {
  return () => {
    const copyEl = el;
    copyEl.style.display = 'none';
  };
}
