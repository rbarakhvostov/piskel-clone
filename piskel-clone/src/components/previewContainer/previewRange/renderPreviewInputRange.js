import './previewRange.css';

export default function renderPreviewRange() {
  const previewContainer = document.querySelector('.preview-container');
  previewContainer.insertAdjacentHTML('beforeEnd', '<div class="preview-range-container"><label class="label-preview-range" for="preview-range">fps</label><input class="preview-range" id="preview-range" type="range" min="1" max="24" value="12"><span class="range-value">12</span></div>');
  const previewRange = document.querySelector('.preview-range');
  const rangeValue = document.querySelector('.range-value');
  previewRange.addEventListener('input', () => { rangeValue.textContent = previewRange.value; });
}
