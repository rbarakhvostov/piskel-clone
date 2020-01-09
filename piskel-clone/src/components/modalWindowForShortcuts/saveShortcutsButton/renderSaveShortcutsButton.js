import assignShortcuts from '../../../utilities/assignShortcuts';
import removeShortcuts from '../../../utilities/removeShortcuts';
import checkShortcuts from '../../../utilities/checkShortcuts';

import './saveShortcutsButton.css';

export default function renderSaveShortcutsButton() {
  const shortcutsModalWindow = document.querySelector('.shortcuts-modal-window');
  shortcutsModalWindow.insertAdjacentHTML('beforeEnd',
    `<div class="save-shortcuts-button-container">
      <button class="save-shortcuts-button">save</button>
    </div>`);
  const saveShortcutsButton = document.querySelector('.save-shortcuts-button');
  saveShortcutsButton.addEventListener('click', removeShortcuts);
  saveShortcutsButton.addEventListener('click', assignShortcuts);
  saveShortcutsButton.addEventListener('click', checkShortcuts);
}
