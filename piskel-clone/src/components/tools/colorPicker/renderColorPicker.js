export default function renderColorPicker() {
  const toolbar = document.querySelector('.toolbar');
  toolbar.insertAdjacentHTML('beforeEnd', '<button class="color-picker" title="color picker [T]"><span class="fas fa-eye-dropper"></span></button>');
}
