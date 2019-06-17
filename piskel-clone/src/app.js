import renderHeader from './components/header/renderHeader';
import renderMain from './components/main/renderMain';
import selectTool from './utilities/selectTool';
import applyTool from './utilities/applyTool';
import addFrame from './utilities/newFrame/renderFrame';
import selectFrame from './utilities/selectFrame';
import startDrawWithPen from './utilities/startDrawWithPen';
import startPreview from './utilities/preview';

function start() {
  renderHeader();
  renderMain();
  startDrawWithPen();
  const toolbar = document.querySelector('.toolbar');
  toolbar.addEventListener('click', selectTool);
  const framesContainer = document.querySelector('.frames-container');
  framesContainer.addEventListener('click', selectFrame);
  toolbar.addEventListener('click', applyTool);
  const framesButton = document.querySelector('.frames-button');
  framesButton.addEventListener('click', addFrame);

  document.querySelector('.preview-button').addEventListener('click', startPreview);
}

start();
