export default function frameMapping() {
  const canvas = document.querySelector('.canvas');
  const selectedFrame = document.querySelector('.selected-frame');
  const contextFrame = selectedFrame.getContext('2d');
  contextFrame.imageSmoothingEnabled = false;
  contextFrame.drawImage(canvas, 0, 0, 128, 128);
}
