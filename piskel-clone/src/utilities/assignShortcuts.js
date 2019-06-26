import deselectTool from './deselectTool';
import replaceCanvas from './replaceCanvas';
import swapColors from './swapColors';
import addFrame from './newFrame/addFrame';
import duplicateSelectedFrame from './duplicateSelectedFrame';
import deleteSelectedFrame from './deleteSelectedFrame';
import requestFullscreen from './requestFullscreen';
import startPreview from './startPreview';
import selectNextToolSize from './selectNextToolSize';
import selectPreviousToolSize from './selectPreviousToolSize';
import selectNextFrame from './selectNextFrame';
import selectPreviousFrame from './selectPreviousFrame';

export default function assignShortcuts() {
  const pen = document.querySelector('.pen');
  const eraser = document.querySelector('.eraser');
  const mirrorPen = document.querySelector('.mirror-pen-tool');
  const painBucket = document.querySelector('.paint-bucket');
  const colorPicker = document.querySelector('.color-picker');
  const ditheringTool = document.querySelector('.dithering-tool');
  const inversionTool = document.querySelector('.inversion-tool');
  const rectangle = document.querySelector('.rectangle');
  const lighten = document.querySelector('.lighten');
  const darken = document.querySelector('.darken');
  const paintingSamePixels = document.querySelector('.painting-same-pixels');
  document.addEventListener('keydown', (e) => {
    if (e.keyCode === 'Q'.charCodeAt()) {
      deselectTool();
      pen.classList.add('selected-tool');
      replaceCanvas();
    }
  });
  document.addEventListener('keydown', (e) => {
    if (e.keyCode === 'W'.charCodeAt()) {
      deselectTool();
      mirrorPen.classList.add('selected-tool');
      replaceCanvas();
    }
  });
  document.addEventListener('keydown', (e) => {
    if (e.keyCode === 'E'.charCodeAt()) {
      deselectTool();
      eraser.classList.add('selected-tool');
      replaceCanvas();
    }
  });
  document.addEventListener('keydown', (e) => {
    if (e.keyCode === 'R'.charCodeAt()) {
      deselectTool();
      painBucket.classList.add('selected-tool');
      replaceCanvas();
    }
  });
  document.addEventListener('keydown', (e) => {
    if (e.keyCode === 'T'.charCodeAt()) {
      deselectTool();
      colorPicker.classList.add('selected-tool');
      replaceCanvas();
    }
  });
  document.addEventListener('keydown', (e) => {
    if (e.keyCode === 'Y'.charCodeAt()) {
      deselectTool();
      ditheringTool.classList.add('selected-tool');
      replaceCanvas();
    }
  });
  document.addEventListener('keydown', (e) => {
    if (e.keyCode === 'U'.charCodeAt()) {
      deselectTool();
      inversionTool.classList.add('selected-tool');
      replaceCanvas();
    }
  });
  document.addEventListener('keydown', (e) => {
    if (e.keyCode === 'I'.charCodeAt()) {
      deselectTool();
      rectangle.classList.add('selected-tool');
      replaceCanvas();
    }
  });
  document.addEventListener('keydown', (e) => {
    if (e.keyCode === 'O'.charCodeAt()) {
      deselectTool();
      lighten.classList.add('selected-tool');
      replaceCanvas();
    }
  });
  document.addEventListener('keydown', (e) => {
    if (e.keyCode === 'P'.charCodeAt()) {
      deselectTool();
      darken.classList.add('selected-tool');
      replaceCanvas();
    }
  });
  document.addEventListener('keydown', (e) => {
    if (e.keyCode === 'A'.charCodeAt()) {
      deselectTool();
      paintingSamePixels.classList.add('selected-tool');
      replaceCanvas();
    }
  });
  document.addEventListener('keydown', (e) => {
    if (e.keyCode === 'Z'.charCodeAt()) {
      swapColors();
    }
  });
  document.addEventListener('keydown', (e) => {
    if (e.keyCode === 'N'.charCodeAt()) {
      addFrame();
    }
  });
  document.addEventListener('keydown', (e) => {
    if (e.keyCode === 'D'.charCodeAt()) {
      duplicateSelectedFrame();
    }
  });
  document.addEventListener('keydown', (e) => {
    if (e.keyCode === 'X'.charCodeAt()) {
      deleteSelectedFrame();
    }
  });
  document.addEventListener('keydown', (e) => {
    if (e.keyCode === 'F'.charCodeAt()) {
      requestFullscreen();
    }
  });
  document.addEventListener('keydown', (e) => {
    if (e.keyCode === 'S'.charCodeAt()) {
      startPreview();
    }
  });
  document.addEventListener('keydown', (e) => {
    if (e.keyCode === 221) {
      selectNextToolSize();
    }
  });
  document.addEventListener('keydown', (e) => {
    if (e.keyCode === 219) {
      selectPreviousToolSize();
    }
  });
  document.addEventListener('keydown', (e) => {
    if (e.keyCode === 40) {
      selectNextFrame();
    }
  });
  document.addEventListener('keydown', (e) => {
    if (e.keyCode === 38) {
      selectPreviousFrame();
    }
  });
}
