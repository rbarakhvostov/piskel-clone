export default function startPreview() {
  const previewRange = document.querySelector('.preview-range');
  let frames = document.querySelectorAll('.frame');
  const preview = document.querySelector('.preview');
  const previewContext = preview.getContext('2d');
  previewContext.imageSmoothingEnabled = false;
  function cb(el, i) {
    setTimeout(() => {
      previewContext.clearRect(0, 0, 256, 256);
      previewContext.drawImage(el, 0, 0, 256, 256);
    }, i * 1000 / previewRange.value);
  }
  setTimeout(function startAnimation() {
    frames = document.querySelectorAll('.frame');
    if (previewRange.value === '0') {
      const selectedFrame = document.querySelector('.selected-frame');
      previewContext.clearRect(0, 0, 256, 256);
      previewContext.drawImage(selectedFrame, 0, 0, 256, 256);
    } else {
      frames.forEach(cb);
    }
    setTimeout(startAnimation, frames.length * 1000 / previewRange.value);
  }, 0);
}
