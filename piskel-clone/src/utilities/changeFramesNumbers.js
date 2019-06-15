export default function changeFrameNumbers() {
  const frameNumbers = document.querySelectorAll('.frame-number');
  for (let i = 0, l = frameNumbers.length; i < l; i += 1) {
    frameNumbers[i].textContent = Array.prototype.indexOf.call(frameNumbers, frameNumbers[i]) + 1;
  }
}
