import './previewButton.css';

export default function renderStartAnimationButton() {
  const previewContainer = document.querySelector('.preview-container');
  previewContainer.insertAdjacentHTML('beforeEnd', '<button class="start-animation-button">start</button>');
}
