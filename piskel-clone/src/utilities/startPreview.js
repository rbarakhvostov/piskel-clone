export default function startPreview() {
  const previewRange = document.querySelector('.preview-range');
  let frames = document.querySelectorAll('.frame');
  const preview = document.querySelector('.preview');
  const previewContext = preview.getContext('2d');
  previewContext.imageSmoothingEnabled = false;
  function cb(el, i) {
    setTimeout(() => {
      previewContext.clearRect(0, 0, preview.width, preview.height);
      previewContext.drawImage(el, 0, 0, preview.width, preview.height);
    }, i * 1000 / previewRange.value);
  }
  setTimeout(function startAnimation() {
    frames = document.querySelectorAll('.frame');
    frames.forEach(cb);
    setTimeout(startAnimation, frames.length * 1000 / previewRange.value);
  }, 0);
}
