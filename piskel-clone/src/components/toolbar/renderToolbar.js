import './toolbar.css';
import renderPen from '../tools/pen/renderPen';
import renderEraser from '../tools/eraser/renderEraser';
import renderPaintBucket from '../tools/paint-bucket/renderPaintBucket';
import renderRectangle from '../tools/rectangle/renderRectangle';
import renderPenSizes from '../penSizes/renderPenSizes';
import renderColorPicker from '../tools/colorPicker/renderColorPicker';
import renderLighten from '../tools/lighten/renderLighten';
import renderDarken from '../tools/darken/renderDarken';
import renderDitheringTool from '../tools/ditheringTool/renderDitheringTool';
import renderInversionTool from '../tools/inversion/renderInversionTool';

export default function renderToolbar() {
  const main = document.querySelector('.main');
  main.insertAdjacentHTML('beforeEnd', '<div class="toolbar"></div>');
  renderPenSizes();
  renderPen();
  renderEraser();
  renderPaintBucket();
  renderRectangle();
  renderColorPicker();
  renderLighten();
  renderDarken();
  renderDitheringTool();
  renderInversionTool();
}
