import makeGif from '../../../../utilities/makeGif';

export default function renderExportApngButton() {
  const exportContainer = document.querySelector('.export-container');
  exportContainer.insertAdjacentHTML('beforeEnd', '<button class="export-apng-button">apng</button>');
  const exportApngButton = document.querySelector('.export-apng-button');
  exportApngButton.addEventListener('click', makeGif);
}