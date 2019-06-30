import showInfo from './showInfo';
import hideInfo from './hideInfo';

export default function startShowInfo() {
  const canvas = document.querySelector('.canvas');
  const cursorCoordinates = document.querySelector('.cursor-coordinates');
  canvas.addEventListener('mousemove', showInfo);
  canvas.addEventListener('mouseleave', hideInfo(cursorCoordinates));
}
