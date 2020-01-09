import makeAnimation from '../../../../utilities/makeAnimation';

export default function renderExportGifButton() {
  const exportContainer = document.querySelector('.export-container');
  exportContainer.insertAdjacentHTML('beforeEnd',
    '<button class="export-gif-button">export gif</button>');
  const exportGifButton = document.querySelector('.export-gif-button');
  exportGifButton.addEventListener('click', makeAnimation);
}
