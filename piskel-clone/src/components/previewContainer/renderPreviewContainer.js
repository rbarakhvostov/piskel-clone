import './previewContainer.css';
import renderPreview from '../preview/renderPreview';
import renderPreviewButton from '../previewButton/renderPreviewButton';
import renderPreviewRange from '../previewRange/renderPreviewInputRange';
import renderPreviewFullscreenButton from '../previewFullscreenButton/renderPreviewFullScreenButton';

export default function renderPreviewContainer() {
  const main = document.querySelector('.main');
  main.insertAdjacentHTML('beforeEnd', '<div class="preview-container"></div>');
  renderPreview();
  renderPreviewRange();
  renderPreviewButton();
  renderPreviewFullscreenButton();
}
