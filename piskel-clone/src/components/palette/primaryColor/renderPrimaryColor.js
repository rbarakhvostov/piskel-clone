import './primaryColor.css';

export default function renderPrimaryColor() {
  const palette = document.querySelector('.palette');
  palette.insertAdjacentHTML('beforeEnd', '<input type="color" id="head" class="primary-color">');
}
