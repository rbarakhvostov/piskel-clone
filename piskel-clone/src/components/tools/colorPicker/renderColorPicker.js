export default function renderColorPicker() {
  const toolbar = document.querySelector('.toolbar');
  toolbar.insertAdjacentHTML('beforeEnd', '<button class="color-picker"><span class="fas fa-eye-dropper"></span></button>');
}
