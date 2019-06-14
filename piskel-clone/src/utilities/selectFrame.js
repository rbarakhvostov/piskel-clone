// import drawWithPen from './drawWithPen';
import replaceCanvas from './replaceCanvas';
import startDrawWithPen from './startDrawWithPen';

export default function selectFrame(e) {
  // const canvas = document.querySelector('.canvas');
  // const context = canvas.getContext('2d');
  const { target } = e;
  // const canvasCopy = canvas.cloneNode(true);
  // const canvasCopyСontext = canvasCopy.getContext('2d');
  // const main = document.querySelector('.main');
  // const pen = document.querySelector('.pen');
  if (target.tagName === 'CANVAS') {
    for (let i = 0, l = this.children.length; i < l; i += 1) {
      if (this.children[i].classList.contains('selected-frame')) {
        this.children[i].classList.remove('selected-frame');
      }
    }
    target.classList.add('selected-frame');
    const selectedFrame = document.querySelector('.selected-frame');

    replaceCanvas(selectedFrame);
    // canvasCopyСontext.drawImage(canvas, 0, 0);
    // main.replaceChild(canvasCopy, canvas);

    // canvasCopyСontext.drawImage(selectedFrame, 0, 0, 640, 640);
    // if (pen.classList.contains('selected-tool')) {
    //   drawWithPen();
    // }
    startDrawWithPen();
  }
}
