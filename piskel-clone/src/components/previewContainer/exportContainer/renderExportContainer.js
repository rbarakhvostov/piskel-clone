import './exportContainer.css';
import renderExportGifButton from './exportGifButton/renderExportGifButton';
import renderExportApngButton from './exportApngButton/renderExportApngButton';
import renderExportRmnButton from './exportRmnButton/renderExportRmnButton';

export default function renderExportContainer() {
  const previewContainer = document.querySelector('.preview-container');
  previewContainer.insertAdjacentHTML('beforeEnd', '<div class="export-container"></div>');
  renderExportGifButton();
  renderExportApngButton();
  renderExportRmnButton();
}
