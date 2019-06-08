import renderHeader from './components/header/renderHeader';
import renderMain from './components/main/renderMain';
import selectTool from './utilities/selectTool';
import applyTool from './utilities/applyTool';

function start() {
  renderHeader();
  renderMain();
  const toolbar = document.querySelector('.toolbar');
  toolbar.addEventListener('click', selectTool);
  toolbar.addEventListener('click', applyTool);
}

start();
