export default function checkShortcuts() {
  const shortcuts = document.querySelectorAll('.hotkey');
  const shortcutValues = [...shortcuts].map(el => el.value.toUpperCase());
  if (shortcutValues.length !== new Set(shortcutValues).size) {
    shortcuts.forEach((el) => {
      const copyEl = el;
      copyEl.style.backgroundColor = '#ff0000';
    });
    return;
  }
  shortcuts.forEach((el) => {
    const copyEl = el;
    copyEl.style.backgroundColor = '';
    if (copyEl.value === '') copyEl.style.backgroundColor = '#ff0000';
  });
}
