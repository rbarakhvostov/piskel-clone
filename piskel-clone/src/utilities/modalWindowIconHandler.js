export default function modalWindowIconHandler() {
  const modalWindow = document.querySelector('.modal-window');
  if (this.children[0].classList.contains('close-modal-window')) {
    modalWindow.style.display = 'none';
    this.style.backgroundColor = '';
    this.innerHTML = '<span class="fas fa-keyboard"></span>';
    return;
  }
  modalWindow.style.display = '';
  this.style.backgroundColor = '#0cafb7';
  this.innerHTML = '<span class="fas fa-times close-modal-window"></span>';
}
