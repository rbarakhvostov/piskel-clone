import './canvasColor.css';
import chooseCanvasColor from '../../utilities/chooseCanvasColor';

export default function renderCanvasColor() {
  const main = document.querySelector('.main');
  main.insertAdjacentHTML('beforeEnd', '<input type="color" class="canvas-color" title="canvas color" value="#ffffff"></input>');
  const canvasColor = document.querySelector('.canvas-color');
  canvasColor.addEventListener('input', chooseCanvasColor);
}
