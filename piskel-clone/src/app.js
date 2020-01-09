import renderHeader from './components/header/renderHeader';
import renderMain from './components/main/renderMain';
import startDrawWithPen from './utilities/startDrawWithPen';
import startShowInfo from './utilities/startShowInfo';
import assignShortcuts from './utilities/assignShortcuts';

function start() {
  renderHeader();
  renderMain();
  startShowInfo();
  assignShortcuts();
  startDrawWithPen();
}

start();
