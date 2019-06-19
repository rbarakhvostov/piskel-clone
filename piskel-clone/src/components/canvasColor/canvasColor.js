import './canvasColor.css';

export default function renderCanvasColor() {
  const main = document.querySelector('.main');
  main.insertAdjacentHTML('beforeEnd', '<input type="color" class="canvas-color" title="canvas color" value="#ffffff"></input>');
}
