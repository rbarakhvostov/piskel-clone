import './swapColorsIcon.css';
import swapColors from '../../../utilities/swapColors';

export default function renderSwapColorsIcon() {
  const palette = document.querySelector('.palette');
  palette.insertAdjacentHTML('beforeEnd', '<span class="fas fa-arrows-alt-h swap-colors-icon" title="swap colors"></span>');
  const swapColorsIcon = document.querySelector('.swap-colors-icon');
  swapColorsIcon.addEventListener('click', swapColors);
}
