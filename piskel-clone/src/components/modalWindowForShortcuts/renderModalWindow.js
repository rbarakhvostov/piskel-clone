import renderSaveShortcutsButton from './saveShortcutsButton/renderSaveShortcutsButton';
import renderShortcutsContainer from './shortcutsContainer/renderShortcutsContainer';

import './modalWindow.css';

export default function renderInfo() {
  const main = document.querySelector('.main');
  main.insertAdjacentHTML('beforeEnd',
    '<div class="shortcuts-modal-window" style="display:none"></div>');
  renderShortcutsContainer();
  renderSaveShortcutsButton();
}
