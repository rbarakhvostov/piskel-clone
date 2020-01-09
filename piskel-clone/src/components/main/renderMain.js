import renderToolbar from '../toolbar/renderToolbar';
import renderPalette from '../palette/renderPalette';
import renderModalWindowIcon from '../modalWindowIcon/renderModalWindowIcon';
import renderFramesContainer from '../framesContainer/renderFramesContainer';
import renderCanvas from '../canvas/renderCanvas';
import renderPreviewContainer from '../previewContainer/renderPreviewContainer';
import renderInfo from '../info/renderInfo';
import renderModalWindow from '../modalWindowForShortcuts/renderModalWindow';

import './main.css';

export default function renderMain() {
  const header = document.querySelector('.header');
  header.insertAdjacentHTML('afterEnd',
    '<main class="main"></main>');
  renderToolbar();
  renderPalette();
  renderModalWindowIcon();
  renderFramesContainer();
  renderCanvas();
  renderPreviewContainer();
  renderInfo();
  renderModalWindow();
}
