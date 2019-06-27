// for shortcut;
import replaceCanvas from './replaceCanvas';

export default function increaseToolSize() {
  const toolSize = document.querySelector('.tool-sizes');
  const toolLabels = document.querySelectorAll('.tool-size-label');
  let selectedSize = document.querySelector('.selected-size');
  if (selectedSize === toolLabels[toolLabels.length - 1]) return;
  selectedSize.classList.remove('selected-size');
  selectedSize.nextElementSibling.nextElementSibling.classList.add('selected-size');
  selectedSize = document.querySelector('.selected-size');
  toolSize.elements['tool-size'].value = selectedSize.previousElementSibling.value;
  replaceCanvas();
}
