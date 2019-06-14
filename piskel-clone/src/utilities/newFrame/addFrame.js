import replaceCanvas from '../replaceCanvas';
import startDrawWithPen from '../startDrawWithPen';

export default function renderFrame() {
  const framesButton = document.querySelector('.frames-button');
  const framesContainer = document.querySelector('.frames-container');
  for (let i = 0, l = framesContainer.children.length; i < l; i += 1) {
    framesContainer.children[i].classList.remove('selected-frame');
  }
  framesButton.insertAdjacentHTML('beforeBegin', '<canvas class="frame selected-frame" width="128" height="128"></canvas><div class="frame-number"><span>1</span></div>');
  const canvas = document.querySelector('.canvas');
  const context = canvas.getContext('2d');
  context.clearRect(0, 0, 640, 640);
  replaceCanvas();
  // const pen = document.querySelector('.pen');
  // if (pen.classList.contains('selected-tool')) {
  //   drawWithPen();
  // }
  startDrawWithPen();
}
