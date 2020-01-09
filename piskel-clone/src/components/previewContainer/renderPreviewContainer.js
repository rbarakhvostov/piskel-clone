import './previewContainer.css';
import renderPreview from './preview/renderPreview';
import renderStartAnimationButton from './startAnimationButton/renderStartAnimationButton';
import renderPreviewRange from './previewRange/renderPreviewInputRange';
import renderPreviewFullscreenButton from './previewFullscreenButton/renderPreviewFullScreenButton';
import renderExportContainer from './exportContainer/renderExportContainer';

export default function renderPreviewContainer() {
  const main = document.querySelector('.main');
  main.insertAdjacentHTML('beforeEnd', '<div class="preview-container"></div>');
  renderPreview();
  renderPreviewRange();
  renderStartAnimationButton();
  renderPreviewFullscreenButton();
  renderExportContainer();
}
