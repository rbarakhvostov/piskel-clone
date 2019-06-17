import './palette.css';
import renderPrimaryColor from './primaryColor/renderPrimaryColor';
import renderSecondaryColor from './secondaryColor/renderSecondaryColor';
import renderSwapColorsIcon from './swapColorsIcon/renderSwapColorsIcon';

export default function renderPalette() {
  const main = document.querySelector('.main');
  main.insertAdjacentHTML('beforeEnd', '<div class="palette"></div>');
  renderPrimaryColor();
  renderSwapColorsIcon();
  renderSecondaryColor();
}
