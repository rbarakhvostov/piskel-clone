import startPreview from '../../../utilities/startPreview';

import './startAnimationButton.css';

export default function renderStartAnimationButton() {
  const previewContainer = document.querySelector('.preview-container');
  previewContainer.insertAdjacentHTML('beforeEnd',
    '<button class="start-animation-button">start</button>');
  const startAnimationButton = document.querySelector('.start-animation-button');
  startAnimationButton.addEventListener('click', startPreview);
}
