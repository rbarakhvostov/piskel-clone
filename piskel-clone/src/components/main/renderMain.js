import './main.css';
import renderToolbar from '../toolbar/renderToolbar';
import renderPalette from '../palette/renderPalette';
import renderFramesContainer from '../framesContainer/renderFramesContainer';
import renderCanvas from '../canvas/renderCanvas';
import renderPreviewContainer from '../previewContainer/renderPreviewContainer';
import renderCanvasColor from '../canvasColor/canvasColor';

export default function renderMain() {
  const header = document.querySelector('.header');
  header.insertAdjacentHTML('afterEnd', '<main class="main"></main>');
  renderToolbar();
  renderPalette();
  renderCanvasColor();
  renderFramesContainer();
  renderCanvas();
  renderPreviewContainer();
}
