export default function addNumber() {
  const framesNumber = document.querySelectorAll('.frame-number');
  const framesNumberLength = framesNumber.length;
  // const frames = document.querySelectorAll('.frame');
  // const framesLength = frames.length;
  const frameNumber = framesNumber[framesNumberLength - 1];
  frameNumber.textContent = framesNumberLength;
}
