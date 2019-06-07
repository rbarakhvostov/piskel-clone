import './toolbar.css';
import renderPen from '../tools/pen/pen';
import renderEraser from '../tools/eraser/eraser';
import renderPaintBucket from '../tools/paint-bucket/paint-bucket';
import renderRectangle from '../tools/rectangle/rectangle';

export default function renderToolbar() {
  const main = document.querySelector('.main');
  main.insertAdjacentHTML('beforeEnd', '<div class="toolbar"></div>');
  renderPen();
  renderEraser();
  renderPaintBucket();
  renderRectangle();
}
