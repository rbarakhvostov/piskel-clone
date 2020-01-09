import './preview.css';

export default function renderPreview() {
  const previewContainer = document.querySelector('.preview-container');
  previewContainer.insertAdjacentHTML('beforeEnd',
    '<canvas class="preview" width="256" height="256"></canvas>');
}
