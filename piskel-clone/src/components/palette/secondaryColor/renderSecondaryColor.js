import './secondaryColor.css';

export default function renderSecondaryColor() {
  const palette = document.querySelector('.palette');
  palette.insertAdjacentHTML('beforeEnd',
    '<input type="color" class="secondary-color" value="#88c4f2" title="secondary color [right button]">');
}
