import showInfo from './showInfo';
import hideInfo from './hideInfo';

export default function startShowInfo() {
  const canvas = document.querySelector('.canvas');
  canvas.addEventListener('mousemove', showInfo);
  canvas.addEventListener('mouseleave', hideInfo);
}
