export default function addNumber() {
  const frameNumbers = document.querySelectorAll('.frame-number');
  const frameNumbersLength = frameNumbers.length;
  const frameNumber = frameNumbers[frameNumbersLength - 1];
  frameNumber.textContent = frameNumbersLength;
}
