import './previewFullscreenButton.css';

export default function renderPreviewFullscreenButton() {
  const previewContainer = document.querySelector('.preview-container');
  previewContainer.insertAdjacentHTML('beforeEnd', '<button class="preview-fullscreen" title="[F]">fullscreen</button>');
}
