import './modalWindowIcon.css';
import modalWindowIconHandler from '../../utilities/modalWindowIconHandler';

export default function renderModalWindowIcon() {
  const main = document.querySelector('.main');
  main.insertAdjacentHTML('beforeEnd', '<button class="modal-window-icon" title="keyboard shortcuts"><span class="fas fa-keyboard"></span></button>');
  const modalWindowIcon = document.querySelector('.modal-window-icon');
  modalWindowIcon.addEventListener('click', modalWindowIconHandler);
}
