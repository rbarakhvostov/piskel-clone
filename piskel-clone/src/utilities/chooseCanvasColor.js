export default function chooseCanvasColor() {
  const canvas = document.querySelector('.canvas');
  const frames = document.querySelectorAll('.frame');
  const preview = document.querySelector('.preview');
  const canvasColor = document.querySelector('.canvas-color');
  // const eraser = document.querySelector('.eraser');
  // if (eraser.classList.contains('selected-tool')) {
  //   // canvasColor.setAttribute('disabled', 'disabled');
  //   // canvasColor.style.backgroundColor = '#ff0000';
  //   // canvasColor.removeEventListener('input', chooseCanvasColor);
  //   return;
  // }
  canvas.style.backgroundColor = canvasColor.value;
  frames.forEach((el) => {
    const copyEl = el;
    copyEl.style.backgroundColor = canvasColor.value;
  });
  preview.style.backgroundColor = canvasColor.value;
}
