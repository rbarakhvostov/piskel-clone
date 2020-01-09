export default function modalWindowIconHandler() {
  const shortcutsModalWindow = document.querySelector('.shortcuts-modal-window');
  if (this.children[0].classList.contains('close-modal-window')) {
    shortcutsModalWindow.style.display = 'none';
    this.style.backgroundColor = '';
    this.innerHTML = '<span class="fas fa-keyboard"></span>';
    return;
  }
  shortcutsModalWindow.style.display = '';
  this.style.backgroundColor = '#0cafb7';
  this.innerHTML = '<span class="fas fa-times close-modal-window"></span>';
}
