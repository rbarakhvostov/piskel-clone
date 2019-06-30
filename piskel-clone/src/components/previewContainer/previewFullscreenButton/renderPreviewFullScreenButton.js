import './previewFullscreenButton.css';
import requestFullscreen from '../../../utilities/requestFullscreen';

export default function renderPreviewFullscreenButton() {
  const previewContainer = document.querySelector('.preview-container');
  previewContainer.insertAdjacentHTML('beforeEnd', '<button class="preview-fullscreen">fullscreen</button>');
  const previewfullscreenButton = document.querySelector('.preview-fullscreen');
  previewfullscreenButton.addEventListener('click', requestFullscreen);
}
