import './primaryColor.css';

export default function renderPrimaryColor() {
  const palette = document.querySelector('.palette');
  palette.insertAdjacentHTML('beforeEnd',
    '<input type="color" class="primary-color" value="#f2e494" title="primary color [left button]">');
}
