import './toolbar.css';
import renderPen from '../tools/pen/renderPen';
import renderEraser from '../tools/eraser/renderEraser';
import renderPaintBucket from '../tools/paint-bucket/renderPaintBucket';
import renderRectangle from '../tools/rectangle/renderRectangle';
import renderPenSizes from '../penSizes/renderPenSizes';

export default function renderToolbar() {
  const main = document.querySelector('.main');
  main.insertAdjacentHTML('beforeEnd', '<div class="toolbar"></div>');
  renderPenSizes();
  renderPen();
  renderEraser();
  renderPaintBucket();
  renderRectangle();
}
