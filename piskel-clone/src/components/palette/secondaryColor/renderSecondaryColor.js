import './secondaryColor.css';

export default function renderSecondaryColor() {
  const palette = document.querySelector('.palette');
  palette.insertAdjacentHTML('beforeEnd',
    '<input type="color" class="secondary-color" title="secondary color [right button]">');
}
