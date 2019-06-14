// import drawWithPen from './drawWithPen';
import replaceCanvas from './replaceCanvas';
import startDrawWithPen from './startDrawWithPen';

export default function applyTool(e) {
  const { target } = e;
  const pen = document.querySelector('.pen');
  // if (pen.classList.contains('selected-tool')) {
  //   drawWithPen();
  // } else if (!pen.classList.contains('selected-tool')
  //           && target !== this) {
  //   replaceCanvas();
  // }
  if (!pen.classList.contains('selected-tool')
      && target !== this) {
    replaceCanvas();
    return;
  }
  startDrawWithPen();
}
