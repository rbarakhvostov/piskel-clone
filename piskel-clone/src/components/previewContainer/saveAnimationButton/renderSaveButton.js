import './saveAnimationButton.css';
import makeGif from '../../../utilities/makeGif';

export default function renderSaveAnimationButton() {
  const previewContainer = document.querySelector('.preview-container');
  previewContainer.insertAdjacentHTML('beforeEnd', '<button class="save-animation-button">save</button>');
  const saveAnimationButton = document.querySelector('.save-animation-button');
  saveAnimationButton.addEventListener('click', makeGif);
}
