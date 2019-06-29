import GIF from 'gif.js.optimized';
import download from 'downloadjs';

export default function makeGif() {
  const gif = new GIF({
    worker: 2,
    quality: 10,
    repeat: 0,
  });
  const previewRange = document.querySelector('.preview-range');
  const frames = document.querySelectorAll('.frame');
  const preview = document.querySelector('.preview');
  const previewContext = preview.getContext('2d');
  previewContext.imageSmoothingEnabled = false;
  function cb(el) {
    gif.addFrame(el, { delay: 1000 / previewRange.value });
  }

  frames.forEach(cb);
  gif.on('finished', (blob) => {
    window.open(URL.createObjectURL(blob));
    download(blob, 'pix.gif', 'image/gif');
  });
  gif.render();
}
