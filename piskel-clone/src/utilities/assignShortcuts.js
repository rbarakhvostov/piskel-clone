// import deselectTool from './deselectTool';
// import replaceCanvas from './replaceCanvas';

// import swapColors from './swapColors';
// import addFrame from './addFrame';
// import duplicateSelectedFrame from './duplicateSelectedFrame';
// import deleteSelectedFrame from './deleteSelectedFrame';
// import requestFullscreen from './requestFullscreen';
// import startPreview from './startPreview';
// import increaseToolSize from './increaseToolSize';
// import decreaseToolSize from './decreaseToolSize';
// import selectNextFrame from './selectNextFrame';
// import selectPreviousFrame from './selectPreviousFrame';

import applyPenHotkey from './applyHotkeys/applyPenHotkey';
import applyMirrorPenHotkey from './applyHotkeys/applyMirrorPenHotkey';
import applyEraserHotkey from './applyHotkeys/applyEraserHotkey';
import applyPaintBucketHotkey from './applyHotkeys/applyPaintBucketHotkey';
import applyColorPickerHotkey from './applyHotkeys/applyColorPickerHotkey';
import applyDitheringToolHotkey from './applyHotkeys/applyDitheringToolHotkey';
import applyInversionToolHotkey from './applyHotkeys/applyInversionToolHotkey';
import applyRectangleHotkey from './applyHotkeys/applyRectangleHotkey';
import applyLightenHotkey from './applyHotkeys/applyLightenHotkey';
import applyDarkenHotkey from './applyHotkeys/applyDarkenHotkey';
import applyMagicPaintHotkey from './applyHotkeys/applyMagicPaintHotkey';
import applySwapColorsHotkey from './applyHotkeys/applySwapColorsHotkey';
import applyAddFrameHotkey from './applyHotkeys/applyAddFrameHotkey';
import applyDuplicateFrameHotkey from './applyHotkeys/applyDuplicateFrameHotkey';
import applyDeleteFrameHotkey from './applyHotkeys/applyDeleteFrameHotkey';
import applyFullscreenHotkey from './applyHotkeys/applyFullscreenHotkey';
import applyStartPreviewHotkey from './applyHotkeys/applyStartPreviewHotkey';
import applyIncreaseSizeHotkey from './applyHotkeys/applyIncreaseSizeHotkey';
import applyDecreaseSizeHotkey from './applyHotkeys/applyDecreaseSizeHotkey';
import applyNextFrameHotkey from './applyHotkeys/applyNextFrameHotkey';
import applyPreviousFrameHotkey from './applyHotkeys/applyPreviousFrameHotkey';

