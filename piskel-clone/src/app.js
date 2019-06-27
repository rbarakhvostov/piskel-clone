import renderHeader from './components/header/renderHeader';
import renderMain from './components/main/renderMain';
import selectTool from './utilities/selectTool';
import applyTool from './utilities/applyTool';
import addFrame from './utilities/addFrame';
import selectFrame from './utilities/selectFrame';
import startDrawWithPen from './utilities/startDrawWithPen';
import startPreview from './utilities/startPreview';
import requestFullscreen from './utilities/requestFullscreen';
import chooseCanvasColor from './utilities/chooseCanvasColor';
import startShowInfo from './utilities/startShowInfo';
import assignShortcuts from './utilities/assignShortcuts';

function start() {
  renderHeader();
  renderMain();
  startShowInfo();
  assignShortcuts();
  startDrawWithPen();
  const toolbar = document.querySelector('.toolbar');
  toolbar.addEventListener('click', selectTool);
  const framesContainer = document.querySelector('.frames-container');
  framesContainer.addEventListener('click', selectFrame);
  toolbar.addEventListener('click', applyTool);
  const framesButton = document.querySelector('.frames-button');
  framesButton.addEventListener('click', addFrame);

  document.querySelector('.start-animation-button').addEventListener('click', startPreview);
  document.querySelector('.preview-fullscreen').addEventListener('click', requestFullscreen);
  document.querySelector('.canvas-color').addEventListener('input', chooseCanvasColor);

  // document.querySelector('.canvas').addEventListener('mousemove', showInfo);
}

start();
