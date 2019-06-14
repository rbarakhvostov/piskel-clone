import './main.css';
import renderToolbar from '../toolbar/renderToolbar';
import renderPalette from '../palette/renderPalette';
import renderFramesContainer from '../framesContainer/renderFramesContainer';
import renderCanvas from '../canvas/renderCanvas';
import renderPreview from '../preview/renderPreview';


export default function renderMain() {
  const header = document.querySelector('.header');
  header.insertAdjacentHTML('afterEnd', '<main class="main"></main>');
  renderToolbar();
  renderPalette();
  renderFramesContainer();
  renderCanvas();
  renderPreview();
}