export default function assignShortcuts() {
  // const pen = document.querySelector('.pen');
  // const penHotkey = document.getElementById('pen-hotkey').value;
  // const eraser = document.querySelector('.eraser');
  // const eraserHotkey = document.getElementById('eraser-hotkey').value;
  // const mirrorPen = document.querySelector('.mirror-pen-tool');
  // const mirrorPenHotkey = document.getElementById('mirror-pen-hotkey').value;
  // const painBucket = document.querySelector('.paint-bucket');
  // const paintBucketHotkey = document.getElementById('paint-bucket-hotkey').value;
  // const colorPicker = document.querySelector('.color-picker');
  // const colorPickerHotkey = document.getElementById('color-picker-hotkey').value;
  // const ditheringTool = document.querySelector('.dithering-tool');
  // const ditheringToolHotkey = document.getElementById('dithering-tool-hotkey').value;
  // const inversionTool = document.querySelector('.inversion-tool');
  // const inversionToolHotkey = document.getElementById('inversion-tool-hotkey').value;
  // const rectangle = document.querySelector('.rectangle');
  // const rectangleHotkey = document.getElementById('rectangle-hotkey').value;
  // const lighten = document.querySelector('.lighten');
  // const lightenHotkey = document.getElementById('lighten-hotkey').value;
  // const darken = document.querySelector('.darken');
  // const darkenHotkey = document.getElementById('darken-hotkey').value;
  // const magicPaint = document.querySelector('.magic-paint');
  // const magicPaintHotkey = document.getElementById('magic-paint-hotkey').value;
  // const swapColorsHotkey = document.getElementById('swap-colors-hotkey').value;
  // const addFrameHotkey = document.getElementById('create-frame-hotkey').value;
  // const duplicateFrameHotkey = document.getElementById('duplicate-frame-hotkey').value;
  // const deleteFrameHotkey = document.getElementById('delete-frame-hotkey').value;
  // const fullscreenHotkey = document.getElementById('fullscreen-hotkey').value;
  // const startPreviewHotkey = document.getElementById('start-animation-hotkey').value;
  // const increaseSizeHotkey = document.getElementById('increase-size-hotkey').value;
  // const decreaseSizeHotkey = document.getElementById('decrease-size-hotkey').value;
  // const nextFrameHotkey = document.getElementById('next-frame-hotkey').value;
  // const previousFrameHotkey = document.getElementById('previous-frame-hotkey').value;


  document.addEventListener('keydown', applyPenHotkey);
  document.addEventListener('keydown', applyMirrorPenHotkey);
  document.addEventListener('keydown', applyEraserHotkey);
  document.addEventListener('keydown', applyPaintBucketHotkey);
  document.addEventListener('keydown', applyColorPickerHotkey);
  document.addEventListener('keydown', applyDitheringToolHotkey);
  document.addEventListener('keydown', applyInversionToolHotkey);
  document.addEventListener('keydown', applyRectangleHotkey);
  document.addEventListener('keydown', applyLightenHotkey);
  document.addEventListener('keydown', applyDarkenHotkey);
  document.addEventListener('keydown', applyMagicPaintHotkey);
  document.addEventListener('keydown', applySwapColorsHotkey);
  document.addEventListener('keydown', applyAddFrameHotkey);
  document.addEventListener('keydown', applyDuplicateFrameHotkey);
  document.addEventListener('keydown', applyDeleteFrameHotkey);
  document.addEventListener('keydown', applyFullscreenHotkey);
  document.addEventListener('keydown', applyStartPreviewHotkey);
  document.addEventListener('keydown', applyIncreaseSizeHotkey);
  document.addEventListener('keydown', applyDecreaseSizeHotkey);
  document.addEventListener('keydown', applyNextFrameHotkey);
  document.addEventListener('keydown', applyPreviousFrameHotkey);
  // document.addEventListener('keydown', (e) => {
  //   if (e.keyCode === swapColorsHotkey.charCodeAt()) {
  //     swapColors();
  //   }
  // });

  // document.addEventListener('keydown', (e) => {
  //   if (e.keyCode === addFrameHotkey.charCodeAt()) {
  //     addFrame();
  //   }
  // });

  // document.addEventListener('keydown', (e) => {
  //   if (e.keyCode === duplicateFrameHotkey.charCodeAt()) {
  //     duplicateSelectedFrame();
  //   }
  // });

  // document.addEventListener('keydown', (e) => {
  //   if (e.keyCode === deleteFrameHotkey.charCodeAt()) {
  //     deleteSelectedFrame();
  //   }
  // });

  // document.addEventListener('keydown', (e) => {
  //   if (e.keyCode === fullscreenHotkey.charCodeAt()) {
  //     requestFullscreen();
  //   }
  // });
  // document.addEventListener('keydown', (e) => {
  //   if (e.keyCode === startPreviewHotkey.charCodeAt()) {
  //     startPreview();
  //   }
  // });
  // document.addEventListener('keydown', (e) => {
  //   if (e.keyCode === increaseSizeHotkey.charCodeAt()) {
  //     increaseToolSize();
  //   }
  // });
  // document.addEventListener('keydown', (e) => {
  //   if (e.keyCode === decreaseSizeHotkey.charCodeAt()) {
  //     decreaseToolSize();
  //   }
  // });
  // document.addEventListener('keydown', (e) => {
  //   if (e.keyCode === nextFrameHotkey.charCodeAt()) {
  //     selectNextFrame();
  //   }
  // });
  // document.addEventListener('keydown', (e) => {
  //   if (e.keyCode === previousFrameHotkey.charCodeAt()) {
  //     selectPreviousFrame();
  //   }
  // });
}
