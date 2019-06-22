
import replaceCanvas from './replaceCanvas';
// import startDrawWithPen from './startDrawWithPen';
// import startApplyEraser from './startApplyEraser';
// import startApplyPaintBucket from './startApplyPaintBucket';
// import startApplyColorPicker from './startApplyColorPicker';
// import startDrawRectangle from './startDrawRectangle';

export default function applyTool(e) {
  const { target } = e;
  if (target !== this) replaceCanvas();
  // startDrawWithPen();
  // startApplyEraser();
  // startApplyPaintBucket();
  // startApplyColorPicker();
  // startDrawRectangle();
}
