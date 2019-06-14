import changeFrameNumbers from './changeFrameNumbers';
import replaceCanvas from './replaceCanvas';
import startDrawWithPen from './startDrawWithPen';

export default function deleteFrames(e) {
  const { target } = e;
  const frameWrappers = document.querySelectorAll('.frame-wrapper');
  const frameWrappersLength = frameWrappers.length;
  const deleteFrame = this.querySelector('.delete-frame');
  const deleteFrameIcon = this.querySelector('.fa-trash-alt');
  if (target === deleteFrame || target === deleteFrameIcon) {
    if (this === frameWrappers[frameWrappersLength - 1]) {
      this.previousElementSibling.querySelector('.frame').classList.add('selected-frame');
      const selectedFrame = document.querySelector('.selected-frame');
      replaceCanvas(selectedFrame);
      startDrawWithPen();
    }
    this.remove();
    changeFrameNumbers();
  }
}
