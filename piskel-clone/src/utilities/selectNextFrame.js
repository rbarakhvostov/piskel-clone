// for shortcut;
import replaceCanvas from './replaceCanvas';

export default function selectNextFrame() {
  const frames = document.querySelectorAll('.frame');
  let selectedFrame = document.querySelector('.selected-frame');
  const indexSelectedFrame = [...frames].indexOf(selectedFrame);
  if (selectedFrame === frames[frames.length - 1]) return;
  selectedFrame.classList.remove('selected-frame');
  frames[indexSelectedFrame + 1].classList.add('selected-frame');
  selectedFrame = document.querySelector('.selected-frame');
  replaceCanvas(selectedFrame);
}
