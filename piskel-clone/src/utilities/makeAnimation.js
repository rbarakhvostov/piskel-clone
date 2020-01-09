import GIF from 'gif.js.optimized';
import download from 'downloadjs';

export default function makeAnimation(e) {
  const exportGifButton = document.querySelector('.export-gif-button');
  const exportApngButton = document.querySelector('.export-apng-button');
  const exportRmnButton = document.querySelector('.export-rmn-button');
  let format;
  let mimeType;
  if (e.target === exportGifButton) { format = 'gif'; mimeType = 'image/gif'; }
  if (e.target === exportApngButton) { format = 'png'; mimeType = 'image/png'; }
  if (e.target === exportRmnButton) { format = 'rmn'; mimeType = 'image/gif'; }
  const gif = new GIF({
    worker: 2,
    quality: 10,
    repeat: 0,
  });
  const previewRange = document.querySelector('.preview-range');
  const frames = document.querySelectorAll('.frame');
  function cb(el) {
    gif.addFrame(el, { delay: 1000 / previewRange.value });
  }
  frames.forEach(cb);
  gif.on('finished', (blob) => {
    window.open(URL.createObjectURL(blob));
    download(blob, `pix.${format}`, `${mimeType}`);
  });
  gif.render();
}
