import renderHeader from './components/header/header';
import renderMain from './components/main/main';
import selectTool from './utilities/selectTool';

function start() {
  renderHeader();
  renderMain();
  const toolbar = document.querySelector('.toolbar');
  toolbar.addEventListener('click', selectTool);
}

start();
