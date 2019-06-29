// import './exportGifButton.css';
import makeGif from '../../../../utilities/makeGif';

export default function renderExportGifButton() {
  const exportContainer = document.querySelector('.export-container');
  exportContainer.insertAdjacentHTML('beforeEnd', '<button class="export-gif-button">gif</button>');
  const exportGifButton = document.querySelector('.export-gif-button');
  exportGifButton.addEventListener('click', makeGif);
}
