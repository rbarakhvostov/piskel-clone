import './main.css';
import renderToolbar from '../toolbar/toolbar';
import renderPalette from '../palette/palette';
import renderFrames from '../frames/frames';
import renderCanvas from '../canvas/canvas';
import renderPreview from '../preview/preview';


export default function renderMain() {
  const header = document.querySelector('.header');
  header.insertAdjacentHTML('afterEnd', '<main class="main"></main>');
  renderToolbar();
  renderPalette();
  renderFrames();
  renderCanvas();
  renderPreview();
}
