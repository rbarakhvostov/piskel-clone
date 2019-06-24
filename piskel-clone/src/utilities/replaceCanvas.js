import startDrawWithPen from './startDrawWithPen';
import startApplyEraser from './startApplyEraser';
import startApplyPaintBucket from './startApplyPaintBucket';
import startApplyColorPicker from './startApplyColorPicker';
import startDrawRectangle from './startDrawRectangle';
import startApplyLighten from './startApplyLighten';
import startShowInfo from './startShowInfo';

export default function replaceCanvas(...rest) {
  const canvas = document.querySelector('.canvas');
  const main = document.querySelector('.main');
  const canvasCopy = canvas.cloneNode(true);
  const canvasCopyСontext = canvasCopy.getContext('2d');
  canvasCopyСontext.imageSmoothingEnabled = false;
  if (rest[0]) canvasCopyСontext.drawImage(rest[0], 0, 0, 640, 640);
  else canvasCopyСontext.drawImage(canvas, 0, 0);
  main.replaceChild(canvasCopy, canvas);
  canvasCopy.addEventListener('contextmenu', e => e.preventDefault());
  startShowInfo();
  startDrawWithPen();
  startApplyEraser();
  startApplyPaintBucket();
  startApplyColorPicker();
  startDrawRectangle();
  startApplyLighten();
}
