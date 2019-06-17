import './previewButton.css';

export default function renderPreviewButton() {
  const previewContainer = document.querySelector('.preview-container');
  previewContainer.insertAdjacentHTML('beforeEnd', '<button class="preview-button">start</button>');
}
