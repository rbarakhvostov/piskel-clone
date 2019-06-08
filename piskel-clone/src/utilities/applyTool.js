import drawWithPen from './drawWithPen';

export default function applyTool(e) {
  const { target } = e;
  const main = document.querySelector('.main');
  const canvas = document.querySelector('.canvas');
  const pen = document.querySelector('.pen');
  if (pen.classList.contains('selected-tool')) {
    drawWithPen();
  } else if (!pen.classList.contains('selected-tool')
            && target !== this) {
    const canvasCopy = canvas.cloneNode(true);
    const canvasCopyСontext = canvasCopy.getContext('2d');
    canvasCopyСontext.drawImage(canvas, 0, 0);
    main.replaceChild(canvasCopy, canvas);
  }
}
