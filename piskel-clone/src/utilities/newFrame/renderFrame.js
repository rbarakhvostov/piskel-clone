import replaceCanvas from '../replaceCanvas';
import startDrawWithPen from '../startDrawWithPen';
import './frames.css';
import addNumber from '../addNumber';

export default function renderFrame() {
  const canvas = document.querySelector('.canvas');
  const context = canvas.getContext('2d');
  const framesButton = document.querySelector('.frames-button');
  const frames = document.querySelectorAll('.frame');
  for (let i = 0, l = frames.length; i < l; i += 1) {
    frames[i].classList.remove('selected-frame');
  }
  framesButton.insertAdjacentHTML('beforeBegin', '<div class="frame-wrapper"><div class="inner-wrap"><div class="frame-number-container"><span class="frame-number"></span></div><div class="delete-frame"><span class="fas fa-trash-alt"></span></div></div><canvas class="frame selected-frame" width="128" height="128"></canvas><div class="duplicate-frame"><span class="fas fa-copy"></span></div>');
  addNumber();
  context.clearRect(0, 0, 640, 640);
  replaceCanvas();
  // const pen = document.querySelector('.pen');
  // if (pen.classList.contains('selected-tool')) {
  //   drawWithPen();
  // }
  startDrawWithPen();
}
