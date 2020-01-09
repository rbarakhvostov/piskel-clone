import frameMapping from './frameMapping';

export default function applyInversion() {
  const canvas = document.querySelector('.canvas');
  const context = canvas.getContext('2d');
  const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
  const { data } = imageData;
  for (let i = 0, l = data.length; i < l; i += 4) {
    data[i] = 255 - data[i]; // Invert Red
    data[i + 1] = 255 - data[i + 1]; // Invert Green
    data[i + 2] = 255 - data[i + 2]; // Invert Blue
  }
  context.putImageData(imageData, 0, 0);
  frameMapping();
}
