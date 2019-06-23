import changeFrameNumbers from './changeFrameNumbers';
import replaceCanvas from './replaceCanvas';
// import startDrawWithPen from './startDrawWithPen';

export default function deleteFrame(e) {
  const { target } = e;
  const deleteFrameContainer = this.querySelector('.delete-frame-container');
  const deleteFrameIcon = this.querySelector('.fa-trash-alt');
  const frameWrappers = document.querySelectorAll('.frame-wrapper');
  let selectedFrame;
  if (frameWrappers.length === 1) return;
  if (target === deleteFrameContainer || target === deleteFrameIcon) {
    if (this.querySelector('.frame').classList.contains('selected-frame')
        && this !== frameWrappers[0]) {
      this.previousElementSibling.querySelector('.frame').classList.add('selected-frame');
      selectedFrame = this.previousElementSibling.querySelector('.selected-frame');
    } else if (this.querySelector('.frame').classList.contains('selected-frame')
        && this === frameWrappers[0]) {
      this.nextElementSibling.querySelector('.frame').classList.add('selected-frame');
      selectedFrame = this.nextElementSibling.querySelector('.selected-frame');
    }
    replaceCanvas(selectedFrame);
    // startDrawWithPen();
    this.remove();
    changeFrameNumbers();
  }
}
