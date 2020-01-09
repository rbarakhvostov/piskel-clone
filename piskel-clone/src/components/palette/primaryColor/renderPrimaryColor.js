import './primaryColor.css';

export default function renderPrimaryColor() {
  const palette = document.querySelector('.palette');
  palette.insertAdjacentHTML('beforeEnd',
    '<input type="color" class="primary-color" title="primary color [left button]">');
}
