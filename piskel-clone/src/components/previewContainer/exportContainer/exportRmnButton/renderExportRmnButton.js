import makeGif from '../../../../utilities/makeGif';

export default function renderExportRmnButton() {
  const exportContainer = document.querySelector('.export-container');
  exportContainer.insertAdjacentHTML('beforeEnd', '<button class="export-rmn-button">rmn</button>');
  const exportRmnButton = document.querySelector('.export-rmn-button');
  exportRmnButton.addEventListener('click', makeGif);
}
