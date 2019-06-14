export default function replaceCanvas(...rest) {
  const canvas = document.querySelector('.canvas');
  const main = document.querySelector('.main');
  const canvasCopy = canvas.cloneNode(true);
  const canvasCopyСontext = canvasCopy.getContext('2d');
  canvasCopyСontext.imageSmoothingEnabled = false;
  if (rest[0]) canvasCopyСontext.drawImage(rest[0], 0, 0, 640, 640);
  else canvasCopyСontext.drawImage(canvas, 0, 0);
  main.replaceChild(canvasCopy, canvas);
}
